import "./Display.css";
import Navbar from '../../Components/Nav/Navbar';
import Content from "../Content/Content";

const Display = () => {
  return (
    <div className='display-container'>
      <Navbar />

      <div className="content-wrapper">
        <Content />
      </div>
  </div>

  )
}

export default Display;