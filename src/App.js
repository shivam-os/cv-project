import "./App.css";
import { useState } from "react";
import { HStack } from "@chakra-ui/react";
import EditorSide from "./components/EditorSide";
import PreviewSide from "./components/PreviewSide";

function App() {
  const [personalDetails, setpersonalDetails] = useState({
    name: "John Doe",
    position: "Software Developer",
    phone: "0123456789",
    email: "johndoe@email.com",
    location: "Delhi, India",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deleniti autem voluptate nihil perferendis hic! Placeat veniam eius quod perspiciatis ducimus aliquid similique magnam! Vel, amet cupiditate? Ab, sint eveniet.",
  });

  const [workExperience, setWorkExperience] = useState([
    {
      company: "A Software Company",
      position: "Software Engineer",
      startDate: "2020",
      endDate: "Present",
      jobDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, placeat iusto autem ipsum distinctio repellendus earum sapiente sed aliquid rem!",
    },
    {
      company: "A Software Company",
      position: "Software Engineer",
      startDate: "2020",
      endDate: "Present",
      jobDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, placeat iusto autem ipsum distinctio repellendus earum sapiente sed aliquid rem!",
    },
    {
      company: "A Software Company",
      position: "Software Engineer",
      startDate: "2020",
      endDate: "Present",
      jobDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, placeat iusto autem ipsum distinctio repellendus earum sapiente sed aliquid rem!",
    },
  ]);

  const [education, setEducation] = useState([
    {
      course: "A Software Company",
      university: "Software Engineer",
      startDate: "2020",
      endDate: "Present",
      educationSummary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, placeat iusto autem ipsum distinctio repellendus earum sapiente sed aliquid rem!",
    },
  ]);

  return (
    <HStack w="100vw" p="4" spacing="10" justifyContent="center" alignItems="center">
      <EditorSide
        personalDetails={personalDetails}
        setpersonalDetails={setpersonalDetails}
        workExperience={workExperience}
      />
      <PreviewSide
        personalDetails={personalDetails}
        workExperience={workExperience}
        education={education}
      />
    </HStack>
  );
}

export default App;
