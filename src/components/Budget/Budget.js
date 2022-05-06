import "./Budget.css";

function Budget({ balance }) {
  const color = Number(balance) < 0 ? "#cd6133" : "#218c74";
  const styles = { color: color };

  return (
    <div className="div__balance">
      <h2>Financial balance:</h2>
      <p style={styles}>{`${balance}`} PLN</p>
    </div>
  );
}

export default Budget;
