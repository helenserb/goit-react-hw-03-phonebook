import { Component } from "react";
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import css from './Form.module.css'


export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className={css.formLabel}>
          Name:
        </label>
        <input
          className={css.formInput}
          id={this.nameInputId}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />

        <label htmlFor={this.numberInputId} className={css.formLabel}>
          Number:
        </label>
        <input
          className={css.formInput}
          id={this.numberInputId}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
        />

        <button className={css.submitBtn} type="submit">Add contact</button>
      </form>
    );
  };
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};