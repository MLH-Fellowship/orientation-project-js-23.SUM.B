import React, { useState } from "react";
import "./form.css"; // import the CSS file
import Navbar from "../../components/Navbar"

const Form = () => {
  const [course, setCourse] = useState("");
  const [school, setSchool] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [grade, setGrade] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ course, school, startDate, endDate, grade, logo });
    // do something with the form data, such as send it to a server
  };

  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="course">Course:</label>
      <input
        type="text"
        id="course"
        value={course}
        onChange={(event) => setCourse(event.target.value)}
        className="form-input"
      />

      <label htmlFor="school">School:</label>
      <input
        type="text"
        id="school"
        value={school}
        onChange={(event) => setSchool(event.target.value)}
        className="form-input"
      />

      <label htmlFor="Start date">Start date:</label>
      <input
        type="date"
        id="Start date"
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
        className="form-input"
      />

      <label htmlFor="End date">End date:</label>
      <input
        type="date"
        id="End date"
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
        className="form-input"
      />

      <label htmlFor="grade">Grade:</label>
      <input
        type="text"
        id="grade"
        value={grade}
        onChange={(event) => setGrade(event.target.value)}
        className="form-input"
      />

      <label htmlFor="logo">Logo:</label>
      <input
        type="file"
        id="logo"
        accept="image/*"
        onChange={(event) => setLogo(event.target.files[0])}
        className="form-input"
      />

      <button type="submit" className="form-button">Submit</button>
    </form>
    </>
  );
};

export default Form;