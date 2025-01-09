import { useState } from "react";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-sm bg-body-tertiary">
      <div class="container-fluid">

        <a href="#" class="navbar-brand ps-3"> A
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navabar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                A
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                B
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
