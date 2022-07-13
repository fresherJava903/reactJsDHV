import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

function PostDetail() {
    const [post, setPost] = useState({});
    useEffect(() => {
        const id = localStorage.getItem("id");
        document.title = "PostDetail, id=" + id;
        axios.get("http://localhost:8080/posts/get-all/")
            .then(response => {
                const posts = response.data;
                setPost(posts.find(post => post.id === id));
                console.log(response.data);
            })
    }
        , []);
    return (
        <div>
            <Header message1={post.title} message2={post.description} imageurl={"https://images5.alphacoders.com/112/thumb-1920-1123013.jpg"} />

            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>{post.content}</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default PostDetail;