import { IoPencilOutline } from "react-icons/io5";
import { FaNoteSticky } from "react-icons/fa6";
import { GoTasklist } from "react-icons/go";


import "./Panel.css";

const Panel = () => {
  return (
    <div className="panel-container">
        <div className="panel-head">
            <p>TA-RE</p>
            <IoPencilOutline size={20} className="head-icon" />

        </div>

        <div className="panel-main">
            <div className="panel-tools">
                <div className="addon">
                    <FaNoteSticky size={20} className="addon-icon" />
                    <p>Add Note</p>
                </div>
                <div className="addon">
                    <GoTasklist size={25} className="addon-icon" />
                    <p>Add Task</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Panel;