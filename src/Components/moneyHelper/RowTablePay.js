import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";
import { editName, editSum, removeRow } from "../Store/moneySlice";

export default function RowTablePay(props) {
  const [name, setName] = useState("");
  const [sum, setSum] = useState(0);
  const [isEditName, setIsEditName] = useState(false);
  const [isEditSum, setIsEditSum] = useState(false);
  const dispatch = useDispatch();
  const clickName = (id, name) => {
    setIsEditName(!isEditName);
    dispatch(editName({ id, name }));
  };
  const id = props.id;
  const clickSum = (id, sum) => {
    setIsEditSum(!isEditSum);
    if (Number.isInteger(sum)) {
      dispatch(editSum({ id, sum }));
    }
  };
  return (
    <tr id="row">
      <td onDoubleClick={() => clickName(id, name)}>
        {isEditName ? (
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="edit_name "
          />
        ) : (
          props.name
        )}
      </td>
      <td onDoubleClick={() => clickSum(id, sum)}>
        {isEditSum ? (
          <input
            className="edit_sum"
            type="text"
            onChange={(e) => setSum(parseInt(e.target.value))}
          />
        ) : (
          props.sum
        )}
      </td>
      <button
        onClick={() => dispatch(removeRow({ id }))}
        className="remove_row"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </tr>
  );
}
