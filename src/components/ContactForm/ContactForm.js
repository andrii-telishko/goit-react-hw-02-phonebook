import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    static propTypes = {
       onSubmit: PropTypes.func.isRequired
    };

    state = {
        name: '',
        number: ''
    };

     handleChange = (e) => {
         this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.name, this.state.number);
        this.reset();
  };

    reset() {
        this.setState({ name: '', number: '' });
  };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name<input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name" />
                </label>
                <label>
                    Number<input
                        type="tel"
                        value={this.state.number}
                        onChange={this.handleChange}
                        name="number" />
                </label>
                <button type="submit">Add contact</button>
            </form>
        );
    };
};

export default ContactForm;