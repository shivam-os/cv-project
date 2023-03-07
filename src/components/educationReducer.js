const EDUACTIONS = {
  CREATEEDU: "createEdu",
  DELETEEDU: "deleteEdu",
  CHANGECOURSENAME: "changeCourseName",
  CHANGEUNIVERSITY: "changeUniversity",
  CHANGESTARTDATE: "changeStartDate",
  CHANGEENDDATE: "changeEndDate",
  CHANGEDESCRIPTION: "changeEducationSummary",
};

const eduReducer = (education, action) => {
  switch (action.type) {
    case EDUACTIONS.CREATEEDU:
      return [...education, newEdu()];

    case EDUACTIONS.DELETEEDU:
      return education.filter((item) => item.id !== action.payload.id);

    case EDUACTIONS.CHANGECOURSENAME:
      return education.map((item) => {
        if (item.id === action.payload.id) {
          console.log(action.payload);
          return { ...item, course: action.payload.course };
        }
        return item;
      });

    case EDUACTIONS.CHANGEUNIVERSITY:
      return education.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, university: action.payload.university };
        }
        return item;
      });

    case EDUACTIONS.CHANGESTARTDATE:
      return education.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, startDate: action.payload.startDate };
        }
        return item;
      });

    case EDUACTIONS.CHANGEENDDATE:
      return education.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, endDate: action.payload.endDate };
        }
        return item;
      });

    case EDUACTIONS.CHANGEDESCRIPTION:
      return education.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, educationSummary: action.payload.educationSummary };
        }
        return item;
      });

    default:
      return education;
  }
};

const newEdu = () => {
  return {
    id: Date.now(),
    course: "",
    university: "",
    startDate: "",
    endDate: "",
    educationSummary: "",
  };
};

export {EDUACTIONS, eduReducer}
