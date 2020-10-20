import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <section className="nav-container">
          <ul className="nav bg-info p-3 justify-content-center">
            <div className="nav-item">
              <h4 className="text-light">{this.props.title}</h4>
            </div>
          </ul>
        </section>
      </div>
    );
  }
}
