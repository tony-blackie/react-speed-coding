import React from 'react';

const Input = (props) => {
     return <div
        {...props}
        className={props.className
            ? `input ${props.className}`
            : 'input'} >
    </div>
};

Input.propTypes = {
    children: React.PropTypes.node
};

export default Input;