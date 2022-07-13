import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { validateUsername, validatePassword } from "../../components/Validation/Validate";


const Login = () => {
    document.title = "Login";
    const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
    let navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/authenticate", loginInfo)
            .then(res => {
                console.log(res);
                if (res.data.token !== null) {
                    alert("Login Successful");
                    localStorage.removeItem("token");
                    localStorage.setItem("token", res.data.token);
                    localStorage.removeItem("username");
                    const username = loginInfo.username;
                    console.log(username)
                    localStorage.setItem("username", username);
                    navigate("/");
                }
            }
            ).catch(err => { console.log(err); alert("Login Failed") });

    }

    const [touched, setTouched] = useState({
        username: false,
        password: false
    });

    const errorUsername = validateUsername(loginInfo.username);
    const errorPassword = validatePassword(loginInfo.password);

    const handleBlur = (event) => {
        setTouched({ ...touched, [event.target.name]: true });}

        return (
            <div>
                <Header message1={"Welcome"} message2={"Tech Otakus save the world"} imageurl={"https://images2.alphacoders.com/110/thumb-1920-1109233.jpg"} />

                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="my-5">
                                <Form id="loginForm" onSubmit={handleLogin} validated={false}>
                                    <Form.Group className="form-floating">
                                        <Form.Control
                                            required
                                            name="username"
                                            className="form-control"
                                            id="name" type="username"
                                            placeholder="Enter your username..."
                                            onChange={(event) => setLoginInfo({ ...loginInfo, username: event.target.value })}
                                            onBlur={handleBlur}
                                            isInvalid={touched.username && Boolean(errorUsername)}
                                            isValid={touched.username && !Boolean(errorUsername)}
                                        />
                                        <Form.Label htmlFor="name">Username</Form.Label>
                                        <Form.Control.Feedback type="invalid">{errorUsername}</Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">Username looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="form-floating">
                                        <Form.Control
                                            className="form-control"
                                            name="password"
                                            id="password" type="password"
                                            placeholder="Enter your password..."
                                            onChange={(event) => setLoginInfo({ ...loginInfo, password: event.target.value })}
                                            onBlur={handleBlur}
                                            isInvalid={touched.password && Boolean(errorPassword)}
                                            isValid={touched.password && !Boolean(errorPassword)}
                                        />
                                        <Form.Label htmlFor="email">Password</Form.Label>
                                        <Form.Control.Feedback type="invalid">{errorPassword}</Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid">Password looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <div className="d-flex justify-content-end mb-4">
                                        <button type="submit" className="btn btn-primary text-uppercase">
                                            Login →
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
    export default Login;