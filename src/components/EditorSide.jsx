import { useState } from "react";
import { VStack, ButtonGroup, Heading, Button } from "@chakra-ui/react";
import PersonalEditor from "./PersonalEditor";
import WorkEducationEditor from "./WorkEducationEditor";

export default function EditorSide(props) {

  const {personalDetails} = props

  const [singleWork, setSingleWork] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: ""
  });

  // const [work, setWork] = useState([<WorkEducationEditor />]);

  const addSection = () => {
    // const newWork = [...singleWork, ]
  };

  const deleteSection = () => {};

  return (
    <VStack border="1px" borderColor="black" borderRadius="md" w="50%" p="10" maxHeight="94vh" alignItems="stretch" overflow="scroll">
      <Heading fontSize="2xl">Personal Details</Heading>
      <PersonalEditor />
      <Heading fontSize="2xl" pt="10">Work Experience</Heading>
      <WorkEducationEditor singleWork={singleWork} />
      <Heading fontSize="2xl" pt="10">Education</Heading>
      <WorkEducationEditor title="Course/Program" subtitle="University" />
      <ButtonGroup>
        <Button colorScheme="blue">Add</Button>
        <Button colorScheme="blue">Delete</Button>
      </ButtonGroup>
    </VStack>
  );
}
