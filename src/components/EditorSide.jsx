import { useState, useReducer } from "react";
import { VStack, ButtonGroup, Heading, Button, HStack } from "@chakra-ui/react";
import PersonalEditor from "./PersonalEditor";
import WorkEditor from "./WorkEditor";
import EduEditor from "./EduEditor"
import { WORKACTIONS } from "./workReducer";
import { EDUACTIONS } from "./educationReducer";

export default function EditorSide(props) {
  const {
    personalDetails,
    setpersonalDetails,
    works,
    dispatchWorks,
    education,
    dispatchEducation,
  } = props;

  const [educationId, setEducationId] = useState(1);

  // const handlePositionChange = (e, id) => {
  //   setWorkExperience(
  //     workExperience.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, position: e.target.value };
  //       } else {
  //         return item;
  //       }
  //     })
  //   );
  // };

  // const handleCompanyChange = (e, id) => {
  //   setWorkExperience(
  //     workExperience.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, company: e.target.value };
  //       } else {
  //         return item;
  //       }
  //     })
  //   );
  // };

  // const handleStartDateChange = (e, id) => {
  //   setWorkExperience(
  //     workExperience.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, startDate: e.target.value };
  //       } else {
  //         return item;
  //       }
  //     })
  //   );
  // };

  // const handleEndDateChange = (e, id) => {
  //   setWorkExperience(
  //     workExperience.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, endDate: e.target.value };
  //       } else {
  //         return item;
  //       }
  //     })
  //   );
  // };

  // const handleJobDescriptionChange = (e, id) => {
  //   setWorkExperience(
  //     workExperience.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, jobDescription: e.target.value };
  //       } else {
  //         return item;
  //       }
  //     })
  //   );
  // };

  return (
    <VStack
      border="1px"
      borderColor="black"
      borderRadius="md"
      w="50%"
      p="10"
      maxHeight="94vh"
      alignItems="stretch"
      overflow="scroll"
    >
      <Heading fontSize="2xl">Personal Details</Heading>
      <PersonalEditor
        personalDetails={personalDetails}
        setpersonalDetails={setpersonalDetails}
      />
      <HStack justifyContent="space-between">
        <Heading fontSize="2xl" pt="10" pb="10">
          Work Experience
        </Heading>
        <Button colorScheme="blue" onClick={(e) => {
          dispatchWorks({type: WORKACTIONS.CREATEJOB})
          console.log(works)
          }}>
          Add
        </Button>
      </HStack>

      {works.map((item) => {
        return (
          <WorkEditor
            key={item.id}
            item={item}
            dispatchWorks={dispatchWorks}
          />
        );
      })}
      {/* <WorkEditor workExperience={workExperience} setWorkExperience={setWorkExperience}/> */}
      <HStack justifyContent="space-between">
        <Heading fontSize="2xl" pt="10" pb="10">
          EDUCATION
        </Heading>
        <Button colorScheme="blue" onClick={(e) => {
          dispatchEducation({type: EDUACTIONS.CREATEEDU})
          console.log(education)
          }}>
          Add
        </Button>
      </HStack>
      
      {education.map((item) => {
        return (
          <EduEditor
            key={item.id}
            item={item}
            dispatchEducation={dispatchEducation}
          />
        );
      })}
      {/* <WorkEducationEditor title="Course/Program" subtitle="University" /> */}
    </VStack>
  );
}
