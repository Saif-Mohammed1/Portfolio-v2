import emailjs from "@emailjs/browser";

export const emailSender = async (data: FormData) => {
  try {
    const name = data.get("name") as string; // Type assertion for name
    const email = data.get("email") as string; // Type assertion for email
    const message = data.get("message") as string; // Type assertion for message

    // Validate form data
    if (!name || !email || !message) {
      throw new Error("Please fill in all required fields."); // Informative error message
    }

    // Get the form element
    const form = document.getElementById(
      "emailSender"
    ) as HTMLFormElement | null;

    // Check if form is not null before proceeding
    if (form) {
      // Send email using emailjs
      await emailjs.sendForm(
        "service_3k0ekto",
        "template_mms7kkk",
        form, // Pass the form element here
        "vWY253AsB8LFUqx_O"
      );
      // console.log("Email sent successfully");
      return { success: "Email sent successfully" };
    } else {
      throw new Error("Form element not found.");
    }
  } catch (error) {
    // console.error("Error sending email:", error);
    return { error: `Error sending email ${error}` };
  }
};
