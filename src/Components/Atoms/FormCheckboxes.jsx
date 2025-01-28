export default function FormCheckboxes({ name, idFor }){
    return(
        <div className={`col-2 form-check ms-1`}>
            <label className="form-check-label" htmlFor={idFor}>
              {name}
            </label>
            <input type="checkbox" className="form-check-input" id={idFor} />
          </div>
    )
}