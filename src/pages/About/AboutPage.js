import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function About() {
    useEffect(() => {
        document.title = "About";
    }
    , []);
    return (
        <div>
            <Header message1={"Genshin Impact"} message2={"Tech Otakus save the world"} imageurl={"https://images5.alphacoders.com/112/thumb-1920-1123013.jpg"} />

            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>Genshin Impact (Chinese: 原神 Yuánshén) is a free-to-play action RPG developed and published by HoYoverse. Outside of China, Genshin Impact is published by subsidiary Cognosphere Pte Ltd. d/b/a HoYoverse.</p>
                        <p>The game features a fantasy open-world environment and action based combat system using elemental magic, character switching, and gacha monetization system for players to obtain new characters, weapons, and other resources. The game can only be played with an internet connection and features a limited multiplayer mode allowing up to four players in a world.</p>
                        <p>The game was released worldwide on September 28, 2020, for PC, iOS/Android, and PlayStation 4. A PlayStation 5 version was playable on November 11, 2020; it was officially released on April 28, 2021, which features cross-save support with the PlayStation 4.[1][2] A second PC version released on the Epic Games Store on June 9, 2021. The game is also planned to release on the Nintendo Switch.[3]</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
export default About;