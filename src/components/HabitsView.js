import ViewContent from "./ViewContent";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

export default function HabitsView() {
  return (
    <ViewContent>
      <h1>View de Hábitos</h1>
      <CircularProgressbarWithChildren background={true} backgroundPadding={40} styles={ buildStyles({ backgroundColor: "transparent", pathColor: "red"})} strokeWidth={8} value={100}>
          <Link to="/hoje">
          <button>Hoje</button>
          </Link>
      </CircularProgressbarWithChildren>
    </ViewContent>
  );
}