import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  // State variables to store input values
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !mobileNumber || !emailSubject || !message) {
      toast.error("Please fill all input boxes.");
      return;
    }
    try {
      const result = await axios.post(
        "https://portfolio-backend-six-iota.vercel.app/send-email",
        {
          fullName,
          email,
          mobileNumber,
          emailSubject,
          message,
        }
      );
      console.log("result ==>>", result);

      if (result.status === 200) {
        toast.success("Email sent successfully!");
        setFullName("");
        setEmail("");
        setMobileNumber("");
        setEmailSubject("");
        setMessage("");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <section id="contact" className="h-screen md:px-[75px] px-[30px] py-20">
        <div>
          <h2 className="md:text-6xl text-5xl text-my-theme font-bold text-center py-8 md:py-2 whitespace-nowrap">
            Contact Me <span className="text-white">!</span>
          </h2>
        </div>
        <form
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:px-52 md:py-12 py-5"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              type="text"
              className="w-full border-2 border-my-theme bg-transparent focus:border-my-theme text-white placeholder-white px-4 py-3 rounded-md"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full border-2 border-my-theme bg-transparent text-white placeholder-white px-4 py-3 rounded-md"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full border-2 border-my-theme bg-transparent text-white placeholder-white px-4 py-3 rounded-md"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full border-2 border-my-theme bg-transparent text-white placeholder-white px-4 py-3 rounded-md"
              placeholder="Email Subject"
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
            />
          </div>
          <div className="lg:col-span-2 mb-2">
            <textarea
              className="w-full border-2 border-my-theme bg-transparent text-white placeholder-white px-4 py-2 rounded-md"
              placeholder="Your message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="lg:col-span-2 flex justify-center">
            <button
              type="submit"
              className="h-[50px] md:h-[40px] w-[140px] md:w-[120px] bg-my-theme hover:bg-dark-blue rounded-2xl text-dark-blue hover:text-my-theme hover:border-2 hover:border-my-theme font-extrabold text-xl md:text-lg items-center tracking-tight"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
