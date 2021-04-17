import React, { useEffect, useState } from "react";
import "./homeStyle.css";

export default function Home() {
    const [logoColor, setLogoColor] = useState("white");
    const [btnColor, setBtnColor] = useState("black");
    const [btnBg, setBtBg] = useState("white");
    const [volume, setVolume] = useState(35)
    let counter = 35;

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
        window.setInterval(count, 100);
        // const timer = setTimeout(() => {
        //     count();
        //   }, 100);
    }, []);

    function count() {
        counter++;
        setVolume(counter);
    }

    function scroll() {
        let heroBottom = document.getElementById("heroAnimation").getBoundingClientRect().bottom
        let blackTop = document.getElementById("stats").getBoundingClientRect().top
        if (heroBottom <= 10) {
            if (blackTop <= 10) {
                setLogoColor("white");
                setBtnColor("black");
                setBtBg("white");
            } else {
                setLogoColor("black");
                setBtnColor("white");
                setBtBg("black");
            }
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
                    <div id="headerLogo" className="hoverable" onClick={() => window.location.href = "/"}>
                        <img id="dobsFaceHeader" alt="dobs face" src="https://firebasestorage.googleapis.com/v0/b/ethresources-1ed10.appspot.com/o/IMG_7188.png?alt=media&token=1f1ced11-33b6-4a75-bdb9-2f1d0a93e71e"></img>
                    </div>
                    <div id="headerTitle" className="hoverable" onClick={() => window.location.href = "/"} style={style.headerLogo}>
                        Dobscoin
                    </div>
                    <div id="headerbtn" className="hoverable" style={style.headerBtn} onClick={() => window.location = "https://app.uniswap.org/#/swap"}>
                        Buy DOBS
                    </div>
                </div>
                <div id="heroAnimation">
                    <div id="heroInfo">
                        <div id="heroLogo">
                            <img id="dobsFace" alt="dobs face" src="https://firebasestorage.googleapis.com/v0/b/ethresources-1ed10.appspot.com/o/IMG_7188.png?alt=media&token=1f1ced11-33b6-4a75-bdb9-2f1d0a93e71e"></img>
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
                    <img id="dolbyPic" src="https://firebasestorage.googleapis.com/v0/b/ethresources-1ed10.appspot.com/o/IMG_7049.JPG?alt=media&token=8fcf029b-010d-4dcc-b47c-452aa3568aa7" alt="dolby"></img>
                    <div id="infoText">
                        <div id="infoTitle">
                            About Dobs
                        </div>
                        <div id="infoParagraph">
                            Meet Colt. He's the cute guy in the picture. He's also the mascot for a next generation meme coin. Colt was found abandoned at an empty building and we saved him. We thought he looked a bit like Dobby from Harry Potter so we call him Dobs for short.
                        </div>
                    </div>
                </div>
                <div id="team">
                    <div>
                        <div id="teamTitle">
                            Meet the team
                        </div>
                        <div id="membersOnly">
                            <div className="memberDiv">
                                <img className="member" src="https://firebasestorage.googleapis.com/v0/b/ethresources-1ed10.appspot.com/o/IMG_7127.jpg?alt=media&token=f45ca466-1de7-4500-a504-8b868e862d0b" alt="member portrait"></img>
                                <div className="memberName">
                                    Crazy Mac
                                </div>
                                <div className="memberTitle">
                                    Lead strategist
                                </div>
                            </div>
                            <div className="memberDiv">
                                <img className="member" src="https://firebasestorage.googleapis.com/v0/b/ethresources-1ed10.appspot.com/o/IMG_7139.jpg?alt=media&token=8cbb8fc1-0909-4312-9640-97495a1ccfbe" alt="member portrait"></img>
                                <div className="memberName">
                                    Crusty Crab Cox
                                </div>
                                <div className="memberTitle">
                                    Marketing
                                </div>
                            </div>
                            <div className="memberDiv">
                                <img className="member" src="https://firebasestorage.googleapis.com/v0/b/ethresources-1ed10.appspot.com/o/IMG_7125.jpg?alt=media&token=6878aac9-1462-427b-a7f6-5661dabeb84b" alt="member portrait"></img>
                                <div className="memberName">
                                    White Man
                                </div>
                                <div className="memberTitle">
                                    Engineer
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div id="contract">
                        Contract Address: 0x37ecD561fd5e871f68603554EdF04E53ba913936
                    </div> */}
                </div>
                <div id="stats">
                    <div id="statsArea">
                        <div className="title">
                            24hr Volume
                        </div>
                        <div className="sub">
                            ${volume}
                        </div>
                        <div className="title" id="marketCap">
                            Market Capitalization
                        </div>
                        <div className="sub">
                            $500
                        </div>
                        <div className="title" id="marketCap">
                            Total DOBS
                        </div>
                        <div className="sub">
                            10,000
                        </div>
                        <div className="title" id="marketCap">
                            Price per DOBS
                        </div>
                        <div className="sub">
                            $0.25
                        </div>
                    </div>
                    <div id="footer">
                        <div className="footerEl" onClick={() => window.location = "https://www.reddit.com/r/Dobscoin/"}>
                            reddit
                        </div>
                        <div>
                            © 2021
                        </div>
                        <div className="footerEl" onClick={() => window.location = "https://etherscan.io/address/0x84d4c9f3f7984b886615706db6beb195d8c98d7e"}>
                            contract
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}