import { VStack, HStack, Heading, Text } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, Search2Icon } from "@chakra-ui/icons";

export default function PreviewSide(props) {
  const { personalDetails, workExperience, education } = props;

  return (
    <VStack
      border="1px"
      borderColor="black"
      borderRadius="md"
      w="50%"
      p="10"
      alignItems="stretch"
    >
      <HStack w="100%" justifyContent="space-between" borderBottom="5px solid" borderColor="blue.400" pb="5">
        <VStack alignItems="self-start">
          <Heading fontSize="4xl" fontWeight="extrabold">
            {personalDetails.name}
          </Heading>
          <Heading fontSize="xl" fontWeight="bold">
            {personalDetails.position}
          </Heading>
        </VStack>
        <VStack alignItems="self-start">
          <HStack>
            <PhoneIcon />
            <Text>{personalDetails.phone}</Text>
          </HStack>
          <HStack>
            <EmailIcon />
            <Text>{personalDetails.email}</Text>
          </HStack>
          <HStack>
            <Search2Icon />
            <Text>{personalDetails.location}</Text>
          </HStack>
        </VStack>
      </HStack>

      <Text py="5">{personalDetails.description}</Text>

      <Heading fontSize="lg">WORK EXPERIENCE</Heading>
      {workExperience.map((item) => {
        return(
          <VStack w="100%">
          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="bold">{item.position}</Text>
            <HStack>
              <Text>{item.company} | </Text>
              <Text fontWeight="bold">{item.startDate}-{item.endDate}</Text>
            </HStack>
          </HStack>
          <Text>{item.jobDescription}</Text>
        </VStack>
        )
      })}

      <Heading fontSize="lg" pt="5">EDUCATION</Heading>
      {education.map((item) => {
        return(
          <VStack w="100%">
          <HStack justifyContent="space-between" w="100%">
            <Text fontWeight="bold">{item.course}</Text>
            <HStack>
              <Text>{item.university} | </Text>
              <Text fontWeight="bold">{item.startDate}-{item.endDate}</Text>
            </HStack>
          </HStack>
          <Text>{item.educationSummary}</Text>
        </VStack>
        )
      })}

    </VStack>
  );
}
