import { IoPencilOutline } from "react-icons/io5";
import { FaNoteSticky } from "react-icons/fa6";
import { GoTasklist } from "react-icons/go";
import { CiTrash } from "react-icons/ci";



import "./Panel.css";
import Themes from "../Theme/Theme";

const Panel = () => {
  return (
    <div className="panel-container">
        <div className="panel-head">
            <p>TA-RE</p>
            <IoPencilOutline size={15} className="head-icon" />

        </div>

        <div className="panel-main">
            <div className="panel-tools">
                <div className="addon">
                    <FaNoteSticky size={23} className="addon-icon" />
                    <p>Add Note</p>
                </div>
                <div className="addon">
                    <GoTasklist size={25} className="addon-icon2" />
                    <p>Add Task</p>
                </div>
                <div className="addon">
                    <CiTrash size={25} className="addon-icon3" />
                    <p>Trash</p>
                </div>


            </div>
        </div>

        <Themes />
    </div>
  )
}

export default Panel;