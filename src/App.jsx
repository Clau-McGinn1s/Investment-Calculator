import { Header } from "./components/Header"
import { InputGroup } from "./components/InputGroup"
import { useState } from "react"
import { calculateInvestmentResults } from "./util/investment";
import { Results } from "./components/Results";
import { Error } from "./components/Error";

const blankData = {
  initialInvestment : 10000,
  annualInvestment : 1200,
  expectedReturn : 1.5,
  duration : 10,
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
  const [errMessage, throwError] = useState(false);

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

          if(newData.duration < 1){
            throwError("Duration must be a positive value");
          }else{
            throwError(false);
          }

          return newData;
      });
  }


  return (
    <main>
      <Header />
      <InputGroup updateData={inputDataHandler} refData={blankData}/>
      {errMessage ? <Error message={errMessage}/> :
        <Results results={resultsData}/>
      }
    </main>
  )
}

export default App
