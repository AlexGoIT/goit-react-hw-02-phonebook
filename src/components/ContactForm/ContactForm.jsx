import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Form } from './ContactForm.styled';

export default class ContactForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const id = nanoid(5);

    this.props.onAddContact({ id, name, number });

    e.target.reset();
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}
