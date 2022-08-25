import React from "react";
import { useSelector } from "react-redux";
import RowTablePay from "./RowTablePay";

export default function TablePay() {
  const payments = useSelector((state) => state.money.payments);
  let result = 0;
  payments.map((elem) => (result += elem.sum));
  return (
    <div className="container_tablePay">
      <table className="table table-bordered table-responsive-sm" id="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-warning">
            <td>Общая сумма</td>
            <td>{result}</td>
          </tr>
          {payments.map((elem) => {
            return <RowTablePay name={elem.name} sum={elem.sum} id={elem.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
