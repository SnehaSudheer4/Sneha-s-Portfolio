// import React from "react";
// import "../pages/styles/experience.css";
// import Footer from "../components/common/footer";

// const educationData = [
//   {
//     title: "Bachelor's in Computer Applications",
//     institution: "SNDPYSS College Perinthalmanna,Calicut University",
//     year: "2020 - 2023",
//     description: "",
//   },
 
//   {
//     title: "Higher Secondary Education - Computer Science",
//     institution: "Govt Model HSS, Perinthalmanna ,kerala board of higher secondary education",
//     year: "2016 - 2018",
//     description: "",
//   },
   
  
// ];

// const experienceData = [
//  {
//   title: "React Developer (Current)",
//   company: "Datacube Global Software Solutions PVT LTD",
//   year: "Feb 2024 - Present",
//   description: [
//     "Developing scalable and responsive user interfaces using React.js and component libraries (MUI, Tailwind).",
//     "Integrating RESTful APIs for seamless communication between front-end and backend services.",
//     "Collaborating with backend developers to connect Node.js APIs for data-driven applications.",
//     "Implementing reusable, modular components to optimize performance and code maintainability.",
//     "Contributing to daily code reviews and agile development practices to ensure clean, high-quality code."
//   ]
// },

//   {
//     title: "Web Development Intern",
//     company: "Softroniics | Perinthalmanna",
//     year: "2023",
//      description: [
//     "Assisted in developing web applications using React.js and Node.js.",
//     "Gained Experience in front-end and back-end development.",
//     "Enhanced technical expertise in web technologies and frameworks.",
   
//   ],
//   },
// ];

// const Experience = () => {
//   return (
//     <div className="experience-container">
//       <h1 className="page-title">🧠 My Education & Experience</h1>

//      <div className="section">

//           <div className="section">
//         <h2 className="section-title">💼 Experience</h2>
//         {experienceData.map((exp, index) => (
//           <div key={index} className="card">
//             <h3>{exp.title}</h3>
//             <p className="sub">{exp.company} | {exp.year}</p>
//           {Array.isArray(exp.description) ? (
//   <ul className="desc-list">
//     {exp.description.map((point, i) => (
//       <li key={i}>{point}</li>
//     ))}
//   </ul>
// ) : (
//   <p>{exp.description}</p>
// )}

//           </div>
//         ))}
//       </div>
//   <h2 className="section-title">🎓 Education</h2>
//   <div className="card">
//     {educationData.map((edu, index) => (
//       <div key={index} className="edu-entry" style={{ marginBottom: index < educationData.length - 1 ? "20px" : "0" }}>
//         <h3>{edu.title}</h3>
//         <p className="sub">{edu.institution} | {edu.year}</p>
//         <p>{edu.description}</p>
//       </div>
//     ))}
//   </div>
// </div>

//   <div className="page-footer">
//               <Footer/>
//             </div>
    
//     </div>
    
//   );
// };

// export default Experience;


import React from "react";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/experience.css";

const educationData = [
  {
    title: "Bachelor's in Computer Applications",
    institution: "SNDPYSS College Perinthalmanna, Calicut University",
    year: "2020 - 2023",
    description: "",
  },
  {
    title: "Higher Secondary Education - Computer Science",
    institution: "Govt Model HSS, Perinthalmanna, Kerala board of higher secondary education",
    year: "2016 - 2018",
    description: "",
  },
];

const experienceData = [
  {
    title: "React Developer (Current)",
    company: "Datacube Global Software Solutions PVT LTD",
    year: "Feb 2024 - Present",
    description: [
      "Developing scalable and responsive user interfaces using React.js and component libraries (MUI, Tailwind).",
      "Integrating RESTful APIs for seamless communication between front-end and backend services.",
      "Collaborating with backend developers to connect Node.js APIs for data-driven applications.",
      "Implementing reusable, modular components to optimize performance and code maintainability.",
      "Contributing to daily code reviews and agile development practices to ensure clean, high-quality code."
    ]
  },
  {
    title: "Web Development Intern",
    company: "Softroniics | Perinthalmanna",
    year: "2023",
    description: [
      "Assisted in developing web applications using React.js and Node.js.",
      "Gained Experience in front-end and back-end development.",
      "Enhanced technical expertise in web technologies and frameworks.",
    ],
  },
];

const Experience = () => {
  const currentSEO = SEO.find((item) => item.page === "experience");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Experience | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="experience" />
        <div className="content-wrapper">
          <div className="experience-container">
            <div className="title experience-title">
              My Education & Experience
            </div>

            <div className="experience-timeline">
              <div className="experience-section">
                <div className="experience-section-title">
                  <FontAwesomeIcon 
                    icon={faGraduationCap} 
                    className="experience-section-icon" 
                  />
                  <h2>Education</h2>
                </div>
                
                {educationData.map((edu, index) => (
                  <div className="experience-item" key={`edu-${index}`}>
                    <div className="experience-item-header">
                      <h3>{edu.title}</h3>
                      <div className="experience-item-meta">
                        <span className="experience-item-year">
                          <FontAwesomeIcon icon={faCalendarAlt} /> {edu.year}
                        </span>
                        <span className="experience-item-location">
                          <FontAwesomeIcon icon={faMapMarkerAlt} /> {edu.institution}
                        </span>
                      </div>
                    </div>
                    {edu.description && (
                      <p className="experience-item-description">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="experience-section">
                <div className="experience-section-title">
                  <FontAwesomeIcon 
                    icon={faBriefcase} 
                    className="experience-section-icon" 
                  />
                  <h2>Work Experience</h2>
                </div>
                
                {experienceData.map((exp, index) => (
                  <div className="experience-item" key={`exp-${index}`}>
                    <div className="experience-item-header">
                      <h3>{exp.title}</h3>
                      <div className="experience-item-meta">
                        <span className="experience-item-year">
                          <FontAwesomeIcon icon={faCalendarAlt} /> {exp.year}
                        </span>
                        <span className="experience-item-location">
                          <FontAwesomeIcon icon={faMapMarkerAlt} /> {exp.company}
                        </span>
                      </div>
                    </div>
                    {Array.isArray(exp.description) ? (
                      <ul className="experience-item-description">
                        {exp.description.map((item, i) => (
                          <li key={`exp-desc-${index}-${i}`}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="experience-item-description">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;