export function buildBookingMessage(form: {
  design: string;
  name: string;
  mobile: string;
  address: string;
  date: string;
  time: string;
  notes: string;
}) {
  return [
    "Hello, I would like to book a design.",
    "",
    `Design: ${form.design || "Not specified"}`,
    `Name: ${form.name || "Not specified"}`,
    `Mobile: ${form.mobile || "Not specified"}`,
    `Address: ${form.address || "Not specified"}`,
    `Preferred date: ${form.date || "Not specified"}`,
    `Preferred time: ${form.time || "Not specified"}`,
    `Notes: ${form.notes || "None"}`,
  ].join("\n");
}
