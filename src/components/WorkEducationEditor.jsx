import { VStack, Input, ButtonGroup, Button } from "@chakra-ui/react";

export default function WorkEducationEditor(props) {

 console.log(props.singleWork)


  return (
    <VStack>
      <Input placeholder="Company"/>
      <Input placeholder="Position"/>
      <Input placeholder="Start Date" />
      <Input placeholder="End Date" />
      <Input placeholder="Description" />
      <ButtonGroup>
        <Button colorScheme="blue">
          Add
        </Button>
        <Button colorScheme="blue">Delete</Button>
      </ButtonGroup>
    </VStack>
  );
}
