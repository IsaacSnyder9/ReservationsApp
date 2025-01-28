export default function FormDropdown({ name, idFor, colSize, item }) {
  return (
    <div className={`col-${colSize}`}>
      <label htmlFor={idFor} className="form-label">
        {name}
      </label>
      <select className="form-control" id={idFor}>
        {[...item].map((items, i) => (
          <option key={i} value={item.toLowercase}>
            {items}
          </option>
        ))}
      </select>
    </div>
  );
}
