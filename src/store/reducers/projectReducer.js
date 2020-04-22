const initState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
  ],
};

const projectReducer = (state = initState, action) => {
  // if (action.type === 'CREATE_PROJECT') {
  //   return console.log('the project was created', action.project)
  // } else {
  //   return state
  // }
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("the project was created", action.project, action.type);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
