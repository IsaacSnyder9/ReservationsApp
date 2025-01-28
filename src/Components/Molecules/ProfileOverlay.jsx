import React, { useState, useEffect } from "react";
import ProfileCols from "../Atoms/ProfileCols";

export default function ProfileOverlay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3307/profiles")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  const profileColsGroup = [
    { name: "Profile", colSize: 2 },
    { name: "First:", colSize: 2 },
    { name: "Last:", colSize: 2 },
    { name: "Phone:", colSize: 2 },
    { name: "Email:", colSize: 2 },
    { name: "Discounts:", colSize: 2 },
  ];

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>
      <div>{data.map((item) => console.log(data[0].profileId))}</div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen-lg-down modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Profiles:
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                {profileColsGroup.map(({ name, colSize }, i) => (
                  <ProfileCols key={i} name={name} colSize={colSize}></ProfileCols>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
