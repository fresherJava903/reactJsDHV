import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Post = () => {
    useEffect(() => {
        document.title = "Post";
    }
        , []);
    const [state, setState] = React.useState({ posts: [] });
    axios.get("http://localhost:8080/posts/get-all")
        .then(response => {
            const posts = response.data;
            setState({ posts });
            console.log(response.data);
        })
        .catch(error => console.log(error));
    return (
        <div>
            <Header message1={"Posts"} message2={"Tech Otakus save the world"} imageurl={"https://images5.alphacoders.com/109/thumb-1920-1099191.jpg"} />

            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {/* Pager */}
                        <div className="d-flex justify-content-end mb-4">
                        </div>
                        {state.posts
                            .sort((post1,post2)=>post1.date>post2.date?-1:1)
                            .map(post => (
                                <div>
                                    <div className="post-preview">
                                        <Link to="/postdetail"
                                            onClick={() => {
                                                localStorage.removeItem("id");
                                                localStorage.setItem("id", post.id)
                                            }} >
                                            <h2 className="post-title"> {post.title} </h2>
                                            <h3 className="post-subtitle"> {post.description} </h3>
                                        </Link>
                                        <p className="post-meta">
                                            Posted by {post.author} on {post.date}
                                        </p>
                                    </div>
                                    <hr className="my-4" />
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default Post;