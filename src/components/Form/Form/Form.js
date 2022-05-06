import { useState } from "react";
import "./../Form.css";

import { Button, Input, Label, Select } from "./../index";

function Form(props) {
  const { onAddIncome, onAddExpenses } = props;

  const [chosenType, setChosenType] = useState(
    window.localStorage.getItem("budgetType") || ""
  );
  const [title, setTitle] = useState(
    window.localStorage.getItem("title") || ""
  );
  const [amount, setAmount] = useState(
    window.localStorage.getItem("amount") || null
  );
  const [chosenCategory, setChosenCategory] = useState(
    window.localStorage.getItem("categories") || null
  );

  function handleSavedData(type, chosenData) {
    const data = {
      ...chosenData,
      id: Math.random().toString()
    };
    if (type === "income") {
      onAddIncome(data);
    } else {
      onAddExpenses(data);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const filledData = {
      title: title,
      amount: amount,
      category: chosenCategory
    };

    handleSavedData(chosenType, filledData);

    setChosenType("");
    setTitle("");
    setAmount("");
    setChosenCategory("");
  }

  const handleTypeChange = (event) => setChosenType(event.target.value);
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleAmountChange = (event) => setAmount(event.target.value);
  const handleCategoryChange = (event) => setChosenCategory(event.target.value);

  return (
    <form onSubmit={handleSubmit} className="expenses--income__form">
      <div>
        <Input
          type="radio"
          name="budgetType"
          id="expenses"
          value="expenses"
          handleChange={handleTypeChange}
          className="radio__input"
        />
        <Label htmlFor="expenses" className="radio__label">
          Expenses
        </Label>
        <Input
          type="radio"
          name="budgetType"
          id="income"
          value="income"
          handleChange={handleTypeChange}
          className="radio__input"
        />
        <Label htmlFor="income" className="radio__label">
          Income
        </Label>
      </div>

      <div>
        <Label htmlFor="title" className="text__label">
          Title
        </Label>
        <Input
          type="text"
          id="title"
          value={title}
          handleChange={handleTitleChange}
          className="text__input"
          placeholder="title of expenses/income"
        />
      </div>

      <div>
        <Label htmlFor="amount" className="text__label">
          Amount
        </Label>
        <Input
          type="number"
          id="amount"
          value={amount || ""}
          handleChange={handleAmountChange}
          className="text__input"
          placeholder="amount of expenses/income"
        />
      </div>

      <div>
        <Label htmlFor="categories" className="categories__label">
          Category
        </Label>
        <Select
          id="categories"
          value={chosenCategory}
          handleChange={handleCategoryChange}
          className="categories__select"
        />
      </div>

      <div>
        <Button type="submit" id="send" className="submit__button" />
      </div>
    </form>
  );
}

export default Form;
