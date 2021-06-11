import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.scss'
import '../styles/base.scss'

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
            <form onSubmit={this.handleSubmit} className='contacts-form'>
                <label className='label'>
                    Name<input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"
                        className='input' />
                </label>
                <label className='label'>
                    Number<input
                        type="tel"
                        value={this.state.number}
                        onChange={this.handleChange}
                        name="number"
                    className='input'/>
                </label>
                <button type="submit" className='button contacts-form__button'>Add contact</button>
            </form>
        );
    };
};

export default ContactForm;