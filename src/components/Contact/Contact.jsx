import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="socials">
        <h1 className="contactMe">Follow me</h1>
        <div className="socialIcons">
          <a href="https://github.com/Petkov-Petko" target="_blank">
            <i
              className="fa-brands fa-github fa-2xl"
              style={{ color: "#000000" }}
            ></i>
          </a>
          <a href="https://www.facebook.com/petko.zl/" target="_blank">
            <i
              className="fa-brands fa-facebook fa-2xl"
              style={{ color: "#72a3f8" }}
            ></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/petko_zlatilov/">
            <i
              className="fa-brands fa-instagram fa-2xl"
              style={{ color: "#e60fb7" }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/petko-petkov-b87a4828a/"
            target="_blank"
          >
            <i
              className="fa-brands fa-linkedin-in fa-2xl"
              style={{ color: "#184B6D" }}
            ></i>
          </a>
        </div>
      </div>
      <div className="contactForm">
        <h1 className="contactMe">Send me message:</h1>
        <form
          className="form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="ef404200-d91c-4b67-8c87-9b865b72827b"
          />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="comment"
            cols="25"
            rows="3"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
