import "../style/Results.css";

export default function Results({
  p1,
  p2,
  firstPersonExpensesTotal,
  secondPersonExpensesTotal,
  handleCalculation,
  finalCalculation,
}) {
  return (
    <div>
      <div className="result-container">
        <div className="expenses">
          <h3>
            <span className="big">Expenses: </span>
            {p1}
          </h3>
          <h3>
            <span className="big">Total:</span> {firstPersonExpensesTotal}
          </h3>
        </div>
        <div className="expenses">
          <h3>
            <span className="big">Expenses: </span>
            {p2}
          </h3>
          <h3>
            <span className="big">Total: </span>
            {secondPersonExpensesTotal}
          </h3>
        </div>
      </div>
      <div className="final-result-container">
        <button className="final-button" onClick={handleCalculation}>
          Calculate
        </button>
        {finalCalculation > 0 ? (
          <h1>
            {firstPersonExpensesTotal > secondPersonExpensesTotal
              ? `🙋🏼‍♀️ --💶--> 🙋🏻‍♂️ = ${finalCalculation}€`
              : `🙋🏻‍♂️ --💶--> 🙋🏼‍♀️ = ${finalCalculation}€`}
          </h1>
        ) : null}
      </div>
    </div>
  );
}
