// Every enquiry is sent to both Web3Forms keys; it counts as sent if either succeeds
const ACCESS_KEYS = [
  "e518a8fe-9f04-48c0-9134-165b943a63e6",
  "d0db7e79-9031-4fa6-95a4-8665a1d3c0ec",
];

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^\d{10}$/; // exactly 10 digits, koi bhi start digit

export async function submitEnquiry(formData) {
  const submitToWeb3Forms = (accessKey) =>
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        ...formData,
      }),
    }).then((res) => res.json());

  const results = await Promise.allSettled(ACCESS_KEYS.map(submitToWeb3Forms));

  return results.some((r) => r.status === "fulfilled" && r.value.success);
}
