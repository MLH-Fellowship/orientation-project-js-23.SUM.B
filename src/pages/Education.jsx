import React, { useState } from "react";

function ResumeSection(props) {
  const [course, setCourse] = useState("");
  const [school, setSchool] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [grade, setGrade] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEducation = {
      course: course,
      school: school,
      start_date: startDate,
      end_date: endDate,
      grade: grade,
      logo: logo,
    };
    fetch("/resume/education", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEducation),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="resumeSection">
      <h2>{props.title}</h2>
      <ul>
        {props.educationList.map((education) => (
          <li key={education.id}>
            <p>{education.course}</p>
            <p>{education.school}</p>
            <p>{education.start_date} - {education.end_date}</p>
            <p>{education.grade}</p>
            <p>{education.logo}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Course:
          <input
            type="text"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
          />
        </label>
        <label>
          School:
          <input
            type="text"
            value={school}
            onChange={(event) => setSchool(event.target.value)}
          />
        </label>
        <label>
          Start Date:
          <input
            type="text"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            type="text"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </label>
        <label>
          Grade:
          <input
            type="text"
            value={grade}
            onChange={(event) => setGrade(event.target.value)}
          />
        </label>
        <label>
          Logo:
          <input
            type="text"
            value={logo}
            onChange={(event) => setLogo(event.target.value)}
          />
        </label>
        <button type="submit">Add Education</button>
      </form>
    </div>
  );
}

export default ResumeSection;