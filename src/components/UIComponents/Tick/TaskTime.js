import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  isValidInputTime,
} from '../../../services/TickValidate';
import {
  TICK_TIME_PLACEHOLDER,
} from '../../../constants/Tick';

/**
 * Class for input user time
 */
class TaskTime extends Component {

  /**
   * Input user time string
   * @param {object} event
   */
  changeTime = (event) => {
    const {
      changeTickTime,
    } = this.props;

    const value = event.target.value;
    // If valid input user text save in redux state
    if (isValidInputTime(value)) {
      changeTickTime(value);
    }
  };

  render() {
    const {
      timeValue,
    } = this.props;

    const {
      changeTime,
    } = this;

    return (
      <input
        type='text'
        className={classNames('tick-time')}
        onChange={changeTime}
        value={timeValue}
        placeholder={TICK_TIME_PLACEHOLDER}
      />
    );
  }
}

TaskTime.propTypes = {
  changeTickTime: PropTypes.func.isRequired,
  timeValue: PropTypes.string.isRequired,
};

export default TaskTime;
