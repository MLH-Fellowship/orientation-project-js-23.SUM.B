import "../../src/App.css";
import ResumeSection from "../components/ResumeSection";

function Home() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <ResumeSection title="Experience" content="Experience Placeholder" link="/"/>
      <ResumeSection title="Education" content="Education Placeholder" link="/education" />
      <ResumeSection title="Skills" content="Skill Placeholder" link="skills"/>
      <br></br>
      <button>Export</button>

    </div>
  );
}

export default Home;
