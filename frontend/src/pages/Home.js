import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  // instead of a local workouts state, we will use a global workout state created using react-context
  // Currently while adding a workout, only the database was updated, not the workouts state, hence we had
  // to refresh to see the updated set of workouts
  // Solution: (i) re-fetch all the data -> costly
  //           (ii) using react context, create a global workouts state which we can update in any component (using dispatch
  //                action)and hence we will get the updated set of workouts in the home page after any modification
  // const [workouts, setWorkouts] = useState(null);
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      if (response.ok) {
        // setWorkouts(json);
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          // workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <div>
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
