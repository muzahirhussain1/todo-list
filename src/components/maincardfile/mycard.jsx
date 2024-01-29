import Mycard from "../cards/index";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

function MainCard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      <div>
        <Mycard name="To Do" iconnext={<FcNext />} />
      </div>

      <div>
        <Mycard
          iconpre={<FcPrevious />}
          iconnext={<FcNext />}
          name="In Progress"
        />
      </div>
      <div>
        <Mycard iconpre={<FcPrevious />} iconnext={<FcNext />} name="Review" />
      </div>
      <div>
        <Mycard iconpre={<FcPrevious />} name="Done" />
      </div>
    </div>
  );
}

export default MainCard;
