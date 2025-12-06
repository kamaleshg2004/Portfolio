import React from "react";
import "./Education.css";

const Education = () => {
  const data = [
    {
      year: "2021 - 2025",
      degree: "B.E. Computer Science Engineering",
      college: "MUTHAYAMMAL ENGINEERING COLLEGE, RASIPURAM (AUTONOMOUS )",
      details: "CGPA: 7.65",
    },
    {
      year: "2020 - 2021",
      degree: "HSC",
      college: "RASI MATRIC HIGHER SECONDARY SCHOOL, MALLIAKARAI.",
      details: "88.39%",
    },
    {
      year: "2018 - 2019",
      degree: "SSLC",
      college: "RASI MATRIC HIGHER SECONDARY SCHOOL, MALLIAKARAI.",
      details: "83.20%",
    },
  ];

  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="edu-timeline">
        {data.map((item, i) => (
          <div className="edu-card" key={i}>
            <div className="edu-year">{item.year}</div>
            <div className="edu-content">
              <h3>{item.degree}</h3>
              <h4>{item.college}</h4>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
