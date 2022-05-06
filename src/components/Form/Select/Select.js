import categories from "./../../../assets/categories";
import SelectOneItem from "./SelectOneItem";

function Select(props) {
  const { id, value, handleChange, className } = props;
  return (
    <select id={id} value={value} onChange={handleChange} className={className}>
      <option defaultValue>--Please choose a category--</option>
      {categories.map((elem) => {
        return <SelectOneItem key={`id-${elem.id}`} value={elem.name} />;
      })}
    </select>
  );
}

export default Select;
