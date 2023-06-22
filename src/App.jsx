import "./App.css";
import ResumeSection from "../src/components/ResumeSection";

function App() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <ResumeSection title="Experience" content="Experience Placeholder" />
      <ResumeSection title="Education" content="Education Placeholder" />
      <ResumeSection title="Skills" content="Skill Placeholder" />
      <br></br>
      <button>Export</button>
    </div>
  );
}

export default App;
