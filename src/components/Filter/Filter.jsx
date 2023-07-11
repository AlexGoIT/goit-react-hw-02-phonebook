import PropTypes from 'prop-types';
import { Component } from 'react';
import { FilterLabel, FilterInput } from './Filter.styled';

// const Filter = ({ onFilter }) => {
//   return (
//     <FilterLabel>
//       Find contacts by name
//       <FilterInput
//         type="text"
//         placeholder="Input name..."
//         onChange={e => {
//           onFilter(e);
//         }}
//       />
//     </FilterLabel>
//   );
// };

// export default Filter;

// Filter.propTypes = {
//   onFilter: PropTypes.func,
// };

export default class Filter extends Component {
  static propTypes = {
    onFilter: PropTypes.func,
  };

  state = {
    filter: '',
  };

  handleChange = e => {
    const { filter } = this.state;
    const { onFilter } = this.props;
    const { value } = e.target;

    this.setState({ filter: value });

    if (filter !== value) {
      onFilter({ filter: value });
    }
  };
  render() {
    const { filter } = this.state;

    return (
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          placeholder="Input name..."
          onChange={this.handleChange}
          value={filter}
        />
      </FilterLabel>
    );
  }
}
