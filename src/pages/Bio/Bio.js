import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";



const Biography = () => {
    const [bio, setBio] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        birthdate: "",
    });

    const username = localStorage.getItem("username");

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    };
    console.log(username);
    // axios.get(`http://localhost:8080/bio/get-bio/`,{username}, config)
    useEffect(() => {

    axios.get(`http://localhost:8080/bio/get-bio/${username}`,
    config)
    //    {headers: {"Content-Type": "application/json", "Authorization":`Bearer ${localStorage.getItem('token')}` }})
        .then(res => {
            console.log("Res: ", res);
            setBio(res.data);
        }
        ).catch(err => { console.log(err); /*alert("Login Failed") */ });
    }, [] );
    console.log(bio);
    // function handleUpdateBio(event) {
    //     event.preventDefault();
    //     console.log("Bio: ", bio);
    //     axios.post("http://localhost:8080/bio/update", bio)
    //         .then(res => {
    //             console.log(res);
    //             alert("Bio Updated");
    //         }
    //         );

    // }

    return (
        <div>
            <Header message1={"Biography"} message2={"Tech Otakus save the world"} imageurl={"https://images5.alphacoders.com/110/thumb-1920-1107810.jpg"} />

            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="my-5">
                            <Form id="contactForm" 
                            // onSubmit={handleUpdateBio}
                            >
                                <div className="form-floating">
                                    <Form.Control
                                        className="form-control"
                                        id="username" type="username"
                                        onChange={(e) => { setBio({ ...bio, username: e.target.value }) }}
                                    >
                                        {bio.username}
                                    </Form.Control>
                                    <Form.Label htmlFor="username">Username</Form.Label>
                                </div>
                                <div className="form-floating">
                                    <Form.Control
                                        className="form-control"
                                        id="password" type="password"
                                        onChange={(e) => { setBio({ ...bio, password: e.target.value }) }}
                                    >
                                        {bio.password}
                                    </Form.Control>
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                </div>
                                <div className="form-floating">
                                    <Form.Control
                                        className="form-control"
                                        id="firstName"
                                        type="text"
                                        onChange={(e) => { setBio({ ...bio, firstName: e.target.value }) }}
                                    >
                                        {bio.firstName}
                                    </Form.Control>
                                    <Form.Label htmlFor="firstName">First Name</Form.Label>
                                </div>
                                <div className="form-floating">
                                    <Form.Control
                                        className="form-control"
                                        id="lastName"
                                        type="text"
                                        onChange={(e) => { setBio({ ...bio, lastName: e.target.value }) }}
                                    >
                                        {bio.lastName}
                                    </Form.Control>
                                    <Form.Label htmlFor="lastName">Last Name</Form.Label>
                                </div>
                                <div className="form-floating">
                                    <Form.Control
                                        className="form-control"
                                        id="email"
                                        type="email"
                                        onChange={(e) => { setBio({ ...bio, email: e.target.value }) }}
                                    >
                                        {bio.email}
                                    </Form.Control>
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                </div>
                                <div className="form-floating">
                                    <Form.Label htmlFor="message">Birthdate</Form.Label>
                                    <DatePicker
                                        selected={bio.birthdate}
                                        onChange={(date) => { setBio({ ...bio, birthdate: date }) }}
                                        isClearable
                                        placeholderText="Your birthdate"
                                    />
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <button
                                        className="btn btn-primary text-uppercase"
                                        type="submit">
                                        Update →
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
}
export default Biography;