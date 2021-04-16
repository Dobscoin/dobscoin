import React, { useEffect, useState } from "react";
import "./homeStyle.css";

export default function Home() {
    const [logoColor, setLogoColor] = useState("white");
    const [btnColor, setBtnColor] = useState("black");
    const [btnBg, setBtBg] = useState("white");

    const style = {
        headerLogo: {
            color: logoColor
        },
        headerBtn: {
            color: btnColor,
            backgroundColor: btnBg
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", () => scroll());
    }, []);

    function scroll() {
        let top = document.getElementById("infoSection").getBoundingClientRect().top
        if (top <= 10) {
            setLogoColor("black");
            setBtnColor("white");
            setBtBg("black");
        } else {
            setLogoColor("white");
            setBtnColor("black");
            setBtBg("white");
        }
    }

    function scrollCue() {
        let pageArea = document.getElementById("infoSection");
        pageArea.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            <div id="homePage">
                <div id="header">
                    <div id="headerLogo" className="hoverable" onClick={() => window.location.href="/"}>
                        D
                    </div>
                    <div id="headerTitle" className="hoverable" onClick={() => window.location.href="/"} style={style.headerLogo}>
                        Dobscoin
                    </div>
                    <div id="headerbtn" className="hoverable" style={style.headerBtn} onClick={() => window.location = "https://app.uniswap.org/#/swap"}>
                        Buy DOBS
                    </div>
                </div>
                <div id="heroAnimation">
                    <div id="heroInfo">
                        <div id="heroLogo">
                            <img id="dobsFace" src="https://firebasestorage.googleapis.com/v0/b/ethresources-1ed10.appspot.com/o/IMG_7188.png?alt=media&token=1f1ced11-33b6-4a75-bdb9-2f1d0a93e71e"></img>
                        </div>
                        <div id="heroTitle">
                            Dobscoin
                        </div>
                        <div id="heroSlogan">
                            The superior peer to peer meme coin
                        </div>
                    </div>
                    <img onClick={() => scrollCue()} id="scrollCue" src="https://firebasestorage.googleapis.com/v0/b/ethresources-1ed10.appspot.com/o/arrow-down-sign-to-navigate%20(1).png?alt=media&token=fe6a8bc2-5a73-46d4-94c4-0c599ae56e8a" alt="scroll arrow cue"></img>
                </div>
                <div id="infoSection">
        
                        <img id="dolbyPic" src="https://firebasestorage.googleapis.com/v0/b/ethresources-1ed10.appspot.com/o/IMG_6861.JPG?alt=media&token=e984ff90-f60d-4106-9b81-8cdc510a7353" alt="dolby"></img>
                       

                </div>
                <div id="howItWorks">
                    <div id="totalArea">
                        <div id="totalTitle">
                            Total DOBS in existence
                        </div>
                        <div id="totalSupply">
                            10,000 DOBS
                        </div>
                    </div>
                    {/* <div id="contract">
                        Contract Address: 0x37ecD561fd5e871f68603554EdF04E53ba913936
                    </div> */}
                    <div id="footer">
                        <div className="footerEl">
                            terms
                        </div>
                        <div className="footerEl">
                            github
                        </div>
                        <div className="footerEl">
                            copyright 2021
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}