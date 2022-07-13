import React from "react";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const Create = () => {
    useEffect(() => {
        document.title = "Contact";
    }
        , []);
    let username = localStorage.getItem("username");
    let token = localStorage.getItem("token");
    const [post, setPost] = useState({
        "username": { username },
        "title": "",
        "description": "",
        "content": "",
    });
    const handleCreatePost = (event) => {
        event.preventDefault();
        console.log("Post: ", post);
        axios.post("http://localhost:8080/posts/create", post, token)
            .then(res => {
                console.log(res);
                alert("Post Created");
            }
            ).catch(err => { console.log(err); alert("Post not created") });
    }
    return (
        <div>
            <Header message1={"Create Post"} message2={"Tech Otakus save the world"} imageurl={"https://images5.alphacoders.com/110/thumb-1920-1107810.jpg"} />

            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="my-5">
                            <Form id="contactForm" onSubmit={handleCreatePost}>
                                <div className="form-floating">
                                    <Form.Control
                                        className="form-control"
                                        id="title" type="text"
                                        placeholder="Enter post title..."
                                        onChange={(e) => { setPost({ ...post, title: e.target.value }) }}
                                    />
                                    <Form.Label htmlFor="title">Title</Form.Label>
                                </div>
                                <div className="form-floating">
                                    <Form.Control
                                        className="form-control"
                                        id="description"
                                        type="text"
                                        placeholder="Enter post description..."
                                        onChange={(e) => { setPost({ ...post, description: e.target.value }) }}
                                    />
                                    <Form.Label htmlFor="email">Description</Form.Label>
                                </div>
                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        id="content"
                                        placeholder="Enter post content here..." style={{ height: 250 }}
                                        onChange={(e) => { setPost({ ...post, content: e.target.value }) }}
                                    ></textarea>
                                    <Form.Label htmlhtmlFor="content">Content</Form.Label>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <buton className="btn btn-primary text-uppercase" type="submit">
                                        Create →
                                    </buton>
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
export default Create;