import React from "react";
import "./style.css";
const ContactUs = () => {
  const handleSubmit = () => {
    alert("Thanks for contacting us! :)");
  };
  return (
    <div className="contact-section" id="contact">
      <div className="contact-text-box">
        <div className=" contact-header">
          <h2 className="section-title">
            Collaborate <br />
            <span className="white-line-through">with us</span>
          </h2>
        </div>
        <p className="contact-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          porro vero quia sed quo expedita, voluptate dicta soluta reiciendis!
          <br />
          <br />
          sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          nobis rem, sed corrupti et facilis architecto tenetur, fugit quam
          dolorum eos ratione cum illo, quos ipsa voluptatibus sunt molestiae
          quidem.
        </p>
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-container">
              <label for="name">name</label>
              <input type="text" id="name" placeholder="Name" required></input>
            </div>
            <div className="input-container">
              <label for="surname">surname</label>
              <input
                type="text"
                id="surname"
                placeholder="Surname"
                required
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="input-container">
              <label for="phone">phone</label>
              <input type="tel" id="phone" placeholder="Phone" required></input>
            </div>
            <div className="input-container">
              <label for="email">email address</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="input-container">
              <label for="experience">experience</label>
              <select name="experience" required>
                <option disabled selected hidden value="">
                  Select
                </option>
                <option>Junior Willing to Learn :)</option>
                <option>Intermediate</option>
                <option>Senior</option>
              </select>
            </div>
            <div className="input-container">
              <label for="hear-about">where did you hear about us?</label>
              <select name="hear-about" required>
                <option disabled selected hidden value="">
                  Select
                </option>
                <option>Facebook</option>
                <option>Friends</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <button className="submit-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
