import {VStack, Input} from "@chakra-ui/react"

export default function PersonalEditor() {

  return (
    <VStack>
      <Input size="md" placeholder="Name"/>
      <Input size="md" placeholder="Position"/>
      <Input size="md" placeholder="Phone Number"/>
      <Input size="md" placeholder="Email"/>
      <Input size="md" placeholder="Location"/>
      <Input size="md" placeholder="Summary"/>
    </VStack>
  )
}
