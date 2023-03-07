const WORKACTIONS = {
  CREATEJOB: "createJob",
  DELETEJOB: "deleteJob",
  CHANGECOMPANY: "changeCompany",
  CHANGEPOSITION: "changePosition",
  CHANGESTARTDATE: "changeStartDate",
  CHANGEENDDATE: "changeEndDate",
  CHANGEDESCRIPTION: "changeDescription",
};

const reducer = (works, action) => {
  switch (action.type) {
    case WORKACTIONS.CREATEJOB:
      return [...works, newWork()];

    case WORKACTIONS.DELETEJOB:
      return works.filter((item) => item.id !== action.payload.id);

    case WORKACTIONS.CHANGECOMPANY:
      return works.map((item) => {
        if (item.id === action.payload.id) {
          console.log(action.payload);
          return { ...item, company: action.payload.company };
        }
        return item;
      });

    case WORKACTIONS.CHANGEPOSITION:
      return works.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, position: action.payload.position };
        }
        return item;
      });

    case WORKACTIONS.CHANGESTARTDATE:
      return works.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, startDate: action.payload.startDate };
        }
        return item;
      });

    case WORKACTIONS.CHANGEENDDATE:
      return works.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, endDate: action.payload.endDate };
        }
        return item;
      });

    case WORKACTIONS.CHANGEDESCRIPTION:
      return works.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, jobDescription: action.payload.jobDescription };
        }
        return item;
      });

    default:
      return works;
  }
};

const newWork = () => {
  return {
    id: Date.now(),
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    jobDescription: "",
  };
};

export {WORKACTIONS, reducer}
