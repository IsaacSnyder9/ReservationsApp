import { NavLink } from "react-router-dom";
import Increment from "../../Hooks/Increment";

export default function Book() {
  return (
    <div className="p-0 container border m-auto mt-3">
      <div className="ms-3 row w-auto">
        <h3 className="col-8 py-3 mb-0">Book</h3>
        <div className="col-4 py-3 mb-0">
          <NavLink to={`/Create-profile`} className="btn btn-outline-secondary">
            Create Profile +
          </NavLink>
        </div>
      </div>
      <form className="border-top px-3 pb-3 p-auto">
        <div className="py-3 border-bottom row gx-3">
          <div className="col-3">
            <label htmlFor="Nights">Nights:</label>
            <Increment min={1} startNum={1} id={"Nights"}></Increment>
          </div>
          <div className="col-3"></div>
        </div>
      </form>
    </div>
  );
}
