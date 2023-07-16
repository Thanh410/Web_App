import React from "react";
import "./contact.scss";
import Image from "next/image";
import Button from "@/compoments/Button/Button";

export const metadata = {
  title: "Lama Dev Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title">Let`s Keep in Touch</h1>
      <div className="content">
        <div className="imgContainer">
          <Image src="/contact.png" alt="" fill={true} className="image" />
        </div>
        <form className="form">
          <input type="text" placeholder="name" className="input" />
          <input type="text" placeholder="email" className="input" />
          <textarea
            className="textArea"
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
