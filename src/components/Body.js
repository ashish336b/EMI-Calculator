import React, { Component } from "react";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      principal: "5000000",
      rate: "10.5",
      time: "240",
      totalEmi: "",
    };
  }
  setPrincipal = (event) => {
    this.setState({
      principal: event.target.value,
    });
  };
  setRate = (event) => {
    this.setState({ rate: event.target.value });
  };
  setTime = (event) => {
    this.setState({ time: event.target.value });
  };
  calculateEmi = () => {
    let monthlyRate = this.state.rate / 1200;
    let numerator = Math.pow(1 + monthlyRate, this.state.time);
    let denumerator = numerator - 1;
    let e = parseFloat(
      this.state.principal * monthlyRate * (numerator / denumerator)
    ).toFixed(0);
    this.setState({
      totalEmi: e,
    });
  };
  componentDidMount() {
    this.calculateEmi();
  }
  render() {
    return (
      <div>
        <section className="form-container py-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group py-2">
                          <label className="pr-3">Principle :</label>
                          <input
                            className="form-control"
                            value={this.state.principal}
                            onChange={this.setPrincipal}
                            onBlur={this.calculateEmi}
                            type="number"
                            placeholder="Principal Amount"
                          />
                        </div>
                        <div className="form-group py-2">
                          <label className="pr-3">Interest Rate :</label>
                          <input
                            className="form-control"
                            onChange={this.setRate}
                            onBlur={this.calculateEmi}
                            value={this.state.rate}
                            type="number"
                            placeholder="Interest"
                          />
                        </div>
                        <div className="form-group py-2">
                          <label className="pr-3">Time</label>
                          <input
                            className="form-control"
                            type="number"
                            onChange={this.setTime}
                            value={this.state.time}
                            onBlur={this.calculateEmi}
                            placeholder="Time"
                          />
                        </div>
                        <button
                          className="btn btn-info"
                          onClick={this.calculateEmi}
                        >
                          Calculate
                        </button>
                      </div>
                      <div className="col-lg-6">
                        <div className="border p-1 m-3">
                          <h5 className="text-center">Loan EMI</h5>
                          <p className="text-center">
                            Rs. {this.state.totalEmi}
                          </p>
                        </div>
                        <div className="border p-1 m-3">
                          <h5 className="text-center">
                            Total Interest Payable
                          </h5>
                          <p className="text-center">Rs. 1000</p>
                        </div>
                        <div className="border p-1 m-3">
                          <h5 className="text-center">Total Payment</h5>
                          <p className="text-center">Rs. 1000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="container-fluid p-3">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Principal</th>
                      <th>Interest</th>
                      <th>Total Payment</th>
                      <th>Balance</th>
                      <th>Load Paid</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>1000</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                      <td>100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
