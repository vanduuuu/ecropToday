import React from "react";

const Breadcrumbs = ({navhome,navnext}) => {
  return (
    <div>
      <nav aria-label="breadcrumb" class="breadcrumbb mt-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a class="text-decoration-none text-secondary" href="home">
              {navhome}
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {navnext}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
