import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import emailjs from "@emailjs/browser";

const cheerio = require("cheerio");
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  duration,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  IoArrowBackCircle,
  IoLogoGooglePlaystore,
  IoLogoAppleAppstore,
  IoGlobeSharp,
} from "react-icons/io5";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeProject, setActiveProject] = useState(false);
  const [activeExperience, setActiveExperience] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Invalid email format";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const serviceId = "service_ebc52kr"; // Replace with EmailJS service ID
      const templateId = "template_w6ge27q"; // Replace with EmailJS template ID
      const publicKey = "Zn4bdgyPe56rDGiXd"; // Replace with EmailJS public key

      emailjs
        .send(serviceId, templateId, formData, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => console.error("Error sending email:", error));
    }
  };

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

  const words = [
    "  Welcome to My Portfolioo  ",
    "  Android Developerr  ",
    "  Flutter Developerr  ",
    "  Full Stack Developerr  ",
    "  React Developerr  ",
  ];

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experiences",
    "Contact Me",
  ];

  const skill_cards = [
    {
      id: 1,
      title: "Android",
      image:
        "https://th.bing.com/th/id/OIP.NT5qCPKm7zSHSxV2eHpxIwHaEK?pid=ImgDet&w=178&h=100&c=7&dpr=1.5",
    },
    {
      id: 2,
      title: "Flutter",
      image:
        "https://www.daily.co/blog/content/images/2023/07/Flutter-feature.png",
    },
    {
      id: 3,
      title: "Java",
      image:
        "https://th.bing.com/th?q=Java.home+PNG&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 5,
      title: "Dart",
      image:
        "https://th.bing.com/th/id/OIP.HV56KwmRfBGXeCVU4xXleQHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      id: 6,
      title: "Firebase",
      image:
        "https://th.bing.com/th/id/OIP.7lDnfWyu2yN7xzb0BWA1qwHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      id: 7,
      title: "AWS",
      image:
        "https://th.bing.com/th/id/OIP.XOfy2isupxYRTO4sF2g9OgHaEh?w=309&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      id: 9,
      title: "React",
      image:
        "https://th.bing.com/th/id/OIP.gMUAfrHInWGo6p_QSrEVAwHaD8?w=289&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
    {
      id: 10,
      title: "Node",
      image:
        "https://th.bing.com/th/id/OIP.FGXuhei3vz5S-GC38AwDbgHaFj?w=242&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    },
  ];

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const openLink = (url) => {
    window.open(url, "_blank"); // Opens in a new tab
  };

  const renderIcons = (links) => {
    return links.map((link, index) => {
      const [key, value] = Object.entries(link)[0]; // Get the key (type) and value (URL)
      if (key === "android") {
        return (
          <a key={index} href={value} target="_blank" rel="noopener noreferrer">
            <IoLogoGooglePlaystore
              style={{
                color: "#00C08D",
                height: "calc(5px + 5vmin)",
                width: "calc(5px + 5vmin)",
              }}
            />
          </a>
        );
      } else if (key === "ios") {
        return (
          <a key={index} href={value} target="_blank" rel="noopener noreferrer">
            <IoLogoAppleAppstore
              style={{
                color: "#00C08D",
                height: "calc(5px + 5vmin)",
                width: "calc(5px + 5vmin)",
              }}
            />
          </a>
        );
      } else if (key === "web") {
        return (
          <a key={index} href={value} target="_blank" rel="noopener noreferrer">
            <IoGlobeSharp
              style={{
                color: "#00C08D",
                height: "calc(5px + 5vmin)",
                width: "calc(5px + 5vmin)",
              }}
            />
          </a>
        );
      }
      return null;
    });
  };

  const ProjectCard = ({ project }) => {
    const images =
      project.project_images.length > 0 ? project.project_images : null;

    const chunkArray = (array, size) => {
      const result = [];
      for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
      }
      return result;
    };

    const imageChunks = images
      ? chunkArray(images, screenWidth >= 700 ? 3 : 1)
      : [];

    return (
      <div className="image-slider">
        <br />
        {images ? (
          <Carousel
            showArrows={false}
            infiniteLoop={true}
            showThumbs={false}
            autoPlay={true}
            interval={3000} // Auto-scroll interval set to 3 seconds
            stopOnHover={true} // Pause when hovering
            showStatus={false}
            showIndicators={true}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              return (
                <li
                  style={{
                    background: isSelected ? "#00C08D" : "#bbb",
                    width: isSelected ? 16 : 8,
                    height: 8,
                    display: "inline-block",
                    margin: "5px",
                    borderRadius: isSelected ? "35%" : "50%",
                    cursor: "pointer",
                    position: "relative",
                    bottom: "-15px", // Moves the dots below the images
                  }}
                  onClick={onClickHandler}
                  key={index}
                  role="button"
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          >
            {imageChunks.map((chunk, index) => (
              <div key={index} className="slide-container">
                {chunk.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Project ${project.id} image ${index * 3 + idx + 1}`}
                    style={{
                      height: "200px",
                      width: "auto",
                      margin: "0 10px",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="no-images">
            <p>No Images Found</p>
          </div>
        )}
        <br />
      </div>
    );
  };

  const project_cards = [
    {
      id: 1,
      title: "iTAP Entertainment\n& Gaming",
      links: [
        {
          android:
            "https://play.google.com/store/apps/details?id=com.app.itap&pcampaignid=web_share",
        },
        {
          ios: "https://apps.apple.com/in/app/itap-entertainment-gaming/id6443938485",
        },
        { web: "https://stream.itap.online/" },
      ],
      project_images: [
        "https://play-lh.googleusercontent.com/HpHqsQpo8NS-7VCQeF8ISnqYtNNHRQKBvEXP9Imr6SOnqufNm1jjduwkkGAN6er7KtFk=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/Mh2sb01OwyA0ToYBlDxFyQt6dbrhoKyXN-IXXv42mgFZwO2YELLWT5Wx5Pips_VxDE8=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/FCDuGCtzc3w6sjwCNzepeuEFB-QZSEcoC4G9ubWC62iWgK4EnBeaOUOFDEWCg9Q1qFw=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/FPnUUU7IZvdocZ__ECLpoGjlnmbZd9ApOgfpulEfuK2l_bU1XMEQHn7-4VxyL3yKRK4=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/o5-FOJ0fGSY89JDZ6PSohvcCVcB_lDLHwhx75Accye0N14CPyt6R_RsfHVi17m9olQ=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/9lDIWWcRQKKnZeYTsZc95Ebi80NUVqVAJDSuqm6VX_4JQDReMQsXkIFzctenUWWyRGEE=w1052-h592-rw",
      ],
      image:
        "https://play-lh.googleusercontent.com/WGGw9sdmGBhWqfhDO54FiSmA__6jR8Cft-M9jutBzzprcMYakmWNANT2HMelsc459A=w480-h960-rw",
      duration: "May 2023 - October 2024",
      role: "Android & Flutter Developer",
      description:
        "● Played a pivotal role in the development of iTap, a cutting-edge entertainment platform.\n● Proficient in Android development, specialising in creating captivating entertainment experiences, leading toa 25% increase in user engagement and a 20% rise in app ratings on the Google Play Store.\n● Well-versed in iOs development, contributing to the diverse range of content offered on the iTap platform, resulting in a 15% expansion of the user base on iOS devices.\n● Competent in web development, enhancing user experience and accessibility for iTap's web version, resulting in a 30% increase in website traffic and a 25% decrease in bounce rate.",
    },
    {
      id: 2,
      title: "Canvia: Art Gallery\nat home",
      links: [
        {
          android:
            "https://play.google.com/store/apps/details?id=com.palacio.canvia&pcampaignid=web_share",
        },
      ],
      project_images: [
        "https://play-lh.googleusercontent.com/WtRvwOulVcxhGuJeIclWyn3d8DDmjJA_hRTcrJXNz4Thaqj502Gtg0y1EKffzuXvOhc=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/z0VrNRbZPeEaayA6FW0nw3wObt0cZINEfjx3SAupkRJsjXKKNA8HzwtA8Q9ahqBOOw=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/dVRzn-9YElunYuR64gCzyJ8tKVz88p_xHJ6FgUXSdfwGD8_XrMaL8xaqVbnE84Q8fQ=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/CdEnBJd0OH3LPbHaJdrg59MavAJgm8luwrKjiIXh3D6-6EUvHiF0oNXL_eyGG7IV3w=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/0sX0P9gFmYaHOkAqZBpLvxO5Y5yj-lphdyEBO11WyzHKF9h0xCDZjdeGNualv60h8PwE=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/XpWD9LN7XqywdzuVi5GfTu7mB1cu8PJN51r7-mvaiOG_0OtRf4dMPKKUq2ZwLEog3qg=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/DpnQsKmqnUiuOVNUv51lgg7YgPxhJpLXnBJZTFCh5akpLuBdq9FPBxiwwCvJmbZ46qs=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/-JlTLS3H5kgd2lp4r9Xp7_6aGan8MbcAi8AIrFzD01wYHTcaimXaiIen3zjoxbJTxg=w1052-h592-rw",
      ],
      image:
        "https://play-lh.googleusercontent.com/Ztrvf9znaktVCS6J36tPPJI73RC-Sc-FCBQFZ3Hw6u7-DE_rPv-DOi47NP3a4Jqm7Q=w480-h960-rw",
      duration: "March 2023 - May 2023",
      role: "Android Developer",
      description:
        "● Spearheaded the development of Canvia, a cutting-edge smart art frame loT project aimed at revolutionising the art viewing experience.\n● Specialised in Internet of Things (IoT) development, ensuring seamless connectivity and functionality of Canvia's smart features.\n● Led Android development efforts for the Canvia mobile application, resulting in a 20% increase in app downloads and a 15% improvement in user retention rates within the first three months of release.",
    },
    {
      id: 3,
      title: "Insta Parenting App:\nPlay-Way",
      links: [
        {
          android:
            "https://play.google.com/store/apps/details?id=com.parenting.instaparenting&pcampaignid=web_share",
        },
      ],
      project_images: [
        "https://play-lh.googleusercontent.com/Zn4pMjYjJza-Fc0uxxnE1wjws9QX4S6-A91AxRpbkgO3fZVziuuEAIb6sBJV1u0PQw=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/hYecHSGypooyanJB_H29SpVj_LYlwK36lzaVtkiLgmkOdLhTULE6xZGvoz_2GgCHsg=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/_9_nbZaaExfbH4CYCsfSr_OWTaVEmw7XaDZuj2jGhu_PJPc4_c7XjwMWre4PZvhnmQ=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/qLbxjNUSqypiv0eAU_2UJx_uIjGMcPUewEq3n6v2pW7Kr6ZDHDxk7SWf2jmYhJIlCkyV=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/H1GZSglqfdlBrN1Y7l451DwIge9jmCmRmi7B2NYM9Mmb1kys35X_Y23903dI38ZiHvk=w1052-h592-rw",
      ],
      image:
        "https://play-lh.googleusercontent.com/KyP59LujVr_v9ZwKQVkfwkb4rCaamItgxxPdsIvApYOXvupWQYYjEFEBwQMDK5JlkADJ=w480-h960-rw",
      duration: "January 2023 - March 2023",
      role: "Android Developer",
      description:
        "● Created a user-friendly platform designed to provide an engaging and delightful learning experience for children while laying a strong foundation for academic success.\n● Specialised in Android development to ensure seamless functionality and optimal performance of the Insta Parent mobile application, resulting in a 25% decrease in app loading time and a 30% increase in user engagement, as evidenced by a rise in daily active users.",
    },
    {
      id: 4,
      title: "Aurum KuberX: Loans & Partners",
      links: [
        {
          android:
            "https://play.google.com/store/apps/details?id=com.aurumsoftwaresoultions.aurumkuberxapp&pcampaignid=web_share",
        },
        {
          ios: "https://apps.apple.com/in/app/aurum-kuberx-loans-partners/id6447743833",
        },
        { web: "https://www.aurumkuberx.com/" },
      ],
      project_images: [
        "https://play-lh.googleusercontent.com/O9tU6bqG-hayoJ7L4td9gLwMVPo-SE0atZ5in1YzxMHKv5ICARCoMKVNVc11I_CctQ=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/t_0qg_YKP1trP0kjbbV-GrWkImXSxWmoW1NpdfL1M3959oYZLxx6TR2k299lVVU0oA=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/jVzbzidqqyJBct6aytNvUg-3gp8bte7Ti8HfBejZfiuwqP1EdDNPkOm3wICyIFRHDqKZ=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/D3ad7S0rSXiMNyId9vVhWD8QWfWbKfu_c-Mvr8v7Z9sCtFFcCcJV_-cU01gZkzD0=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/hti58JrMvLKKeoLYKqco2NAUic1dZzVlTfjcNmgduE-YL-iGDWTwABrjj780OkjdYA=w1052-h592-rw"
      ],
      image:
        "https://play-lh.googleusercontent.com/j1NATpTKEBmKCAvcI_v1yYn1lFKPNpfz6AzMukizoRSJzJwuGb5Ijs6PjppDoHSPd_c=w480-h960-rw",
      duration: "October 2023 - Present",
      role: "Full-Stack Developer",
      description: "● Developed and maintained a cross-platform mobile app using Flutter, enabling financial professionals (Connectors, DSAs, Channel Partners) to create, manage, and track banking loan leads.\n● Engineered and consumed backend RESTful APIs using Node.js and Express, integrating secure and scalable data flows between the mobile app, partner dashboards, and admin panels.\n● Helped grow app usage from 200 to over 1000+ downloads, contributing directly to user adoption and business scaling.\n● Ensured mobile app codebase followed best practices with version control, modular architecture, and scalable design patterns.",
    },
  ];

  const [activeProjectDetail, setActiveProjectDetail] = useState(
    project_cards[0]
  );

  const experience_cards = [
    {
      id: 1,
      company_name: "Aurum Proptech",
      links: [{ web: "https://www.aurumproptech.in/" }],
      image:
        "https://www.aurumproptech.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.67e10ce2.png&w=640&q=75",
      duration: "Oct 2024 - Present",
      background_color: "#FFFFFF",
      role: "Analyst - Software Engineer",
      location: "Ghansoli, Maharashtra",
      description: "● Spearheaded mobile development for Aurum KuberX using Flutter, delivering a seamless experience across Android and iOS for Connectors, DSAs, and Channel Partners to manage and track loan leads.\n● Contributed to backend development using Node.js and Express, designing and optimizing APIs powering mobile functionality and partner dashboards.\n● Implemented features like reward and referral systems, transaction tracking, and real-time lead status updates, increasing app engagement and retention.\n● Collaborated closely with cross-functional teams to scale app downloads from 200 to 1000+, driving significant growth in platform adoption.\n● Ensured app stability and performance with effective bug tracking and resolution, reducing reported issues by over 30%.",
    },
    {
      id: 2,
      company_name: "Traverse TECLabs",
      links: [{ web: "https://www.traversetec.co/" }],
      image:
        "https://cdn.prod.website-files.com/66af3993531437b23657a474/66bc49b3b9a7f97cc8bcba18_Traverse%20Tec%20Labs%20Logo.svg",
      duration: "Aug 2023 - Sep 2024",
      background_color: "#000000",
      role: "Software Engineer",
      location: "Chembur, Maharashtra",
      description:
        "● Developed mobile applications using Flutter for a live client project.\n● Utilised Android development skills to enhance user experience, reducing app loading time by 30% and increasing user retention by 25%.\n● Implemented performance optimizations that resulted in a 40% decrease in app crash incidents, leading to a 15% increase in app store ratings.\n● Maintained app updates and bug fixes to ensure smooth functionality in the production environment.",
    },
    {
      id: 3,
      company_name: "Inspeero Technologies",
      links: [{ web: "https://www.inspeero.com/" }],
      image:
        "https://media.designrush.com/agencies/226632/conversions/Inspeero-Technologies-logo-profile.jpg",
      duration: "July 2022 - Aug 2023",
      background_color: "#FFFFFF",
      role: "Software Engineer",
      location: "Vidyavihar, Maharashtra",
      description:
        "● Collaborated with cross-functional teams to develop and deploy 3 complex mobile applications, meeting all project deadlines and exceeding client expectations.\n● Conducted 20 comprehensive code reviews, resulting in a 25% reduction in bugs and enhancing overall code quality and performance.\n● Developed and maintained Android applications using Java and Kotlin, integrating modern design patterns such as MVP and MVVM, resulting in a 30% increase in app stability.\n● Designed and implemented Flutter-based mobile applications, leveraging UI frameworks and APIs to achieve a 40% improvement in app responsiveness and user satisfaction.",
    },
  ];

  const [activeExperienceDetail, setActiveExperienceDetail] = useState(
    experience_cards[0]
  );

  return (
    <div className="App">
      <header>
        {!activeProject && !activeExperience ? (
          <div className="App-header">
            {/*tool bar*/}
            {screenWidth < 1400 && (
              <div
                style={{
                  top: "5px",
                  right: "25px",
                  display: "flex",
                  position: "absolute",
                }}
              >
                {/* Button to Open Drawer */}
                <IconButton
                  style={{ color: "#00C08D" }}
                  onClick={toggleDrawer(true)}
                  edge="end"
                >
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
                      <div
                        onClick={() => {
                          setActiveTab("tab" + (index + 1));
                        }}
                      >
                        <ListItem
                          button
                          key={index}
                          onClick={toggleDrawer(false)} // Close drawer when clicking a tab
                          className={`menu ${
                            activeTab === "tab" + (index + 1) ? "active" : ""
                          }`}
                        >
                          <ListItemText primary={item} />
                        </ListItem>
                      </div>
                    ))}
                  </List>
                </Drawer>
              </div>
            )}
            {screenWidth >= 1400 && (
              <div className="tool-bar">
                <div
                  className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                  onClick={() => setActiveTab("tab1")}
                >
                  Home
                </div>
                <div
                  className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                  onClick={() => setActiveTab("tab2")}
                >
                  About
                </div>
                <div
                  className={`tab ${activeTab === "tab3" ? "active" : ""}`}
                  onClick={() => setActiveTab("tab3")}
                >
                  Skills
                </div>
                <div
                  className={`tab ${activeTab === "tab4" ? "active" : ""}`}
                  onClick={() => setActiveTab("tab4")}
                >
                  Projects
                </div>
                <div
                  className={`tab ${activeTab === "tab5" ? "active" : ""}`}
                  onClick={() => setActiveTab("tab5")}
                >
                  Experience
                </div>
                <div
                  className={`tab ${activeTab === "tab6" ? "active" : ""}`}
                  onClick={() => setActiveTab("tab6")}
                >
                  Contact Me
                </div>
              </div>
            )}

            {/*social bar*/}
            {activeTab == "tab1" || activeTab == "tab2" ? (
              <div className="social-bar">
                <img
                  src="https://th.bing.com/th/id/OIP.k6lUqaSsHH2O9icUX0f_DQHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  className="image-button"
                  onClick={() =>
                    openLink(
                      "https://www.facebook.com/people/Prathamesh-Sawardekar/pfbid0kicduEVeoCEzLbD9ebQptiZRLuFbF1NTf7wmYbLttRQ5WTjoqbeQ3au5YMpSoF8l/?mibextid=ZbWKwL"
                    )
                  }
                />
                <img
                  src="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-dpporae2.png"
                  className="image-button"
                  onClick={() => openLink("https://github.com/Prathamesh72001")}
                />
                <img
                  src="https://th.bing.com/th/id/OIP.g8P-sH4xNG_jxN9yUTLoTwHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  className="image-button"
                  onClick={() =>
                    openLink(
                      "https://www.linkedin.com/in/prathamesh-sawardekar-3671b9238"
                    )
                  }
                />
                <img
                  src="https://th.bing.com/th?id=OIP.JtmXSh_uyZBaTg1eXd-NtgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                  className="image-button"
                  onClick={() =>
                    openLink(
                      "https://www.instagram.com/prathamesh_pratik_07/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                    )
                  }
                />
                <img
                  src="https://th.bing.com/th/id/OIP.tvKJc7Lvs-0Mo2cYPMugvAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  className="image-button"
                  onClick={() =>
                    openLink("https://telegram.me/prathamesh070401")
                  }
                />
                <img
                  src="https://th.bing.com/th/id/OIP.63DXNT7dro-XDctQsQE7VwHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  className="image-button"
                  onClick={() => openLink("https://wa.link/aiezfi")}
                />
              </div>
            ) : null}

            {/*circular image*/}
            {activeTab == "tab1" || activeTab == "tab2" ? (
              <img
                className="circular-image"
                src="https://firebasestorage.googleapis.com/v0/b/classmates-attempt2.appspot.com/o/images%2F423005933_2058542387854299_4010939541314133147_n.jpg?alt=media&token=0a67b403-80e2-4250-a2b8-c71a1b41da24"
              ></img>
            ) : null}

            {/*tab titles*/}
            {activeTab == "tab4" && (
              <span
                style={{
                  color: "#00C08D",
                  fontFamily: "Arial",
                  fontSize: "35px",
                  marginLeft: "25px",
                  marginRight: "25px",
                }}
              >
                Projects
              </span>
            )}
            {activeTab == "tab5" && (
              <span
                style={{
                  color: "#00C08D",
                  fontFamily: "Arial",
                  fontSize: "35px",
                  marginLeft: "25px",
                  marginRight: "25px",
                }}
              >
                Experience
              </span>
            )}
            {activeTab == "tab3" && (
              <span
                style={{
                  color: "#00C08D",
                  fontFamily: "Arial",
                  fontSize: "35px",
                  marginLeft: "25px",
                  marginRight: "25px",
                }}
              >
                Skills
              </span>
            )}
            {activeTab == "tab6" && (
              <span
                style={{
                  color: "#00C08D",
                  fontFamily: "Arial",
                  fontSize: "35px",
                  marginLeft: "25px",
                  marginRight: "25px",
                }}
              >
                Contact Me
              </span>
            )}

            {/*tab1 & tab2 subtitles*/}
            {activeTab == "tab1" || activeTab == "tab2" ? (
              <span
                style={{
                  color: "#ffffff",
                  fontFamily: "Arial",
                  marginLeft: "25px",
                  marginRight: "25px",
                  fontSize: "20px",
                }}
              >
                Hello I'm
              </span>
            ) : null}
            {activeTab == "tab1" || activeTab == "tab2" ? (
              <span
                style={{
                  color: "#00C08D",
                  fontFamily: "Arial",
                  fontSize: "30px",
                  marginLeft: "25px",
                  marginRight: "25px",
                }}
              >
                Prathamesh Sawardekar
              </span>
            ) : null}

            {/*tab1 & tab2 animated_subtitles*/}
            {activeTab == "tab1" && (
              <TypingAnimation
                texts={words}
                speed={100}
                isInLoop={true}
                pause={3000}
              />
            )}
            {activeTab == "tab2" && (
              <TypingAnimation
                texts={[
                  "  I am an Android/Flutter developer with over 2.5 years of professional experience, specializing in building efficient and user-centric applications. My expertise includes developing cross-platform apps using Flutter, ensuring seamless performance and high-quality UI/UX. Alongside mobile development, I have experience with backend technologies like Node.js, frontend frameworks like React, and cloud platforms such as AWS. I am proficient in tools like Firebase for real-time database and authentication, and FlutterFlow for rapid prototyping. My technical skill set allows me to deliver scalable solutions and contribute effectively to end-to-end app development processes..  ",
                ]}
                speed={10}
                isInLoop={false}
                pause={3000}
              />
            )}

            {activeTab == "tab1" || activeTab == "tab2" ? (
              <button
                class="rounded-button"
                onClick={() => {
                  openLink(
                    "https://drive.google.com/file/d/181rvSCE0DB5i3c04iWii478Acx5Jh2He/view?usp=drive_link"
                  );
                }}
              >
                Download Resume
              </button>
            ) : null}

            {activeTab != "tab1" && activeTab != "tab2" ? (
              <div
                className="hidden-scrollbar"
                style={{
                  height: "87.5vh", // Define height for scrolling to work
                  overflowY: "scroll", // Ensure the content can scroll vertically
                }}
              >
                {activeTab == "tab4" ? (
                  <div className="grid-container">
                    {project_cards.map((card) => (
                      <div
                        key={card.id}
                        className="grid-card"
                        onClick={() => {
                          setActiveProjectDetail(card);
                          setActiveProject(true);
                        }}
                      >
                        <img
                          src={card.image}
                          alt={card.title}
                          className="card-image"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="card-text">{card.title}</div>
                      </div>
                    ))}
                  </div>
                ) : activeTab == "tab5" ? (
                  <div className="grid-container">
                    {experience_cards.map((card) => (
                      <div
                        key={card.id}
                        className="grid-card"
                        onClick={() => {
                          setActiveExperienceDetail(card);
                          setActiveExperience(true);
                        }}
                      >
                        <img
                          src={card.image}
                          alt={card.company_name}
                          className="card-image"
                          style={{
                            objectFit: "scale-down",
                            backgroundColor: card.background_color,
                          }}
                        />
                        <div className="card-text">
                          {card.company_name}
                          <h1 style={{ fontSize: "12px" }}>{card.duration}</h1>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : activeTab == "tab3" ? (
                  <div className="grid-container">
                    {skill_cards.map((card) => (
                      <div key={card.id} className="grid-card">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="card-image"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="card-text">{card.title}</div>
                      </div>
                    ))}
                  </div>
                ) : activeTab == "tab6" ? (
                  <div className="contact-container">
                    {submitted && (
                      <p className="success-message">
                        Thank you for reaching out! I'll get back to you soon.
                      </p>
                    )}
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Name:</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <p className="error-text">{errors.name}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Email:</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p className="error-text">{errors.email}</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Message:</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                        {errors.message && (
                          <p className="error-text">{errors.message}</p>
                        )}
                      </div>
                      <button className="rounded-button">Send Message</button>
                    </form>
                    <br />
                    <br />
                    <div className="social-bar-horizontal">
                      <img
                        src="https://th.bing.com/th/id/OIP.k6lUqaSsHH2O9icUX0f_DQHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                        className="image-button"
                        onClick={() =>
                          openLink(
                            "https://www.facebook.com/people/Prathamesh-Sawardekar/pfbid0kicduEVeoCEzLbD9ebQptiZRLuFbF1NTf7wmYbLttRQ5WTjoqbeQ3au5YMpSoF8l/?mibextid=ZbWKwL"
                          )
                        }
                      />
                      <img
                        src="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-dpporae2.png"
                        className="image-button"
                        onClick={() =>
                          openLink("https://github.com/Prathamesh72001")
                        }
                      />
                      <img
                        src="https://th.bing.com/th/id/OIP.g8P-sH4xNG_jxN9yUTLoTwHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                        className="image-button"
                        onClick={() =>
                          openLink(
                            "https://www.linkedin.com/in/prathamesh-sawardekar-3671b9238"
                          )
                        }
                      />
                      <img
                        src="https://th.bing.com/th?id=OIP.JtmXSh_uyZBaTg1eXd-NtgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                        className="image-button"
                        onClick={() =>
                          openLink(
                            "https://www.instagram.com/prathamesh_pratik_07/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                          )
                        }
                      />
                      <img
                        src="https://th.bing.com/th/id/OIP.tvKJc7Lvs-0Mo2cYPMugvAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                        className="image-button"
                        onClick={() =>
                          openLink("https://telegram.me/prathamesh070401")
                        }
                      />
                      <img
                        src="https://th.bing.com/th/id/OIP.63DXNT7dro-XDctQsQE7VwHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                        className="image-button"
                        onClick={() => openLink("https://wa.link/aiezfi")}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : activeProject ? (
          <div className="App-header">
            <div
              style={{
                top: "15px",
                left: "15px",
                display: "flex",
                position: "absolute",
              }}
            >
              <IconButton
                style={{ color: "#00C08D", padding: "0px" }}
                onClick={() => setActiveProject(false)}
                edge="end"
              >
                <IoArrowBackCircle
                  style={{
                    height: "calc(5px + 5vmin)",
                    width: "calc(5px + 5vmin)",
                  }}
                />
              </IconButton>
            </div>
            <div className="links-bar">
              {renderIcons(activeProjectDetail.links)}
            </div>
            <ProjectCard
              key={activeProjectDetail.id}
              project={activeProjectDetail}
            />
            <span
              style={{
                color: "#00C08D",
                fontFamily: "Arial",
                fontSize: "20px",
                marginLeft: "25px",
                marginRight: "25px",
              }}
            >
              {activeProjectDetail.title}
            </span>
            <span
              style={{
                fontFamily: "Arial",
                fontSize: "20px",
                marginLeft: "25px",
                marginRight: "25px",
                marginTop: "25px",
              }}
            >
              {activeProjectDetail.role}
            </span>
            <span
              style={{
                fontStyle: "italic",
                fontFamily: "Arial",
                fontSize: "15px",
                marginLeft: "25px",
                marginRight: "25px",
                marginBottom: "25px",
              }}
            >
              {activeProjectDetail.duration}
            </span>
            <div
              className="hidden-scrollbar"
              style={{
                height: "45vh", // Define height for scrolling to work
                overflowY: "scroll", // Ensure the content can scroll vertically
              }}
            >
              <span
                style={{
                  fontFamily: "Arial",
                  fontSize: "15px",
                  marginLeft: "25px",
                  marginRight: "25px",
                  textAlign: "start",
                }}
              >
                {activeProjectDetail.description
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </span>
            </div>
          </div>
        ) : activeExperience ? (
          <div className="App-header">
            <div
              style={{
                top: "15px",
                left: "15px",
                display: "flex",
                position: "absolute",
              }}
            >
              <IconButton
                style={{ color: "#00C08D", padding: "0px" }}
                onClick={() => setActiveExperience(false)}
                edge="end"
              >
                <IoArrowBackCircle
                  style={{
                    height: "calc(5px + 5vmin)",
                    width: "calc(5px + 5vmin)",
                  }}
                />
              </IconButton>
            </div>
            <div className="links-bar">
              {renderIcons(activeExperienceDetail.links)}
            </div>
            <img
              style={{
                marginTop: "25px",
                backgroundColor: activeExperienceDetail.background_color,
                objectFit: "scale-down",
              }}
              className="circular-image"
              src={activeExperienceDetail.image}
            ></img>
            <span
              style={{
                color: "#00C08D",
                fontFamily: "Arial",
                fontSize: "20px",
                marginLeft: "25px",
                marginRight: "25px",
              }}
            >
              {activeExperienceDetail.company_name}
            </span>
            <span
              style={{
                fontFamily: "Arial",
                fontSize: "20px",
                marginLeft: "25px",
                marginRight: "25px",
                marginTop: "25px",
              }}
            >
              {activeExperienceDetail.role}
            </span>
            <span
              style={{
                fontStyle: "italic",
                fontFamily: "Arial",
                fontSize: "15px",
                marginLeft: "25px",
                marginRight: "25px",
                marginBottom: "25px",
              }}
            >
              {activeExperienceDetail.location} :{" "}
              {activeExperienceDetail.duration}
            </span>
            <div
              className="hidden-scrollbar"
              style={{
                height: "45vh", // Define height for scrolling to work
                overflowY: "scroll", // Ensure the content can scroll vertically
              }}
            >
              <span
                style={{
                  fontFamily: "Arial",
                  fontSize: "15px",
                  marginLeft: "25px",
                  marginRight: "25px",
                  textAlign: "start",
                }}
              >
                {activeExperienceDetail.description
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </span>
            </div>
          </div>
        ) : null}
      </header>
    </div>
  );
}

const TypingAnimation = ({ texts, speed, pause, isInLoop }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const charIndexRef = useRef(0);
  const isTypingRef = useRef(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    const typeText = () => {
      const currentText = texts[currentIndex];
      if (charIndexRef.current < currentText.trim().length) {
        setDisplayedText((prev) => prev + currentText[charIndexRef.current]);
        charIndexRef.current++;
      } else {
        // Typing for the current text is complete
        clearInterval(intervalRef.current);
        if (isInLoop || currentIndex < texts.length - 1) {
          setTimeout(() => {
            setDisplayedText("");
            charIndexRef.current = 0;
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, pause);
        }
      }
    };

    intervalRef.current = setInterval(typeText, speed);
    return () => clearInterval(intervalRef.current); // Clean up on component unmount
  }, [texts, speed, pause, isInLoop, currentIndex]);

  return (
    <div className="padded-span">
      <span>{displayedText}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default App;
