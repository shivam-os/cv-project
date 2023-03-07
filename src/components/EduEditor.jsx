import { VStack, Input, Button } from "@chakra-ui/react";
import { EDUACTIONS } from "./educationReducer";

export default function WorkEditor(props) {
  const { item, dispatchEducation } = props;
  return (
    <VStack py="5">
      <Input
        placeholder="Company"
        defaultValue={item.course}
        onChange={(e) =>
          dispatchEducation({
            type: EDUACTIONS.CHANGECOURSENAME,
            payload: { id: item.id, course: e.target.value },
          })
        }
      />
      <Input
        placeholder="Position"
        defaultValue={item.university}
        onChange={(e) =>
          dispatchEducation({
            type: EDUACTIONS.CHANGEUNIVERSITY,
            payload: { id: item.id, university: e.target.value },
          })
        }
      />
      <Input
        placeholder="Start Date"
        defaultValue={item.startDate}
        onChange={(e) =>
          dispatchEducation({
            type: EDUACTIONS.CHANGESTARTDATE,
            payload: { id: item.id, startDate: e.target.value },
          })
        }
      />
      <Input
        placeholder="End Date"
        defaultValue={item.endDate}
        onChange={(e) =>
          dispatchEducation({
            type: EDUACTIONS.CHANGEENDDATE,
            payload: { id: item.id, endDate: e.target.value },
          })
        }
      />
      <Input
        placeholder="Description"
        defaultValue={item.educationSummary}
        onChange={(e) =>
          dispatchEducation({
            type: EDUACTIONS.CHANGEDESCRIPTION,
            payload: { id: item.id, educationSummary: e.target.value },
          })
        }
      />
      <Button colorScheme="blue" onClick={(e) => dispatchEducation({type: EDUACTIONS.DELETEEDU, payload: {
        id: item.id
      }})}>
        Delete
      </Button>
    </VStack>
  );
}
