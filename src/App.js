import React, { Component } from "react";
export class App extends Component {
  render() {
    return (
      <div>
        <section className="nav-container">
          <ul className="nav bg-info p-3 justify-content-center">
            <div className="nav-item">
              <h4 className="text-light">EMI Calculator</h4>
            </div>
          </ul>
        </section>
        <section className="form-container py-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="row justify-content-center">
                      <div className="col-lg-12">
                        <div className="form-group py-2">
                          <label className="pr-3">Principle :</label>
                          <input
                            type="email"
                            className="form-control"
                            type="number"
                            placeholder="Principal Amount"
                          />
                        </div>
                        <div className="form-group py-2">
                          <label className="pr-3">Interest Rate :</label>
                          <input
                            type="email"
                            className="form-control"
                            type="number"
                            placeholder="Interest"
                          />
                        </div>
                        <div className="form-group py-2">
                          <label className="pr-3">Time</label>
                          <input
                            type="email"
                            className="form-control"
                            type="number"
                            placeholder="Principal Amount"
                          />
                        </div>
                        <button className="btn btn-info">Calculate</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
