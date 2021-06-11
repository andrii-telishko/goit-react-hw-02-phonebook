import React from 'react';
import PropTypes from 'prop-types';
import '../styles/base.scss'

const Filter = ({value, onChange}) => {
    return (
        <label className='label'>
            Find contact by name
         <input
            type="text"
            value={value}
            onChange={onChange}
            className='input'/>
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter;