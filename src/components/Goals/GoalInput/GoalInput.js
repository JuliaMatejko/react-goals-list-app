import { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./GoalInput.module.css";

const GoalInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      // if value ois invalud, when i start typing again it changws to valid
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      // prevent adding empty goals, return nothing ==> component does not update
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles["form-bg"]}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label
          style={{
            color: "rgb(165, 47, 47)",
            fontStyle: "italic",
            fontWeight: 600,
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
          }}
        >
          My Next Very Important Goal is...
        </label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default GoalInput;
