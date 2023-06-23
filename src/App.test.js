import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Education from "../src/pages/Education/Education";

test("form submits successfully", () => {
  render(
    <BrowserRouter>
      <Education />
    </BrowserRouter>
  );

  // fill out the form inputs
  fireEvent.change(screen.getByLabelText("Course:"), {
    target: { value: "Computer Science" },
  });
  fireEvent.change(screen.getByLabelText("School:"), {
    target: { value: "Harvard University" },
  });
  fireEvent.change(screen.getByLabelText("Start date:"), {
    target: { value: "01/01/2020" },
  });
  fireEvent.change(screen.getByLabelText("End date:"), {
    target: { value: "01/01/2022" },
  });
  fireEvent.change(screen.getByLabelText("Grade:"), {
    target: { value: "D" },
  });

  // submit the form
  fireEvent.click(screen.getByRole("button", { name: "Submit" }));
});