export default function ProfileCols({ name, colSize }) {
  return (
    <div className={`col-${colSize} border py-2 h-50`}>
      <span>{name}</span>
    </div>
  );
}
