import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Component for rounded and add symbol (hours, %, ...)
 * for display number in TaskStatus form
 * @param numberValue
 * @param symbol
 * @returns {*}
 * @constructor
 */
const Rounding = ({
                         numberValue,
                         symbol,
                       }) => {
  // set value as number
  const NUMBER = parseInt(numberValue);
  // check number or float. If float to fixed to two decimal places
  const IS_INTEGER = (NUMBER ^ 0) === NUMBER;
  return (
    <i
      className={classNames('tick-num-hours')}
    >
      {
        `${(IS_INTEGER ? NUMBER : NUMBER.toFixed(2))} ${symbol}`
      }
    </i>
  );
};

Rounding.propTypes = {
  numberValue: PropTypes.string.isRequired,
  symbol: PropTypes.string,
};

Rounding.defaultProps = {
  symbol:'',
};

export default Rounding;
