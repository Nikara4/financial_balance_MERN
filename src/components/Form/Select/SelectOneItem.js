function SelectOneItem(props) {
  const { value } = props;
  return <option value={value}>{value}</option>;
}

export default SelectOneItem;
