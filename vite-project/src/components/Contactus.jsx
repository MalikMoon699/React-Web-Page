import React from "react";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "78a4f87b-f147-4be2-96f3-72f5ce860ac4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div className="main">
      <div className="viewPage">
        <h2>Contact</h2>
        <h5>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </h5>
        <div className="container">
          <div className="sameContainer">
            <div className="text">
              <h3>Address</h3>
              <p>lahore ,Gulbarg street-25 , Pakistan</p>
            </div>
            <div className="text">
              <h3>Call Us</h3>
              <p>+92 3197166872</p>
            </div>
            <div className="text">
              <h3>Email Us</h3>
              <p>malikmoon.developer061@gmail.com</p>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.8117919919628!2d74.35674777582472!3d31.529328774209947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905029cd0105f%3A0xba835cfdac9ffa1!2s25%20Gulberg%20Rd%2C%20Millat%20Colony%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1739968690374!5m2!1sen!2s"
                width="570"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="sameContainer">
            <form onSubmit={onSubmit}>
              <div className="inputContainer">
                <label htmlFor="name">Enter Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div className="inputContainer">
                <label htmlFor="name">Enter Email</label>
                <input
                  id="name"
                  name="email"
                  type="Email"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="inputContainer">
                <label htmlFor="name">Subject</label>
                <input
                  id="name"
                  name="subject"
                  type="text"
                  placeholder="Enter Subject"
                  required
                />
              </div>
              <div className="inputContainer">
                <label htmlFor="name">Message</label>
                <textarea name="message" id=""></textarea>
              </div>
              <div className="btn-center">
                <button className="btn-1" type="submit">
                  Send Mail
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
