import "./insideList.css";
import Inside from "../inside/Inside";
import { insides } from "../../data";

const InsideList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Inside Life Care</h1>
        <p className="pl-desc">
          End-of-life care may include palliative care, supportive care, and hospice care. Also called comfort care.
        </p>
      </div>
      <div className="pl-list">
        {insides.map((item) => (
          <Inside key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default InsideList;
