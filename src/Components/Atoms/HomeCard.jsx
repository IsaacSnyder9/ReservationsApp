import { NavLink } from "react-router-dom";

export default function HomeCard({ color, link, title, buttonText, cardText }) {
  return (
    <div className={`col-7 col-sm-8 col-lg-3`}>
      <div className={`card border-${color} h-100`}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <NavLink to={link} className={`btn btn-lg btn-outline-${color} col-6 text-nowrap stretched-link`}>
            {buttonText}
          </NavLink>
          <p className="card-text">{cardText}</p>
        </div>
      </div>
    </div>
  );
}
