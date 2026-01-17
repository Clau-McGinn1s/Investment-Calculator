import { formatter } from "../util/investment";

export function Results({results}){

    return (
        <table id="result">
            <thead>
            <tr>
                <th scope="col">Year</th>
                <th scope="col">Investment Value</th>
                <th scope="col">Interest (Year)</th>
                <th scope="col">Total Interest</th>
                <th scope="col">Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {results ? results.map((row, index)=>
                <tr key={index}>
                    <th scope="col">{row.year}</th>
                    <th scope="col">{formatter.format(row.valueEndOfYear)}</th>
                    <th scope="col">{formatter.format(row.interest)}</th>
                    <th scope="col">{formatter.format(row.annualInterest)}</th>
                    <th scope="col">{formatter.format(row.annualInvestment)}</th>
                </tr>
                )
                :
                null
            }
            </tbody>
      </table>
    )
}