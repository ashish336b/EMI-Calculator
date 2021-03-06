import React, { Component } from "react";
import pie from "chart.js";
import LoanTable from "./LoanTable";
import Result from "./Result";
export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      principal: "2500000",
      rate: "10.5",
      time: "15",
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
        ctx.height = 300;
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
          options: {
            maintainAspectRatio: false,
          },
        });
      }
    );
  };
  componentDidMount() {
    this.calculateEmi();
  }
  render() {
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
                              Loan Tenure (month) :
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
                        <Result
                          totalEmi={this.state.totalEmi}
                          totalInterestPayable={this.state.totalInterestPayable}
                          principal={this.state.principal}
                        />
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
                        <canvas id="pieChart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center pt-3">
              <div className="col-lg-10">
                <LoanTable tableData={this.state.tableData} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
