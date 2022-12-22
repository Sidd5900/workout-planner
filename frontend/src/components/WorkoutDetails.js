import { useNavigate } from "react-router-dom";

const WorkoutDetails = ({ workout }) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      console.log("deleted", json);
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default WorkoutDetails;
