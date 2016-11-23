import React, { PropTypes } from 'react';

const IconText = ({
    icon, text, className,
    size, rotate, flip,
    inverse, slim }) => {
        let variation = '';

    variation += size ? ` fa-${size}` : '';
    variation += rotate ? ` fa-rotate-${rotate}` : '';
    variation += flip ? ` fa-flip-${flip}` : '';
    variation += inverse ? ' fa-inverse' : '';

    const iconClass = `fa fa-${icon}${variation}`;

    return (
        slim
        ? <div className={className}>
            <i className={iconClass}></i> {text}
          </div>
        : <div className={className}>
            <i className={iconClass}></i>
            <h1>{text}</h1>
          </div>
    );
};

IconText.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['1x', '2x', '3x', '4x', '5x']),
    rotate: PropTypes.number,
    flip: PropTypes.oneOf(['horizontal', 'vertical']),
    inverse: PropTypes.bool,
    slim: PropTypes.bool
};

IconText.defaultProps = {
    icon: '',
    text: '',
    className: '',
    size: '',
    rotate: null,
    flip: '',
    inverse: false,
    slim: false
};

export default IconText;