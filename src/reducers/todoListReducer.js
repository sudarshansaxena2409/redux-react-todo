const intialState = [
  {
    workName: "Cisco",
  },
  {
    workName: "simplilearn",
  },
];

export default function (state = intialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      state.unshift(action.payload);
      return [...state, action.payload];
    case "DELETE_TODO":
      state.splice(action.payload, 1);
      return [...state];
    default:
      return state;
  }
}
