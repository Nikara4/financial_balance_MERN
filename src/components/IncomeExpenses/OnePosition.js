function OnePosition(props) {
  const { title, amount, category, clickHandler } = props;
  return (
    <div className="div__item">
      <div className="item__description">
        <h3>{title}</h3>
      </div>
      <div className="item__description">
        <div>
          <p>
            <span>Amount:</span> {amount} PLN
          </p>
        </div>
      </div>
      <div className="item__description">
        <div>
          <p>
            <span>Category</span>: {category}
          </p>
        </div>
      </div>
      <button
        className="item__button"
        type="submit"
        id="submit"
        onClick={clickHandler}
      >
        Delete position
      </button>
    </div>
  );
}

export default OnePosition;
