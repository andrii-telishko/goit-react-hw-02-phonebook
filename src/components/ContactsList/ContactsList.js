import React from 'react';
import ContactItem from '../ContactItem';
import PropTypes from 'prop-types';
import '../styles/base.scss'
import './ContactList.scss'


const ContactsList = ({shownContacts, onClick}) => {
    return (
        <ul className='contact-list'>
            {shownContacts().map(({id, name, number}) => {
                return (<li key={id} className='contact-item'><ContactItem
                    name={name}
                    number={number} />
                    <button type='button' onClick={()=>{onClick(id)}} className='button contact-item__button'>Delete</button>
                </li>)
            })}
        </ul>
    );
};

ContactsList.propTypes = {
    shownContacts: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ContactsList;