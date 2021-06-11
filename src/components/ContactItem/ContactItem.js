import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({name,number}) => {
    return (<>
        <span>{name}: </span>
        <span>{number}</span>
    </>);
};

ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string
}

ContactItem.defaultProps = {
    name: "Mickey Mouse",
    number: 123456789
}

export default ContactItem