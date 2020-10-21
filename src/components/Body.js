import React, { Component } from "react";
import numberFormat from "../helper/numberFormat";
export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      principal: "250000",
      rate: "10",
      time: "3",
      totalEmi: "",
      tableData: [],
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
    let e = this.state.principal * monthlyRate * (numerator / denumerator);
    //
    let tableData = [];
    let interest = monthlyRate * this.state.principal;
    let principalPaid = e - interest;
    let remainingBalance = this.state.principal - principalPaid;
    tableData.push({
      interest: parseFloat(interest).toFixed(2),
      principal: parseFloat(principalPaid).toFixed(2),
      remainingBalance: parseFloat(remainingBalance).toFixed(2),
      totalPaid: parseFloat(e).toFixed(2),
    });
    for (let i = 1; i < this.state.time; i++) {
      interest = monthlyRate * remainingBalance;
      principalPaid = e - interest;
      remainingBalance = remainingBalance - principalPaid;
      tableData.push({
        interest: parseFloat(interest).toFixed(2),
        principal: parseFloat(principalPaid).toFixed(2),
        remainingBalance: parseFloat(remainingBalance).toFixed(2),
        totalPaid: parseFloat(e).toFixed(2),
      });
    }
    this.setState({
      totalEmi: parseFloat(e).toFixed(2),
      tableData: tableData,
    });
  };
  componentDidMount() {
    this.calculateEmi();
  }
  render() {
    const tableItem = this.state.tableData.map((el, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{Math.round(el.principal)}</td>
          <td>{Math.round(el.interest)}</td>
          <td>{Math.round(el.totalPaid)}</td>
          <td>{Math.abs(Math.round(el.remainingBalance))}</td>
        </tr>
      );
    });
    return (
      <div>
        <section className="body-section py-3">
          <div className="container-fluid">
            <div className="row  justify-content-center">
              <div className="col-lg-10">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <h5 className="card-title text-center font-weight-bold text-primary">
                          Calculate Home Loan
                        </h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-container">
                          <div className="form-group py-2">
                            <label className="font-weight-bold">
                              Loan Amount :
                            </label>
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
                            <label className="font-weight-bold">
                              Interest Rate :
                            </label>
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
                            <label className="font-weight-bold">
                              Loan Tenure :
                            </label>
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
                            className="btn btn-success btn-block font-weight-bold"
                            onClick={this.calculateEmi}
                          >
                            Calculate
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="border p-1 m-3">
                          <h5 className="text-center">Loan EMI</h5>
                          <p className="text-center">
                            Rs. {numberFormat(this.state.totalEmi)}
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
            <div className="row justify-content-center pt-3">
              <div className="col-lg-10">
                <div className="card">
                  <div className="card-body">
                    <h5 class="card-title text-center">
                      Loan Amortization Table
                    </h5>
                    <div className="container-fluid p-3">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Month</th>
                            <th>Principal</th>
                            <th>Interest</th>
                            <th>Total Payment</th>
                            <th>Balance</th>
                          </tr>
                        </thead>
                        <tbody>{tableItem}</tbody>
                      </table>
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
