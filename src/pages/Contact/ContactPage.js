import React from "react";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const Contact = () => {
    useEffect(() => {
        document.title = "Contact";
    }
    , []);
    return (
        <div>
            <Header message1={"Contact me"} message2={"Tech Otakus save the world"} imageurl={"https://images5.alphacoders.com/110/thumb-1920-1107810.jpg"} />

            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="my-5">
                            <Form id="contactForm">
                                <div className="form-floating">
                                    <Form.Control className="form-control" id="name" type="text" placeholder="Enter your name..." />
                                    <Form.Label htmlFor="name">Name</Form.Label>
                                </div>
                                <div className="form-floating">
                                    <Form.Control className="form-control" id="email" type="email" placeholder="Enter your email..." />
                                    <Form.Label htmlFor="email">Email address</Form.Label>
                                </div>
                                <div className="form-floating">
                                    <Form.Control className="form-control" id="phone" type="tel" placeholder="Enter your phone number..." />
                                    <Form.Label htmlFor="phone">Phone Number</Form.Label>
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" id="message" placeholder="Enter your message here..." style={{height: 250}} ></textarea>
                                    <Form.Label htmlhtmlFor="message">Message</Form.Label>
                                </div>
                                <div className="d-flex justify-content-end mb-4"><div className="btn btn-primary text-uppercase" to="/posts">Send →</div></div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
}
export default Contact;