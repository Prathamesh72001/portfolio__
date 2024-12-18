import React, { useState, useEffect } from 'react';
import './App.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
const cheerio = require('cheerio');
import { Drawer, List, ListItem, ListItemText, IconButton, duration } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IoArrowBackCircle, IoLogoGooglePlaystore, IoLogoAppleAppstore, IoGlobeSharp } from "react-icons/io5";

function App() {
    const [activeTab, setActiveTab] = useState("tab1");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [activeProject, setActiveProject] = useState(false);
    const [activeExperience, setActiveExperience] = useState(false);

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

    const menuItems = ["Home", "About", "Projects", "Experience", "Resume"];

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    const openLink = (url) => {
        window.open(url, "_blank"); // Opens in a new tab
    };

    const project_cards = [
        { id: 1, title: 'iTAP Entertainment\n& Gaming', links: [{ android: "https://play.google.com/store/apps/details?id=com.app.itap&pcampaignid=web_share" }, { ios: "https://apps.apple.com/in/app/itap-entertainment-gaming/id6443938485" }, { web: "https://stream.itap.online/" }], image: "https://play-lh.googleusercontent.com/WGGw9sdmGBhWqfhDO54FiSmA__6jR8Cft-M9jutBzzprcMYakmWNANT2HMelsc459A=w480-h960-rw", duration: "May 2023 - October 2024", role: "Android & Flutter Developer", description: "● Played a pivotal role in the development of iTap, a cutting-edge entertainment platform.\n● Proficient in Android development, specialising in creating captivating entertainment experiences, leading toa 25% increase in user engagement and a 20% rise in app ratings on the Google Play Store.\n● Well-versed in iOs development, contributing to the diverse range of content offered on the iTap platform, resulting in a 15% expansion of the user base on iOS devices.\n● Competent in web development, enhancing user experience and accessibility for iTap's web version, resulting in a 30% increase in website traffic and a 25% decrease in bounce rate.\n● Strong background in software development, ensuring the robustness and reliability of iTap across all platforms, leading to a 40% decrease in app crashes and a 20% increase in overall user satisfaction." },
        { id: 2, title: 'Canvia: Art Gallery\nat home', links: [{ android: "https://play.google.com/store/apps/details?id=com.palacio.canvia&pcampaignid=web_share" }], image: "https://play-lh.googleusercontent.com/Ztrvf9znaktVCS6J36tPPJI73RC-Sc-FCBQFZ3Hw6u7-DE_rPv-DOi47NP3a4Jqm7Q=w480-h960-rw", duration: "March 2023 - May 2023", role: "Android Developer", description: "● Spearheaded the development of Canvia, a cutting-edge smart art frame loT project aimed at revolutionising the art viewing experience.\n● Specialised in Internet of Things (IoT) development, ensuring seamless connectivity and functionality of Canvia's smart features.\n● Led Android development efforts for the Canvia mobile application, resulting in a 20% increase in app downloads and a 15% improvement in user retention rates within the first three months of release." },
        { id: 3, title: 'Insta Parenting App:\nPlay-Way', links: [{ android: "https://play.google.com/store/apps/details?id=com.parenting.instaparenting&pcampaignid=web_share" }], image: "https://play-lh.googleusercontent.com/KyP59LujVr_v9ZwKQVkfwkb4rCaamItgxxPdsIvApYOXvupWQYYjEFEBwQMDK5JlkADJ=w480-h960-rw", duration: "January 2023 - March 2023", role: "Android Developer", description: "● Created a user-friendly platform designed to provide an engaging and delightful learning experience for children while laying a strong foundation for academic success.\n● Specialised in Android development to ensure seamless functionality and optimal performance of the Jyppzer Kids mobile application, resulting in a 25% decrease in app loading time and a 30% increase in user engagement, as evidenced by a rise in daily active users." },
        { id: 4, title: 'Aurum KuberX: Loans & Partners', links: [{ android: "https://play.google.com/store/apps/details?id=com.aurumsoftwaresoultions.aurumkuberxapp&pcampaignid=web_share" }, { ios: "https://apps.apple.com/in/app/aurum-kuberx-loans-partners/id6447743833" }, { web: "https://www.aurumkuberx.com/" }], image: "https://play-lh.googleusercontent.com/j1NATpTKEBmKCAvcI_v1yYn1lFKPNpfz6AzMukizoRSJzJwuGb5Ijs6PjppDoHSPd_c=w480-h960-rw", duration: "October 2023 - Present", role: "Full-Stack Developer", description: "" },
    ];

    const renderIcons = (links) => {
        return links.map((link, index) => {
            const [key, value] = Object.entries(link)[0]; // Get the key (type) and value (URL)
            if (key === 'android') {
                return (
                    <a key={index} href={value} target="_blank" rel="noopener noreferrer">
                        <IoLogoGooglePlaystore style={{ color: '#00C08D', height: "calc(5px + 5vmin)", width: "calc(5px + 5vmin)" }} />
                    </a>
                );
            } else if (key === 'ios') {
                return (
                    <a key={index} href={value} target="_blank" rel="noopener noreferrer">
                        <IoLogoAppleAppstore style={{ color: '#00C08D', height: "calc(5px + 5vmin)", width: "calc(5px + 5vmin)" }} />
                    </a>
                );
            } else if (key === 'web') {
                return (
                    <a key={index} href={value} target="_blank" rel="noopener noreferrer">
                        <IoGlobeSharp style={{ color: '#00C08D', height: "calc(5px + 5vmin)", width: "calc(5px + 5vmin)" }} />
                    </a>
                );
            }
            return null;
        });
    };

    const [activeProjectDetail, setActiveProjectDetail] = useState(project_cards[0]);

    const experience_cards = [
        { id: 1, company_name: 'Aurum Proptech', links: [{ web: "https://www.aurumproptech.in/" }], image: "https://www.aurumproptech.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.67e10ce2.png&w=640&q=75", duration: "Oct 2024 - Present", background_color: "#FFFFFF", role: "Analyst - Software Engineer", location: "Ghansoli, Maharashtra", description: "" },
        { id: 2, company_name: 'Traverse TECLabs', links: [{ web: "https://www.traversetec.co/" }], image: "https://cdn.prod.website-files.com/66af3993531437b23657a474/66bc49b3b9a7f97cc8bcba18_Traverse%20Tec%20Labs%20Logo.svg", duration: "Aug 2023 - Sep 2024", background_color: "#000000", role: "Software Engineer", location: "Chembur, Maharashtra", description: "● Developed mobile applications using Flutter for a live client project.\n● Utilised Android development skills to enhance user experience, reducing app loading time by 30% and increasing user retention by 25%.\n● Implemented performance optimizations that resulted in a 40% decrease in app crash incidents, leading to a 15% increase in app store ratings.\n● Maintained app updates and bug fixes to ensure smooth functionality in the production environment." },
        { id: 3, company_name: 'Inspeero Technologies', links: [{ web: "https://www.inspeero.com/" }], image: "https://media.designrush.com/agencies/226632/conversions/Inspeero-Technologies-logo-profile.jpg", duration: "July 2022 - Aug 2023", background_color: "#FFFFFF", role: "Software Engineer", location: "Vidyavihar, Maharashtra", description: "● Collaborated with cross-functional teams to develop and deploy 3 complex mobile applications, meeting all project deadlines and exceeding client expectations.\n● Conducted 20 comprehensive code reviews, resulting in a 25% reduction in bugs and enhancing overall code quality and performance.\n● Developed and maintained Android applications using Java and Kotlin, integrating modern design patterns such as MVP and MVVM, resulting in a 30% increase in app stability.\n● Designed and implemented Flutter-based mobile applications, leveraging UI frameworks and APIs to achieve a 40% improvement in app responsiveness and user satisfaction." },
    ];

    const [activeExperienceDetail, setActiveExperienceDetail] = useState(experience_cards[0]);

    return (
        <div className="App">
            <header>
                {(!activeProject && !activeExperience) ?
                    (<div className='App-header'>
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
                                <Drawer
                                    anchor="right"
                                    open={isDrawerOpen}
                                    onClose={toggleDrawer(false)} // Close drawer when clicking outside
                                >
                                    <List>
                                        {menuItems.map((item, index) => (
                                            <div onClick={() => { setActiveTab("tab" + (index + 1)) }}><ListItem
                                                button
                                                key={index}
                                                onClick={toggleDrawer(false)} // Close drawer when clicking a tab
                                                className={`menu ${activeTab === "tab" + (index + 1) ? "active" : ""}`}
                                            >
                                                <ListItemText primary={item} />
                                            </ListItem></div>
                                        ))}
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
                            src='https://firebasestorage.googleapis.com/v0/b/classmates-attempt2.appspot.com/o/images%2F423005933_2058542387854299_4010939541314133147_n.jpg?alt=media&token=0a67b403-80e2-4250-a2b8-c71a1b41da24'
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

                        {(activeTab != "tab1" && activeTab != "tab2") ? <div className="hidden-scrollbar" style={{
                            height: "90vh", // Define height for scrolling to work
                            overflowY: "scroll", // Ensure the content can scroll vertically
                        }}>
                            {(activeTab == "tab3") ? (<div className="grid-container">
                                {project_cards.map((card) => (
                                    <div key={card.id} className="grid-card" onClick={() => {
                                        setActiveProjectDetail(card);
                                        setActiveProject(true);
                                    }}
                                    >
                                        <img src={card.image} alt={card.title} className="card-image" style={{ objectFit: "cover" }} />
                                        <div className="card-text">{card.title}</div>
                                    </div>
                                ))}</div>)
                                :
                                (activeTab == "tab4") ? (<div className="grid-container">
                                    {experience_cards.map((card) => (
                                        <div key={card.id} className="grid-card" onClick={() => {
                                            setActiveExperienceDetail(card);
                                            setActiveExperience(true);
                                        }}
                                        >
                                            <img src={card.image} alt={card.company_name} className="card-image" style={{ objectFit: "scale-down", backgroundColor: card.background_color }} />
                                            <div className="card-text">{card.company_name}<h1 style={{ fontSize: "12px" }}>{card.duration}</h1></div>
                                        </div>
                                    ))}</div>)
                                    :
                                    (activeTab == "tab5") ? (<div><br /><iframe src="https://drive.google.com/file/d/1-pTkwNKlS99HdnaqweUa4cSsnv0V_o4_/preview" style={{ height: "75vh", width: "100%" }}></iframe></div>) : null}
                        </div>
                            :
                            null}
                    </div>)
                    :
                    activeProject ?
                        (<div className='App-header'>
                            <div style={{
                                top: "15px",
                                left: "15px",
                                display: "flex",
                                position: "absolute",
                            }}>
                                <IconButton style={{ color: "#00C08D", padding: "0px" }} onClick={() => setActiveProject(false)} edge="end">
                                    <IoArrowBackCircle style={{ height: "calc(5px + 5vmin)", width: "calc(5px + 5vmin)" }} />
                                </IconButton>
                            </div>
                            <div className="links-bar">
                                {renderIcons(activeProjectDetail.links)}
                            </div>
                            <img
                                style={{ marginTop: "25px" }}
                                className='circular-image'
                                src={activeProjectDetail.image}
                            ></img>
                            <span style={{ color: "#00C08D", fontFamily: "Arial", fontSize: "20px", marginLeft: "25px", marginRight: "25px" }}>{activeProjectDetail.title}</span>
                            <span style={{ fontFamily: "Arial", fontSize: "20px", marginLeft: "25px", marginRight: "25px", marginTop: "25px" }}>{activeProjectDetail.role}</span>
                            <span style={{ fontStyle: "italic", fontFamily: "Arial", fontSize: "15px", marginLeft: "25px", marginRight: "25px", marginBottom: "25px" }}>{activeProjectDetail.duration}</span>
                            <div className="hidden-scrollbar" style={{
                                height: "45vh", // Define height for scrolling to work
                                overflowY: "scroll", // Ensure the content can scroll vertically
                            }}><span style={{ fontFamily: "Arial", fontSize: "15px", marginLeft: "25px", marginRight: "25px", textAlign: "start" }}>{activeProjectDetail.description.split("\n").map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}</span></div>
                        </div>)
                        :
                        activeExperience ?
                            (<div className='App-header'>
                                <div style={{
                                    top: "15px",
                                    left: "15px",
                                    display: "flex",
                                    position: "absolute",
                                }}>
                                    <IconButton style={{ color: "#00C08D", padding: "0px" }} onClick={() => setActiveExperience(false)} edge="end">
                                        <IoArrowBackCircle style={{ height: "calc(5px + 5vmin)", width: "calc(5px + 5vmin)" }} />
                                    </IconButton>
                                </div>
                                <div className="links-bar">
                                    {renderIcons(activeExperienceDetail.links)}
                                </div>
                                <img
                                    style={{ marginTop: "25px" , backgroundColor: activeExperienceDetail.background_color, objectFit: "scale-down"}}
                                    className='circular-image'
                                    src={activeExperienceDetail.image}
                                ></img>
                                <span style={{ color: "#00C08D", fontFamily: "Arial", fontSize: "20px", marginLeft: "25px", marginRight: "25px" }}>{activeExperienceDetail.company_name}</span>
                                <span style={{ fontFamily: "Arial", fontSize: "20px", marginLeft: "25px", marginRight: "25px", marginTop: "25px" }}>{activeExperienceDetail.role}</span>
                                <span style={{ fontStyle: "italic", fontFamily: "Arial", fontSize: "15px", marginLeft: "25px", marginRight: "25px", marginBottom: "25px" }}>{activeExperienceDetail.location} : {activeExperienceDetail.duration}</span>
                                <div className="hidden-scrollbar" style={{
                                    height: "45vh", // Define height for scrolling to work
                                    overflowY: "scroll", // Ensure the content can scroll vertically
                                }}><span style={{ fontFamily: "Arial", fontSize: "15px", marginLeft: "25px", marginRight: "25px", textAlign: "start" }}>{activeExperienceDetail.description.split("\n").map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}</span></div>
                            </div>)
                            :
                            null
                }
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
