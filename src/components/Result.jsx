import React from "react";
import numberFormat from "../helper/numberFormat";
export default function Result(props) {
  return (
    <div>
      <div className="result-container">
        <div className="border p-1 m-3">
          <h5 className="text-center">Loan EMI</h5>
          <p className="text-center">Rs.{numberFormat(props.totalEmi)}</p>
        </div>
        <div className="border p-1 m-3">
          <h5 className="text-center">Total Interest Payable</h5>
          <p className="text-center">
            Rs.
            {numberFormat(props.totalInterestPayable)}
          </p>
        </div>

        <div className="border p-1 m-3">
          <h5 className="text-center">Total Payment</h5>
          <p className="text-center">
            Rs.
            {numberFormat(
              Number(props.totalInterestPayable) + Number(props.principal)
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
