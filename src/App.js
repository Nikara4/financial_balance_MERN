import { useState, useEffect } from "react";
import "./styles.css";

import IncomeExpenses from "./components/IncomeExpenses";
import { Form } from "./components/Form";
import initialExpenses from "./assets/initial_expenses";
import initialIncomes from "./assets/initial_incomes";
import Budget from "./components/Budget";

function App() {
  const [income, setIncome] = useState(initialIncomes);
  const [expenses, setExpenses] = useState(initialExpenses);
  const [budget, setBudget] = useState(0);

  const calculateBalance = (exp, inc) => {
    let income = 0;
    let outcome = 0;
    exp.forEach((elem) => {
      outcome += Number(elem.amount);
    });
    inc.forEach((elem) => {
      income += Number(elem.amount);
    });
    const total = (income - outcome).toFixed(2);
    setBudget(total);
  };

  useEffect(() => {
    calculateBalance(expenses, income);
  }, [expenses, income]);

  function handleExpenses(expenses) {
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  }

  function handleIncomes(incomes) {
    setIncome((prevIncomes) => {
      return [incomes, ...prevIncomes];
    });
  }

  function deleteIncomePosition(index) {
    const newIncomesList = [...income];
    newIncomesList.splice(index, 1);

    setIncome(newIncomesList);
  }
  function deleteExpensesPosition(index) {
    const newExpensesList = [...expenses];
    newExpensesList.splice(index, 1);

    setExpenses(newExpensesList);
  }

  return (
    <>
      <Budget balance={budget} />
      <Form onAddIncome={handleIncomes} onAddExpenses={handleExpenses} />
      <IncomeExpenses
        type="Incomes"
        incomes={income}
        handleDeleteClick={deleteIncomePosition}
      />
      <IncomeExpenses
        type="Expensess"
        incomes={expenses}
        handleDeleteClick={deleteExpensesPosition}
      />
    </>
  );
}

export default App;
