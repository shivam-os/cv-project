import "./App.css";
import { useState, useReducer } from "react";
import { HStack } from "@chakra-ui/react";
import EditorSide from "./components/EditorSide";
import PreviewSide from "./components/PreviewSide";
import { demoJobs, demoEducation } from "./components/data";
import { WORKACTIONS, reducer } from "./components/workReducer";
import { EDUACTIONS, eduReducer } from "./components/educationReducer";

function App() {

  const [education, dispatchEducation] = useReducer(eduReducer, demoEducation);
  const [works, dispatchWorks] = useReducer(reducer, demoJobs);

  const [personalDetails, setpersonalDetails] = useState({
    name: "John Doe",
    position: "Software Developer",
    phone: "0123456789",
    email: "johndoe@email.com",
    location: "Delhi, India",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deleniti autem voluptate nihil perferendis hic! Placeat veniam eius quod perspiciatis ducimus aliquid similique magnam! Vel, amet cupiditate? Ab, sint eveniet.",
  });

  return (
    <HStack
      w="100vw"
      p="4"
      spacing="10"
      justifyContent="center"
      alignItems="center"
    >
      <EditorSide
        personalDetails={personalDetails}
        setpersonalDetails={setpersonalDetails}
        works={works}
        dispatchWorks={dispatchWorks}
        education={education}
        dispatchEducation={dispatchEducation}
      />
      <PreviewSide
        personalDetails={personalDetails}
        works={works}
        education={education}
      />
    </HStack>
  );
}

export default App;
