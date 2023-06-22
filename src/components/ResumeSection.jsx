import React from "react";
import { Link } from 'react-router-dom';

function ResumeSection(props) {
  return (
    <div className="resumeSection">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <Link to={props.link}>
      <button>Add {props.title}</button>
      </Link>
      <br></br>
    </div>
  );
}

export default ResumeSection;