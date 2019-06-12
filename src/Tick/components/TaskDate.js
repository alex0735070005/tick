import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import {
  Calendar,
} from 'react-date-range';
import classNames from 'classnames';
import moment from 'moment';
import {
  isFullDate,
  isValidInputDate,
} from '../services/TickValidate';
import {
  TICK_DATE_PLACEHOLDER,
} from '../constants/Tick';


/**
 * Class for input user date
 */
class TaskDate extends Component {
  /**
   * Set state for show/hide datePicker
   * @param {object} props
   */
  constructor(props) {

    super(props);

    this.state = {
      showDatePickerValue: '',
      userDateValue: new Date().toLocaleDateString('en-US'),
    };
    this.setEmptyDateValue = debounce(props.changeTickDate, 500);
  }

  componentDidMount() {
    const {
      changeTickDate,
    } = this.props;
    // Create moment object for convert date for sending the server
    const date = moment(new Date());
    changeTickDate(date);
  }

  /**
   * Input user date string
   * @param {object} event
   */
  changeInputDate = (event) => {
    const {
      changeTickDate,
    } = this.props;
    // get input date value
    const value = event.target.value;

    /**
     * if valid each character that enter user
     * save value in component state
     */
    if (isValidInputDate(value)) {
      this.setState({
        userDateValue: value,
      });
    }

    /**
     * Check whether the user entered the full date
     * If full date save value in redux state
     */
    if (isFullDate(value)) {
      // Create moment object for convert date for sending the server
      const date = moment(new Date(value));
      changeTickDate(date);
      // Update calendar state for display entered by the date user in the calendar
      this._Calendar.setState({
        date,
        shownDate: date,
      });
    } else {
      this.setEmptyDateValue(null);
    }
  };

  /**
   * Set date in state component if user choice
   * date value in calendar and hide calendar
   * @param {object} date
   */
  changeCalendarDate = (date) => {
    const {
      changeTickDate,
    } = this.props;
    changeTickDate(date);
    this.setState({
      userDateValue: date.format('M/D/Y'),
      showDatePickerValue: 'hide',
    });
    document.removeEventListener('click', (this.hideDatePicker));
  };

  /**
   * Show calendar
   */
  showDatePicker = () => {
    /**
     * Set hide tick outside click
     */
    document.addEventListener('click', (this.hideDatePicker));
    this.setState({
      showDatePickerValue: 'show',
    });
  };

  /**
   * hide calendar
   */
  hideDatePicker = (event) => {
    let isCalendar = event.path.find(elem =>
      elem.classList && elem.classList.contains('t-calendar'));
    if(!isCalendar) {
      this.setState({
        showDatePickerValue: 'hide',
      });
      document.removeEventListener('click', (this.hideDatePicker));
    }
  };

  render() {
    const {
      showDatePickerValue,
      userDateValue,
    } = this.state;
    const {
      showDatePicker,
      changeInputDate,
      changeCalendarDate,
    } = this;

    return (
      <div
        className={classNames('task-date')}
      >
        <input
          ref={node => this._datePicker = node}
          type='text'
          value={userDateValue}
          placeholder={TICK_DATE_PLACEHOLDER}
          onChange={changeInputDate}
          onClick={showDatePicker}
        />

        <div
          className={classNames('t-calendar', showDatePickerValue)}
        >
          <Calendar
            ref={(e) => this._Calendar = e}
            onChange={changeCalendarDate}
          />

        </div>
      </div>
    );
  }
}

TaskDate.propTypes = {
  changeTickDate: PropTypes.func.isRequired,
};

export default TaskDate;
