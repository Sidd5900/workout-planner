import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

// ciustom hook to use the workout context created
export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext); // now context stores the object {state, dispatch}

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside a WorkoutsContextProvider"
    );
  }

  return context;
};
