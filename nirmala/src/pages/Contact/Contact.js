import React, { useState } from "react";
import "../../pages/Contact/Contact.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { toast } from "react-toastify";
import axios from "axios";
import Contactus from "../../Images/contactus.jpg";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please Provide All The Fields");
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });

      //validation sucess
      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src={Contactus} alt="contact" className="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <BsLinkedin
                        color="dark-blue"
                        size={30}
                        className="ms-2"
                      />
                      <BsGithub color="black" size={30} className="ms-2" />
                      <BsFacebook color="blue" size={30} className="ms-2" />
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      className="mb-3"
                      placeholder="Enter your Name"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="email"
                      className="mb-3"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      className="mb-3"
                      placeholder="Write your Message"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <button
                      className="button"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
