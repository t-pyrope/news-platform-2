import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ msg }) => {
    return (
        <div className='errorMsg'>
            <p>{msg}</p>
        </div>
    );
};

ErrorMessage.propTypes = {
    msg: PropTypes.string.isRequired,
};

export default ErrorMessage;
