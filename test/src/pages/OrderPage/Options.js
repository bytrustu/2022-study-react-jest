import React from 'react';

const Options = ({ name }) => {
    return (
        <from>
            <input type='checkbox' id={`${name} option`} />{' '}
            <label htmlFor={`${name} option`}>{name}</label>
        </from>
    );
};

export default Options;
