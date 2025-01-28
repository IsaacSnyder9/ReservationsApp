export default function NavDropdown({ name, item }) {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle mx-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {name}
      </a>

      <ul className="dropdown-menu">
        {[...item].map((items, i) => (
          <li key={i}>
            <a className="dropdown-item" href="#">
              {items}
            </a>
            {i < item.length - 1 && <hr className="dropdown-divider" />}
          </li>
        ))}
      </ul>
    </li>
  );
}
