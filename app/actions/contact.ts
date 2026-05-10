"use server";

export async function submitContactForm(prevState: unknown, formData: FormData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const message = formData.get("message");

  if (!name || !phone || !service) {
    return { success: false, message: "Please fill out all required fields." };
  }

  // Simulate server-side processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Here you would typically integrate with an email service (Resend, SendGrid) or a database/CRM.
  console.log("Contact Form Submission:", { name, phone, service, message });

  return { success: true, message: "Thank you! Your request has been received. We will contact you shortly." };
}
