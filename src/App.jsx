import UserInput from "./components/UserInput";
import Header from "./components/Header";
import Results from "./components/Results";
import "./style/App.css";
import { useState } from "react";

function App() {
  // States for both persons' expenses as arrays
  const [firstPersonExpenses, setFirstPersonExpenses] = useState([]);
  const [secondPersonExpenses, setSecondPersonExpenses] = useState([]);
  const [currentInput1, setCurrentInput1] = useState(""); // For Person 1 input
  const [currentInput2, setCurrentInput2] = useState(""); // For Person 2 input
  const [finalCalculation, setFinalCalculation] = useState(0);

  const firstPersonExpensesTotal = firstPersonExpenses.reduce(
    (acc, current) => acc + current,
    0
  );
  const secondPersonExpensesTotal = secondPersonExpenses.reduce(
    (acc, current) => acc + current,
    0
  );

  // Handle adding expenses for Person 1
  function handleFirstPersonClick() {
    setFirstPersonExpenses([...firstPersonExpenses, parseFloat(currentInput1)]);
    setCurrentInput1(""); // Clear input field after adding
  }

  // Handle adding expenses for Person 2
  function handleSecondPersonClick() {
    setSecondPersonExpenses([
      ...secondPersonExpenses,
      parseFloat(currentInput2),
    ]);
    setCurrentInput2(""); // Clear input field after adding
  }

  // Handle calculation who owes who money
  function handleFinalCalculation() {
    if (firstPersonExpensesTotal > secondPersonExpensesTotal) {
      setFinalCalculation(firstPersonExpensesTotal - secondPersonExpensesTotal);
    } else if (secondPersonExpensesTotal > firstPersonExpensesTotal) {
      setFinalCalculation(secondPersonExpensesTotal - firstPersonExpensesTotal);
    }
  }

  return (
    <>
      <Header />
      <div className="inputField">
        <UserInput
          user="🙋🏻‍♂️"
          value={currentInput1}
          onChange={(e) => setCurrentInput1(e.target.value)}
          onClick={handleFirstPersonClick}
        />
        <UserInput
          user="🙋🏼‍♀️"
          value={currentInput2}
          onChange={(e) => setCurrentInput2(e.target.value)}
          onClick={handleSecondPersonClick}
        />
      </div>
      <div className="resultField">
        <Results
          p1={firstPersonExpenses.join(", ")}
          p2={secondPersonExpenses.join(", ")}
          firstPersonExpensesTotal={firstPersonExpensesTotal}
          secondPersonExpensesTotal={secondPersonExpensesTotal}
          handleCalculation={handleFinalCalculation}
          finalCalculation={finalCalculation.toFixed(2)}
        />
      </div>
    </>
  );
}

export default App;
