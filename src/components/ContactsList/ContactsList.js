import React from 'react';
import ContactItem from '../ContactItem';
import PropTypes from 'prop-types';


const ContactsList = ({shownContacts, onClick}) => {
    return (
        <ul>
            {shownContacts().map(({id, name, number}) => {
                return (<li key={id}><ContactItem
                    name={name}
                    number={number} />
                    <button type='button' onClick={()=>{onClick(id)}}>Delete</button>
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