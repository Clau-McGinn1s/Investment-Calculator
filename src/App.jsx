import { Header } from "./components/Header"
import { InputGroup } from "./components/InputGroup"
import { useState } from "react"
import { calculateInvestmentResults } from "./util/investment";
import { Results } from "./components/Results";

const blankData = {
  initialInvestment : null,
  annualInvestment : null,
  expectedReturn : null,
  duration : null,
};

function calculateInvestment(data){
  if(Object.values(data).every((input) => input !== null)){
    const results = calculateInvestmentResults(data);
    return results;
  }
  return null;
}

function App() {
  const [inputData, setData] = useState(blankData);

  const resultsData = calculateInvestment(inputData);
  console.log( resultsData ?? "No results");

  function inputDataHandler(value, name){
      setData((oldData)=>{
          let newData = {
              initialInvestment : oldData.initialInvestment,
              annualInvestment : oldData.annualInvestment,
              expectedReturn : oldData.expectedReturn,
              duration : oldData.duration,
          };

          newData[name] = parseFloat(value);
          return newData;
      });
  }


  return (
    <main>
      <Header />
      <InputGroup updateData={inputDataHandler}/>
      <Results results={resultsData}/>
    </main>
  )
}

export default App
