import { FilterLabel, FilterInput } from "./Filter.styled";

const Filter = ({ onFilter }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        placeholder="Input name..."
        onChange={(e) => {
          onFilter(e);
        }}
      />
    </FilterLabel>
  );
};

export default Filter;
