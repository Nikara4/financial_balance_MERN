function Input(props) {
  const { name, type, id, value, handleChange, className, placeholder } = props;

  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={handleChange}
      className={className}
      placeholder={placeholder}
      name={name}
    />
  );
}

export default Input;
