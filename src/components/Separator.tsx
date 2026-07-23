import { GiLotusFlower } from "react-icons/gi";
import "../styles/layout/_separator.scss";
function Separator() {
  return (
    <div className="separator">
      <span className="line"></span>

      <GiLotusFlower className="icon" />

      <span className="line"></span>
    </div>
  );
}

export default Separator;
