import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <section className="nav-container">
        <ul className="nav bg-info p-3 justify-content-center">
          <div className="nav-item">
            <h4 className="text-light text-uppercase">{props.title}</h4>
          </div>
        </ul>
      </section>
    </div>
  );
}
