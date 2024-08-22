import React from "react";
import currencyStore from "../../state/store";
import { renderToPipeableStream } from "react-dom/server";

function CompareTableRow({ diff, data1, data2, img = false, type }) {
  const { currency } = currencyStore();

  return (
    <>
      <tr className="hover:bg-gray-600 transition-colors duration-200">
        <td className="py-4 px-6 border-b border-gray-200 text-base">{diff}</td>
        <td className="py-4 px-6 border-b border-gray-200 text-base">
          {" "}
          {type == "currency" && `${currency == "usd" ? "$" : "₹"}`}
          {img ? <img src={data1}></img> : data1}
          {type == "percentage" && "%"}
        </td>
        <td className="py-4 px-6 border-b border-gray-200 text-base">
          {type == "currency" && `${currency == "usd" ? "$" : "₹"}`}
          {img ? <img src={data2}></img> : data2}
          {type == "percentage" && "%"}
        </td>
      </tr>
    </>
  );
}

export default CompareTableRow;
