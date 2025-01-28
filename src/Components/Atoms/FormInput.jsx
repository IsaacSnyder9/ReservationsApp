export default function FormInput({ name, idFor, colSize, type, inputXtra }) {
  return (
    <div className={`col-${colSize}`}>
      <label htmlFor={idFor} className="form-label">
        {name}
      </label>
      <input type={`${type}`} className="form-control" id={idFor} {...inputXtra} />
    </div>
  );
}
