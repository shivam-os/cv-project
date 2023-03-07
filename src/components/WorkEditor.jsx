import { VStack, Input, Button } from "@chakra-ui/react";
import { WORKACTIONS } from "./workReducer";

export default function WorkEditor(props) {
  const { item, dispatchWorks } = props;
  return (
    <VStack py="5">
      <Input
        placeholder="Company"
        defaultValue={item.company}
        onChange={(e) =>
          dispatchWorks({
            type: WORKACTIONS.CHANGECOMPANY,
            payload: { id: item.id, company: e.target.value },
          })
        }
      />
      <Input
        placeholder="Position"
        defaultValue={item.position}
        onChange={(e) =>
          dispatchWorks({
            type: WORKACTIONS.CHANGEPOSITION,
            payload: { id: item.id, position: e.target.value },
          })
        }
      />
      <Input
        placeholder="Start Date"
        defaultValue={item.startDate}
        onChange={(e) =>
          dispatchWorks({
            type: WORKACTIONS.CHANGESTARTDATE,
            payload: { id: item.id, startDate: e.target.value },
          })
        }
      />
      <Input
        placeholder="End Date"
        defaultValue={item.endDate}
        onChange={(e) =>
          dispatchWorks({
            type: WORKACTIONS.CHANGEENDDATE,
            payload: { id: item.id, endDate: e.target.value },
          })
        }
      />
      <Input
        placeholder="Description"
        defaultValue={item.jobDescription}
        onChange={(e) =>
          dispatchWorks({
            type: WORKACTIONS.CHANGEDESCRIPTION,
            payload: { id: item.id, jobDescription: e.target.value },
          })
        }
      />
      <Button colorScheme="blue" onClick={(e) => dispatchWorks({type: WORKACTIONS.DELETEJOB, payload: {
        id: item.id
      }})}>
        Delete
      </Button>
    </VStack>
  );
}
