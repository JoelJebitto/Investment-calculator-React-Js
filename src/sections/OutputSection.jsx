import React from "react";
import { formatter } from "../util/investment";
export default function OutputSection({ data }) {
  return (
    <div className="m-10 flex justify-center  ">
      <table bclassName="mx-auto text-center my-10">
        <thead className="space-x-7">
          <tr>
            <th className="px-4 py-2 border">Year</th>
            <th className="px-4 py-2 border">Investment Value</th>
            <th className="px-4 py-2 border">Interest(Year)</th>
            <th className="px-4 py-2 border">Total Interest</th>
            <th className="px-4 py-2 border">Invested Captial</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr className="space-2" key={e.year}>
              <td className="px-4 py-2 border">{e.year}</td>
              <td className="px-4 py-2 border">
                {formatter.format(e.valueEndOfYear)}
              </td>
              <td className="px-4 py-2 border">
                {formatter.format(e.interest)}
              </td>
              <td className="px-4 py-2 border">
                {formatter.format(e.interest * e.year)}
              </td>
              <td className="px-4 py-2 border">
                {formatter.format(
                  e.valueEndOfYear - e.annualInvestment * e.year,
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
