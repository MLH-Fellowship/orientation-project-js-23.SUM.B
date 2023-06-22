import React from "react";

function ResumeSection(props) {
  return (
    <div className="resumeSection">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button>Add {props.title}</button>
      <br></br>
    </div>
  );
}

export default ResumeSection;