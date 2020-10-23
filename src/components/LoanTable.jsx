import React from "react";
import numberFormat from "../helper/numberFormat";
export default function LoanTable(props) {
  const tableItem = props.tableData.map((el, i) => {
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
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center font-weight-bold text-primary">
            Loan Amortization Table
          </h5>
          <div className="container-fluid p-3">
            <div className="table-responsive"></div>
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
  );
}
