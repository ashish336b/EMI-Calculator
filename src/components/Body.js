import React, { Component } from "react";
import numberFormat from "../helper/numberFormat";
import pie from "chart.js";
export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      principal: "250000",
      rate: "10",
      time: "3",
      totalEmi: "",
      tableData: [],
      totalInterestPayable: "0",
      totalPayment: "0",
      interestPercentage: "",
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
      interest: interest,
      principal: principalPaid,
      remainingBalance: remainingBalance,
      totalPaid: e,
    });
    for (let i = 1; i < this.state.time; i++) {
      interest = monthlyRate * remainingBalance;
      principalPaid = e - interest;
      remainingBalance = remainingBalance - principalPaid;
      tableData.push({
        interest: interest,
        principal: principalPaid,
        remainingBalance: remainingBalance,
        totalPaid: e,
      });
    }
    let totalInterestPayable = tableData.reduce((acc, curr) => {
      return acc + Number(curr.interest);
    }, 0);
    let interestPercentage =
      (totalInterestPayable /
        (Number(this.state.principal) + totalInterestPayable)) *
      100;
    this.setState(
      {
        totalEmi: parseFloat(e).toFixed(2),
        tableData: tableData,
        totalInterestPayable: totalInterestPayable,
        interestPercentage: parseFloat(interestPercentage).toFixed(2),
      },
      () => {
        var ctx = document.getElementById("pieChart");
        if (window.chart) {
          window.chart.destroy();
        }
        window.chart = new pie(ctx, {
          type: "pie",
          data: {
            labels: ["Interest", "Principal"],
            datasets: [
              {
                backgroundColor: ["#ED8C2B", "#88A825"],
                borderColor: "#ffffff",
                data: [
                  this.state.interestPercentage,
                  100 - this.state.interestPercentage,
                ],
              },
            ],
          },
          options: {},
        });
      }
    );
  };
  componentDidMount() {
    this.calculateEmi();
  }
  render() {
    const tableItem = this.state.tableData.map((el, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{numberFormat(el.principal)}</td>
          <td>{numberFormat(el.interest)}</td>
          <td>{numberFormat(el.totalPaid)}</td>
          <td>{numberFormat(el.remainingBalance)}</td>
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
                    <h5 className="card-title text-center font-weight-bold text-primary">
                      Calculate Home Loan
                    </h5>
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
                            className="btn btn-info btn-block font-weight-bold"
                            onClick={this.calculateEmi}
                          >
                            Calculate
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="result-container">
                          <div className="border p-1 m-3">
                            <h5 className="text-center">Loan EMI</h5>
                            <p className="text-center">
                              Rs.{numberFormat(this.state.totalEmi)}
                            </p>
                          </div>
                          <div className="border p-1 m-3">
                            <h5 className="text-center">
                              Total Interest Payable
                            </h5>
                            <p className="text-center">
                              Rs.
                              {numberFormat(this.state.totalInterestPayable)}
                            </p>
                          </div>

                          <div className="border p-1 m-3">
                            <h5 className="text-center">Total Payment</h5>
                            <p className="text-center">
                              Rs.
                              {numberFormat(
                                Number(this.state.totalInterestPayable) +
                                  Number(this.state.principal)
                              )}
                            </p>
                          </div>
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
                    <h5 className="card-title text-center font-weight-bold text-primary">
                      Pie Chart
                    </h5>
                    <div className="chart-container p-3">
                      <div className="chart-container">
                        <canvas id="pieChart" width="400" height="100"></canvas>
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
                    <h5 className="card-title text-center font-weight-bold text-primary">
                      Loan Amortization Table
                    </h5>
                    <div className="container-fluid p-3">
                      <div className="table-responsive">
                        <table className="table table-bordered table-striped table-sm">
                          <thead>
                            <tr className="bg-warning text-dark">
                              <th>Month</th>
                              <th>Principal (A)</th>
                              <th>Interest (B)</th>
                              <th>Total Payment (A + B)</th>
                              <th>Balance</th>
                            </tr>
                          </thead>
                          <tbody className="">{tableItem}</tbody>
                        </table>
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
