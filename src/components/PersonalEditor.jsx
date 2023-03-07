import { VStack, Input } from "@chakra-ui/react";

export default function PersonalEditor(props) {
  const { personalDetails, setpersonalDetails } = props;

  return (
    <VStack>
      <Input
        size="md"
        placeholder="Name"
        defaultValue={personalDetails.name}
        onChange={(e) =>
          setpersonalDetails({ ...personalDetails, name: e.target.value })
        }
      />
      <Input size="md" placeholder="Position" defaultValue={personalDetails.position} onChange={(e) =>
          setpersonalDetails({ ...personalDetails, position: e.target.value })
        }/>
      <Input size="md" placeholder="Phone Number" defaultValue={personalDetails.phone} onChange={(e) =>
          setpersonalDetails({ ...personalDetails, phone: e.target.value })
        }/>
      <Input size="md" placeholder="Email" defaultValue={personalDetails.email} onChange={(e) =>
          setpersonalDetails({ ...personalDetails, email: e.target.value })
        }/>
      <Input size="md" placeholder="Location" defaultValue={personalDetails.location} onChange={(e) =>
          setpersonalDetails({ ...personalDetails, location: e.target.value })
        }/>
      <Input size="md" placeholder="Summary" defaultValue={personalDetails.description} onChange={(e) =>
          setpersonalDetails({ ...personalDetails, description: e.target.value })
        }/>
    </VStack>
  );
}
