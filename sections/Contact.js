import Link from "next/link"
import { motion } from "framer-motion";
import { Title, TitleSm } from "@/components/common/Title";
import React, { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FiPhone, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    timeframe: "",
    projectDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          budget: formData.budget,
          timeframe: formData.timeframe,
          project_details: formData.projectDetails,
          to_email: "info@solveswitch.com",
        },
        "your_user_id" // Replace with your EmailJS User ID
      )
      .then(
        () => {
          setSuccessMessage("Message sent successfully!");
          setErrorMessage("");
          setFormData({ name: "", email: "", budget: "", timeframe: "", projectDetails: "" });
        },
        () => {
          setErrorMessage("Failed to send message. Please try again.");
          setSuccessMessage("");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <>
      <section className="contact bg-top">
        <div className="container">
        <div className="heading-title">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <TitleSm title="CONTACT" />
    <br />
    <br />
    <Title title="Let's start right now!" className="title-bg" />
  </motion.div>
</div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-details">
                <div className="box">
                <h3>
  <Link href="tel:+2349122553157" legacyBehavior>
    <a style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}>
      <FiPhone size={20} style={{ marginRight: "8px" }} className="icons" />
      +234 912 255 3157
    </a>
  </Link>
</h3>
                  <br />
                  <span>
                    Call us: <br />
                    <br /> Mon - Sat <br />
                    <br /> 9:00am - <br /><br /> 06:00pm
                  </span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Abuja</h3>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>info@solveswitch.com</h3>
                  <br />
                  <span>Drop us a <br /><br />line <br /><br />anytime!</span>
                </div>
              </div>
              <ul>
  <motion.li 
    className="icon"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Link href='/'>
      <BsFacebook size={25} />
    </Link>
  </motion.li>

  <motion.li 
    className="icon"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <AiFillTwitterCircle size={25} />
  </motion.li>

  <motion.li 
    className="icon"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Link href='https://www.instagram.com/solve_switch/'>
      <AiFillInstagram size={25} />
    </Link>
  </motion.li>

  <motion.li 
    className="icon"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <Link href='/'>
      <AiFillLinkedin size={25} />
    </Link>
  </motion.li>

  <motion.li 
    className="icon"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <a href="mailto:info@solveswitch.com">
      <AiOutlineMail size={25} />
    </a>
  </motion.li>
</ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions, business problems or ideas? Fill out the form
                below to get our proposal.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="inputs">
                  <span
  style={{
    display: "block",
    textAlign: "center",
    fontSize: "22px", // Adjust size if needed
    lineHeight: "1.5", // Increases spacing to prevent overlap
    wordWrap: "break-word",
    maxWidth: "100%",
    padding: "10px 0" // Adds spacing if needed
  }}
>
  Name*
</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputs">
                  <span
  style={{
    display: "block",
    textAlign: "center",
    fontSize: "22px", // Adjust size if needed
    lineHeight: "1.5", // Increases spacing to prevent overlap
    wordWrap: "break-word",
    maxWidth: "100%",
    padding: "10px 0" // Adds spacing if needed
  }}
>
  Email*
</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                  <span
  style={{
    display: "block",
    textAlign: "center",
    fontSize: "22px", // Adjust size if needed
    lineHeight: "1.5", // Increases spacing to prevent overlap
    wordWrap: "break-word",
    maxWidth: "100%",
    padding: "10px 0" // Adds spacing if needed
  }}
>
  Your Budget
</span>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}                      
                    />
                  </div>
                  <div className="inputs">
                  <span
  style={{
    display: "block",
    textAlign: "center",
    fontSize: "22px", // Adjust size if needed
    lineHeight: "1.5", // Increases spacing to prevent overlap
    wordWrap: "break-word",
    maxWidth: "100%",
    padding: "10px 0" // Adds spacing if needed
  }}
>
  Project Timeframe*
</span>
                    <input
                      type="text"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="inputs">
                <span
  style={{
    display: "block",
    textAlign: "center",
    fontSize: "22px", // Adjust size if needed
    lineHeight: "1.5", // Increases spacing to prevent overlap
    wordWrap: "break-word",
    maxWidth: "100%",
    padding: "10px 0" // Adds spacing if needed
  }}
>
  Tell Us a Bit About Your Project*
</span>

                  <textarea
                    name="projectDetails"
                    cols="30"
                    rows="5"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button type="submit" className="button-primary" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
