// import emailjs from "@emailjs/browser";

// export const emailSender = async (data: FormData) => {
//   try {
//     const name = data.get("name") as string; // Type assertion for name
//     const email = data.get("email") as string; // Type assertion for email
//     const message = data.get("message") as string; // Type assertion for message

//     // Validate form data
//     if (!name || !email || !message) {
//       throw new Error("Please fill in all required fields."); // Informative error message
//     }

//     // Send email using emailjs
//     await emailjs.sendForm(
//       "service_3k0ekto",
//       "template_mms7kkk",
//       { name, email, message },
//       "vWY253AsB8LFUqx_O"
//     );

//     console.log("Email sent successfully");
//     return true; // Indicate success
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return false; // Indicate failure
//   }
// };
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
    const form = document.getElementById("emailSender");

    // Send email using emailjs
    await emailjs.sendForm(
      "service_3k0ekto",
      "template_mms7kkk",
      form, // Pass the form element here
      "vWY253AsB8LFUqx_O"
    );
    // console.log("Email sent successfully");
    return { success: "Email sent successfully" };
  } catch (error) {
    // console.error("Error sending email:", error);
    return { error: `Error sending email ${error}` };
  }
};
