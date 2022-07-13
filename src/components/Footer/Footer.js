import React from "react";
import { FaFacebook, FaGithub,FaSteam } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="border-top">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="https://store.steampowered.com">
                                    <span className="fa-stack fa-lg">
                                        <FaSteam />
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com">
                                    <span className="fa-stack fa-lg">
                                        <FaFacebook />
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com">
                                    <span className="fa-stack fa-lg">
                                        <FaGithub />
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div className="small text-center text-muted fst-italic">Copyright &copy; Your Website 2022</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;