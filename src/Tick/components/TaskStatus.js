import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Rounding from './Rounding';
import {
  TICK_BUDGET_TEXT,
  TICK_DONE_TEXT,
  TICK_NAME_TEXT,
  TICK_RETURN_TEXT,
  TICK_STATUS_TEXT,
  TICK_TOTAL_TEXT,
  TICK_TRACK_TEXT,
  TICK_HOURS_SYMBOL,
  TICK_PERCENT_SYMBOL,
} from "../constants/Tick";

/**
 * Component for creating a task
 * report after the user adds time
 * @param props
 * @returns {*}
 * @constructor
 */
const TaskStatus = (props) => {

  const {
    task,
    tickReturnTracker,
  } = props;

  return (
    <div className={classNames('tick-task-status')}>
      <div className={classNames('task-header')}>
        <h3>{TICK_STATUS_TEXT}</h3>
        <button
          onClick={tickReturnTracker}
          type='button'
        >
          {TICK_RETURN_TEXT}
        </button>
      </div>
      <div className={classNames('task-body')}>
        <div className={classNames('task-status-wrap')}>
          <div>
            <span>{TICK_NAME_TEXT}</span>
            {task.name}
          </div>
          <div>
            <span>{TICK_TRACK_TEXT}</span>
            <Rounding
              numberValue={task.timeValue}
              symbol={TICK_HOURS_SYMBOL}
            />
          </div>
          <div>
            <span>{TICK_TOTAL_TEXT}</span>
            <Rounding
              numberValue={task.total_hours}
              symbol={TICK_HOURS_SYMBOL}
            />
          </div>
          <div>
            <span>{TICK_BUDGET_TEXT}</span>
            <Rounding
              numberValue={task.budget}
              symbol={TICK_HOURS_SYMBOL}
            />
          </div>
          <div>
            <span>{TICK_DONE_TEXT}</span>
            <Rounding
              numberValue={task.total_hours / task.budget * 100}
              symbol={TICK_PERCENT_SYMBOL}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TaskStatus.propTypes = {
  task: PropTypes.instanceOf(Object).isRequired,
  tickReturnTracker: PropTypes.func.isRequired,
};

export default TaskStatus;
