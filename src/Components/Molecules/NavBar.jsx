import NavDropdown from "../Atoms/NavDropdown";
import NavItem from "../Atoms/NavItem";

function NavBar() {
  const navItemList = [
    { name: "Home", link: "" },
    { name: "Book", link: "Book" },
    { name: "Profiles", link: "Search-profile" },
  ];

  const navDropdownList = [
    {
      name: "Control",
      item: ["Arrivals", "Departures", "Avaiability", "Blocks"],
    },
    { name: "Reporting", item: ["Reports", "Audit"] },
    {
      name: "Guest Resources",
      item: ["Restraunts", "Stores", "Pharmacies", "Emergency"],
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {navItemList.map(({ name, link }, i) => (
              <NavItem key={i} name={name} link={link}></NavItem>
            ))}
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            {navDropdownList.map(({ name, item }, i) => (
              <NavDropdown key={i} name={name} item={item}></NavDropdown>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
