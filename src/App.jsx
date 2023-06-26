import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education/Education";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="education" element={<Education />} />
      </Routes>
    </div>
  );
}

export default App;
