import React, { useState, useEffect } from 'react';
import './App.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
const cheerio = require('cheerio');
import { Drawer, List, ListItem, ListItemText, IconButton, duration } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


function App() {
    const [activeTab, setActiveTab] = useState("tab1");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    const openLink = (url) => {
        window.open(url, "_blank"); // Opens in a new tab
    };

    const project_cards = [
        { id: 1, title: 'iTAP Entertainment\n& Gaming', link: "https://play.google.com/store/apps/details?id=com.app.itap&pcampaignid=web_share", image: "https://play-lh.googleusercontent.com/WGGw9sdmGBhWqfhDO54FiSmA__6jR8Cft-M9jutBzzprcMYakmWNANT2HMelsc459A=w480-h960-rw" },
        { id: 2, title: 'Canvia: Art Gallery\nat home', link: "https://play.google.com/store/apps/details?id=com.palacio.canvia&pcampaignid=web_share", image: "https://play-lh.googleusercontent.com/Ztrvf9znaktVCS6J36tPPJI73RC-Sc-FCBQFZ3Hw6u7-DE_rPv-DOi47NP3a4Jqm7Q=w480-h960-rw" },
        { id: 3, title: 'Insta Parenting App:\nPlay-Way', link: "https://play.google.com/store/apps/details?id=com.parenting.instaparenting&pcampaignid=web_share", image: "https://play-lh.googleusercontent.com/KyP59LujVr_v9ZwKQVkfwkb4rCaamItgxxPdsIvApYOXvupWQYYjEFEBwQMDK5JlkADJ=w480-h960-rw" },
        { id: 4, title: 'Aurum KuberX: Loans & Partners', link: "https://play.google.com/store/apps/details?id=com.aurumsoftwaresoultions.aurumkuberxapp&pcampaignid=web_share", image: "https://play-lh.googleusercontent.com/j1NATpTKEBmKCAvcI_v1yYn1lFKPNpfz6AzMukizoRSJzJwuGb5Ijs6PjppDoHSPd_c=w480-h960-rw" },
    ];

    const experience_cards = [
        { id: 1, company_name: 'Aurum Proptech', link: "https://www.aurumproptech.in/", image: "https://www.aurumproptech.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.67e10ce2.png&w=640&q=75", duration: "Oct 2024 - Present", background_color: "#FFFFFF" },
        { id: 2, company_name: 'Traverse TECLabs', link: "https://www.traversetec.co/", image: "https://cdn.prod.website-files.com/66af3993531437b23657a474/66bc49b3b9a7f97cc8bcba18_Traverse%20Tec%20Labs%20Logo.svg", duration: "Aug 2023 - Sep 2024", background_color: "#000000" },
        { id: 3, company_name: 'Inspeero Technologies', link: "https://www.inspeero.com/", image: "https://media.designrush.com/agencies/226632/conversions/Inspeero-Technologies-logo-profile.jpg", duration: "July 2022 - Aug 2023", background_color: "#FFFFFF" },
    ];

    return (
        <div className="App">
            <header className="App-header">
                {/*tool bar*/}
                {screenWidth < 1100 &&
                    <div style={{
                        top: "5px",
                        right: "25px",
                        display: "flex",
                        position: "absolute"
                    }}>
                        {/* Button to Open Drawer */}
                        <IconButton style={{ color: "#00C08D" }} onClick={toggleDrawer(true)} edge="end">
                            <MenuIcon />
                        </IconButton>

                        {/* Drawer */}
                        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                            <List>
                                <ListItem button onClick={() =>
                                    setActiveTab("tab1")} className={`menu ${activeTab === "tab1" ? "active" : ""}`}>
                                    <ListItemText primary="Home" style={{ textAlign: "start", alignItems: "start", }} />
                                </ListItem>
                                <ListItem button onClick={() =>
                                    setActiveTab("tab2")} className={`menu ${activeTab === "tab2" ? "active" : ""}`}>
                                    <ListItemText primary="About" style={{ textAlign: "start", alignItems: "start", }} />
                                </ListItem>
                                <ListItem button onClick={() =>
                                    setActiveTab("tab3")} className={`menu ${activeTab === "tab3" ? "active" : ""}`}>
                                    <ListItemText primary="Projects" style={{ textAlign: "start", alignItems: "start", }} />
                                </ListItem>
                                <ListItem button onClick={() =>
                                    setActiveTab("tab4")} className={`menu ${activeTab === "tab4" ? "active" : ""}`}>
                                    <ListItemText primary="Experience" style={{ textAlign: "start", alignItems: "start", }} />
                                </ListItem>
                                <ListItem button onClick={() =>
                                    setActiveTab("tab5")} className={`menu ${activeTab === "tab5" ? "active" : ""}`}>
                                    <ListItemText primary="Resume" style={{ textAlign: "start", alignItems: "start", }} />
                                </ListItem>
                            </List>
                        </Drawer>
                    </div>}
                {screenWidth >= 1100 && <div className="tool-bar">
                    <div
                        className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                        onClick={() =>
                            setActiveTab("tab1")}
                    >
                        Home
                    </div>
                    <div
                        className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                        onClick={() =>
                            setActiveTab("tab2")}
                    >
                        About
                    </div>
                    <div
                        className={`tab ${activeTab === "tab3" ? "active" : ""}`}
                        onClick={() => setActiveTab("tab3")}
                    >
                        Projects
                    </div>
                    <div
                        className={`tab ${activeTab === "tab4" ? "active" : ""}`}
                        onClick={() => setActiveTab("tab4")}
                    >
                        Experience
                    </div>
                    <div
                        className={`tab ${activeTab === "tab5" ? "active" : ""}`}
                        onClick={() => setActiveTab("tab5")}
                    >
                        Resume
                    </div>
                </div>}

                {/*social bar*/}
                {(activeTab == "tab1" || activeTab == "tab2") ? (<div className="social-bar">
                    <img
                        src='https://th.bing.com/th/id/OIP.k6lUqaSsHH2O9icUX0f_DQHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                        className="image-button"
                        onClick={() => openLink("https://www.facebook.com/people/Prathamesh-Sawardekar/pfbid0kicduEVeoCEzLbD9ebQptiZRLuFbF1NTf7wmYbLttRQ5WTjoqbeQ3au5YMpSoF8l/?mibextid=ZbWKwL")}
                    />
                    <img
                        src='https://static-00.iconduck.com/assets.00/github-icon-2048x2048-dpporae2.png'
                        className="image-button"
                        onClick={() => openLink("https://github.com/Prathamesh72001")}
                    />
                    <img
                        src='https://th.bing.com/th/id/OIP.g8P-sH4xNG_jxN9yUTLoTwHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                        className="image-button"
                        onClick={() => openLink("https://www.linkedin.com/in/prathamesh-sawardekar-3671b9238")}
                    />
                    <img
                        src='https://th.bing.com/th?id=OIP.JtmXSh_uyZBaTg1eXd-NtgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
                        className="image-button"
                        onClick={() => openLink("https://www.instagram.com/prathamesh_pratik_07/?igshid=OGQ5ZDc2ODk2ZA%3D%3D")}
                    />
                    <img
                        src='https://th.bing.com/th/id/OIP.tvKJc7Lvs-0Mo2cYPMugvAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                        className="image-button"
                        onClick={() => openLink("https://telegram.me/prathamesh070401")}
                    />
                    <img
                        src='https://th.bing.com/th/id/OIP.63DXNT7dro-XDctQsQE7VwHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                        className="image-button"
                        onClick={() => openLink("https://wa.link/aiezfi")}
                    />
                </div>) : null}

                {/*circular image*/}
                {(activeTab == "tab1" || activeTab == "tab2") ? (<img
                    className='circular-image'
                    src='https://scontent.fbom11-1.fna.fbcdn.net/v/t39.30808-1/423005933_2058542387854299_4010939541314133147_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=iGRG_cAEFucQ7kNvgFiuCVL&_nc_zt=24&_nc_ht=scontent.fbom11-1.fna&_nc_gid=AiIkfduI1vvUlJNM2YkooXu&oh=00_AYBQUTsXuaIsbnBIRvOnqre5XcVJV3zTBaEJHNrDUkD15w&oe=675DF456'
                ></img>) : null}

                {/*tab titles*/}
                {activeTab == "tab3" && <span style={{ color: "#00C08D", fontFamily: "Arial", fontSize: "35px", marginLeft: "25px", marginRight: "25px" }}>Projects</span>}
                {activeTab == "tab4" && <span style={{ color: "#00C08D", fontFamily: "Arial", fontSize: "35px", marginLeft: "25px", marginRight: "25px" }}>Experience</span>}
                {activeTab == "tab5" && <span style={{ color: "#00C08D", fontFamily: "Arial", fontSize: "35px", marginLeft: "25px", marginRight: "25px" }}>Resume</span>}

                {/*tab1 & tab2 subtitles*/}
                {(activeTab == "tab1" || activeTab == "tab2") ? (<span style={{ color: "#ffffff", fontFamily: "Arial", marginLeft: "25px", marginRight: "25px", fontSize: "20px" }}>Hello I'm</span>) : null}
                {(activeTab == "tab1" || activeTab == "tab2") ? (<span style={{ color: "#00C08D", fontFamily: "Arial", fontSize: "30px", marginLeft: "25px", marginRight: "25px" }}>Prathamesh Sawardekar</span>) : null}

                {/*tab1 & tab2 animated_subtitles*/}
                {activeTab == "tab1" && <TypingAnimation text="  Welcome to My Portfolioo  " speed={100} isInLoop={true} />}
                {activeTab == "tab2" && <TypingAnimation text="  I am an Android/Flutter developer with over 2.5 years of professional experience, specializing in building efficient and user-centric applications. My expertise includes developing cross-platform apps using Flutter, ensuring seamless performance and high-quality UI/UX. Alongside mobile development, I have experience with backend technologies like Node.js, frontend frameworks like React, and cloud platforms such as AWS. I am proficient in tools like Firebase for real-time database and authentication, and FlutterFlow for rapid prototyping. My technical skill set allows me to deliver scalable solutions and contribute effectively to end-to-end app development processes.  "
                    speed={10} isInLoop={false} />}

                {/*tab3 gridview*/}
                {(activeTab == "tab3") ?
                    (<div className="hidden-scrollbar" style={{
                        height: "90vh", // Define height for scrolling to work
                        overflowY: "scroll", // Ensure the content can scroll vertically
                    }}>
                        <div className="grid-container">
                            {project_cards.map((card) => (
                                <div key={card.id} className="grid-card" onClick={() => openLink(card.link)}
                                >
                                    <img src={card.image} alt={card.title} className="card-image" style={{ objectFit: "cover" }} />
                                    <div className="card-text">{card.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>) : null
                }

                {/*tab4 gridview*/}
                {(activeTab == "tab4") ?
                    (<div className="hidden-scrollbar" style={{
                        height: "90vh", // Define height for scrolling to work
                        overflowY: "scroll", // Ensure the content can scroll vertically
                    }}>
                        <div className="grid-container">
                            {experience_cards.map((card) => (
                                <div key={card.id} className="grid-card" onClick={() => openLink(card.link)}
                                >
                                    <img src={card.image} alt={card.company_name} className="card-image" style={{ objectFit: "scale-down", backgroundColor: card.background_color }} />
                                    <div className="card-text">{card.company_name}<h1 style={{ fontSize: "12px" }}>{card.duration}</h1></div>
                                </div>
                            ))}
                        </div>
                    </div>) : null
                }

                {/*tab5 Resume Viewer*/}
                {activeTab == "tab5" && <div>
                    <iframe src="https://drive.google.com/file/d/1-pTkwNKlS99HdnaqweUa4cSsnv0V_o4_/preview" style={{ height: "75vh", width: "100%" }}></iframe>
                </div>}
            </header>
        </div>
    );
}

const TypingAnimation = ({ text, speed, isInLoop }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        let interval;

        const typeText = () => {
            if (currentIndex < text.trim().length) {
                setDisplayedText((prev) => prev + text[currentIndex]);
                currentIndex++;
            } else {
                if (isInLoop) {
                    clearInterval(interval);
                    setTimeout(() => {
                        // Clear the text and restart typing animation after a short delay
                        setDisplayedText("");
                        currentIndex = 0;
                        interval = setInterval(typeText, speed);
                    }, 3000); // Pause for 1 second before restarting
                }
            }
        };

        if (isTyping) {
            interval = setInterval(typeText, speed);
        }

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [text, speed, isTyping]);

    return <div className='padded-span'><span>{displayedText}</span></div>;
};

export default App;
