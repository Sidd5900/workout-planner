import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

// state is the previous state (before making changes)
export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
      };

    default:
      return state;
  }
};

// children refers to all the components wrapped inside the WorkoutsContextProvider
export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null, // obkect with workouts property having initial value null
  });

  // useReducer is similar to useState
  // to call: dispatch(action)  // action is passed to the reducer function
  // dispatch({type: 'SET_WORKOUTS', payload: [{},{}]})

  // all the children components will ahve access to the values of the workout state
  // one option is to create a useState variable and pass it into the value
  // or we can use the useReducer hook and pass the state and the dispatch function
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
