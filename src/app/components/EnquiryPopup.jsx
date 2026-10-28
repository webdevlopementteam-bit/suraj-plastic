"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { EMAIL_REGEX, PHONE_REGEX, submitEnquiry } from "@/app/lib/web3forms";

const FIRST_DELAY = 6000; // first popup 6 sec after the visitor arrives
const REPEAT_DELAY = 12000; // shown again 12 sec after it is closed without submitting
const MAX_SHOWS = 2; // per browser session, so it doesn't keep nagging

const SHOWN_KEY = "enquiryPopupShown"; // sessionStorage: times shown this session
const SUBMITTED_KEY = "enquiryPopupSubmitted"; // localStorage: never show after an enquiry

// Pages that already have a form
const HIDDEN_ON = ["/contact-us", "/thank-you"];

const MACHINES = [
  "Semi Automatic Stretch Blow Moulding Machine",
  "High Speed PET Preform Stretch Blow Moulding Machine",
  "Automatic Hand Feed Blow Moulding Machine",
  "Fully Automatic Stretch Blow Moulding Machine",
  "PET Jar Making Machine",
  "Mineral Water Bottle Making Machine",
  "Spare Parts / Service",
  "Other",
];

// Storage can throw (private mode, blocked site data), so never let it break the page
const storage = {
  get(type, key) {
    try {
      return window[type].getItem(key);
    } catch {
      return null;
    }
  },
  set(type, key, value) {
    try {
      window[type].setItem(key, value);
    } catch {}
  },
};

const timesShown = () => Number(storage.get("sessionStorage", SHOWN_KEY) || 0);

export default function EnquiryPopup() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const timerRef = useRef(null);
  const firstInputRef = useRef(null);

  const hidden = HIDDEN_ON.includes(pathname);

  const schedule = useCallback((delay) => {
    clearTimeout(timerRef.current);

    if (
      storage.get("localStorage", SUBMITTED_KEY) ||
      timesShown() >= MAX_SHOWS
    ) {
      return;
    }

    timerRef.current = setTimeout(() => {
      storage.set("sessionStorage", SHOWN_KEY, String(timesShown() + 1));
      setOpen(true);
    }, delay);
  }, []);

  // First show
  useEffect(() => {
    if (hidden) return;
    schedule(FIRST_DELAY);
    return () => clearTimeout(timerRef.current);
  }, [hidden, schedule]);

  const close = useCallback(() => {
    setOpen(false);
    setError("");
    setFieldErrors({});
    schedule(REPEAT_DELAY);
  }, [schedule]);

  // Esc to close, lock page scroll, focus the first field
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstInputRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, close]);

  const clearFieldError = (field) =>
    setFieldErrors((prev) => ({ ...prev, [field]: "" }));

  const handlePhoneChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
    clearFieldError("phone");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    // form.elements, because form.name is the form's own name attribute
    const fields = form.elements;

    // 🤖 Honeypot bot-check
    if (fields.botcheck.checked) {
      form.reset();
      return;
    }

    const name = fields.name.value.trim();
    const phone = fields.phone.value.trim();
    const email = fields.email.value.trim();
    const machine = fields.machine.value;

    const errors = {
      name: name ? "" : "Name is required",
      phone: PHONE_REGEX.test(phone) ? "" : "Enter a valid 10-digit phone number",
      email: !email || EMAIL_REGEX.test(email) ? "" : "Enter a valid email address",
    };

    if (Object.values(errors).some(Boolean)) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);

    try {
      const sent = await submitEnquiry({
        name,
        phone,
        email,
        machine: machine || "Not specified",
        message: fields.message.value,
        page: window.location.href,
        subject: "New Popup Enquiry - Suraj Plastic Industries",
        from_name: "Suraj Plastic Industries Website",
      });

      if (sent) {
        storage.set("localStorage", SUBMITTED_KEY, "1");
        clearTimeout(timerRef.current);
        setOpen(false);
        form.reset();
        router.push("/thank-you");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (hidden || !open) return null;

  const inputClass = (field) =>
    `h-12 w-full rounded-2xl bg-white px-5 font-urbanist outline-none transition focus:ring-2 focus:ring-[#214B89] ${
      fieldErrors[field] ? "ring-2 ring-red-500" : ""
    }`;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-popup-title"
        className="relative max-h-[90vh] w-full max-w-[460px] overflow-y-auto rounded-[30px] bg-[#A6B4CB] shadow-2xl"
      >
        <div className="rounded-t-[30px] bg-[#1A3E73] px-7 py-5 text-white">
          <p
            id="enquiry-popup-title"
            className="pr-8 font-baloo text-[24px] font-semibold leading-tight"
          >
            Get a Free Quote
          </p>
          <p className="mt-1 font-urbanist text-sm text-white/80">
            Share your requirement and our team will call you back.
          </p>

          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 text-white/80 transition hover:text-white"
          >
            <IoClose size={28} />
          </button>
        </div>

        <form className="space-y-3 p-7" onSubmit={handleSubmit} noValidate>
          <div>
            <input
              ref={firstInputRef}
              type="text"
              name="name"
              placeholder="Your Name *"
              onChange={() => clearFieldError("name")}
              className={inputClass("name")}
            />
            {fieldErrors.name && (
              <p className="mt-1 font-urbanist text-sm font-semibold text-red-700">
                {fieldErrors.name}
              </p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              inputMode="numeric"
              maxLength={10}
              placeholder="Phone Number *"
              onChange={handlePhoneChange}
              className={inputClass("phone")}
            />
            {fieldErrors.phone && (
              <p className="mt-1 font-urbanist text-sm font-semibold text-red-700">
                {fieldErrors.phone}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              onChange={() => clearFieldError("email")}
              className={inputClass("email")}
            />
            {fieldErrors.email && (
              <p className="mt-1 font-urbanist text-sm font-semibold text-red-700">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <select
            name="machine"
            defaultValue=""
            className="h-12 w-full rounded-2xl bg-white px-5 font-urbanist text-[#555] outline-none transition focus:ring-2 focus:ring-[#214B89]"
          >
            <option value="">Machine you are interested in</option>
            {MACHINES.map((machine) => (
              <option key={machine} value={machine}>
                {machine}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            rows={3}
            placeholder="Bottle size / daily output (optional)"
            className="w-full resize-none rounded-2xl bg-white p-5 font-urbanist outline-none transition focus:ring-2 focus:ring-[#214B89]"
          />

          {/* Honeypot */}
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {error && (
            <p className="font-urbanist text-sm font-semibold text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-2xl bg-[#CB6801] font-urbanist text-[18px] font-semibold text-white transition-all duration-300 hover:bg-[#214B89] disabled:opacity-60"
          >
            {loading ? "Sending..." : "Get Free Quote"}
          </button>
        </form>
      </div>
    </div>
  );
}
