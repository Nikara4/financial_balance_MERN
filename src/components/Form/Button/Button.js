function Button(props) {
  const { type, id, handleClick, className } = props;

  return (
    <button type={type} id={id} onClick={handleClick} className={className}>
      Add new position
    </button>
  );
}

export default Button;
