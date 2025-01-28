import { NavLink } from "react-router-dom";
import FormInput from "../Atoms/FormInput";
import FormDropdown from "../Atoms/FormDropdown";
import FormCheckboxes from "../Atoms/FormCheckboxes";

export default function SearchProfile() {
  // Properties for the inputXtra field in the phone number input

  const teleProps = {
    type: "tel",
    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    className: "form-control",
    id: "phoneNum",
  };

  // Properties for profile input boxes

  const profileInputs = [
    { name: "First Name:", idFor: "nameFirst", colSize: "6", type: "text" },
    { name: "Last Name:", idFor: "nameLast", colSize: "6", type: "text" },
    {
      name: "Phone Number:",
      idFor: "phoneNum",
      colSize: "6",
      type: "tel",
      inputXtra: teleProps,
    },
    {
      name: "Email Address:",
      idFor: "profileEmail",
      colSize: "6",
      type: "email",
    },
  ];

  // Checkbox properties

  const profileCheckboxes = [
    { name: "Third party?", idFor: "isThirdParty" },
    { name: "Is Member?", idFor: "isMember" },
  ];

  return (
    <div className="p-0 container border m-auto mt-3">
      <div className="ms-3 row w-auto">
        <h3 className="col-8 py-3 mb-0">Search Profiles</h3>
        <div className="col-4 py-3 mb-0">
          <NavLink to={`/Create-profile`} className="btn btn-outline-secondary">
            Create Profile +
          </NavLink>
        </div>
      </div>
      <form className="border-top px-3 pb-3 p-auto">
        {/* using reduce to add a div every time it is mapped twice + right before the first instance; looks confusing.*/}

        {profileInputs
          .reduce((result, fields, i) => {
            if (i % 2 === 0) {
              result.push(profileInputs.slice(i, i + 2));
            }
            return result;
          }, [])
          .map((group, groupIndex) => (
            <div key={groupIndex} className="py-3 border-bottom row g-3">
              {group.map(({ name, idFor, colSize, type, inputXtra }, i) => (
                <FormInput key={i} name={name} idFor={idFor} colSize={colSize} type={type} inputXtra={inputXtra} />
              ))}
            </div>
          ))}

        <div className="py-3 border-bottom row g-3 align-items-center">
          {/*Dropdown for discounts on profile and Input for block / company discounts.*/}

          <FormDropdown name="Discounts:" idFor="discounts" colSize="2" item={["None", "AAA / AARP", "Government", "Police", "Employee"]} />
          <FormInput name="Company / Block" idFor="companyBlock" colSize="2" type="text" />

          {/*Mapping checkboxes*/}

          {profileCheckboxes.map(({ name, idFor }, i) => (
            <FormCheckboxes key={i} name={name} idFor={idFor} />
          ))}
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-outline-success m-auto mt-3">
            Find Profile
          </button>
        </div>
      </form>
    </div>
  );
}
