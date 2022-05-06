import { useRef } from "react";
import "./IncomeExpenses.css";
import OnePosition from "./OnePosition";

function IncomeExpenses(props) {
  const { type, incomes, handleDeleteClick } = props;
  const positionRef = useRef();

  return (
    <div className="div__wrapper">
      <h2>{type}</h2>
      <div className="div__balance--list">
        {incomes.length === 0 ? (
          <h3 className="balance--list__info">No positions added</h3>
        ) : (
          incomes.map((elem) => (
            <OnePosition
              ref={positionRef}
              key={`id-${elem.id}`}
              title={elem.title}
              amount={elem.amount}
              category={elem.category}
              clickHandler={handleDeleteClick}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default IncomeExpenses;
