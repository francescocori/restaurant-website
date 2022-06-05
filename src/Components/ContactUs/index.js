import React from "react";
import "./style.css";

const ContactUs = () => {
  const handleSubmit = () => {
    alert("Thanks for contacting us! :)");
  };

  return (
    <div className="contact__section" id="contact">
      <div className="contact__section__left">
        <h2 className="contact__title">
          Collaborate <br />
          <span className="contact__title__line__through">with us</span>
        </h2>

        <p className="contact__text">
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
      <div className="contact__section__right">
        <form className="form" onSubmit={handleSubmit}>
          <div className="contact__form__row">
            <div className="input__wrapper">
              <label htmlFor="name">name</label>
              <input type="text" id="name" placeholder="Name" required></input>
            </div>
            <div className="input__wrapper">
              <label htmlFor="surname">surname</label>
              <input
                type="text"
                id="surname"
                placeholder="Surname"
                required
              ></input>
            </div>
          </div>
          <div className="contact__form__row">
            <div className="input__wrapper">
              <label htmlFor="phone">phone</label>
              <input type="tel" id="phone" placeholder="Phone" required></input>
            </div>
            <div className="input__wrapper">
              <label htmlFor="email">email address</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
              ></input>
            </div>
          </div>
          <div className="contact__form__row">
            <div className="input__wrapper">
              <label htmlFor="experience">experience</label>
              <select name="experience" required defaultValue={"default"}>
                <option disabled hidden value="default">
                  Select
                </option>
                <option>Junior Willing to Learn :)</option>
                <option>Intermediate</option>
                <option>Senior</option>
              </select>
            </div>
            <div className="input__wrapper">
              <label htmlFor="hear-about">where did you hear about us?</label>
              <select name="hear-about" required defaultValue={"default"}>
                <option disabled hidden value="default">
                  Select
                </option>
                <option>Facebook</option>
                <option>Friends</option>
                <option>Others</option>
              </select>
            </div>
          </div>
          <button className="contact__form__btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
