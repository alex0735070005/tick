import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Auth from './Auth';
import Tracker from './Tracker';
import TaskStatus from './TaskStatus';
import Loading from './Loading';

/**
 * Component body for display if choice tracker or login form
 * @param props
 * @returns {*}
 * @constructor
 */
const Body = (props) => {

  const {
    toggleTickBodyValue,
    tickReturnTracker,
    isAuth,
    isFetching,
    tickAuth,
    task,
    toggleTickBody,
    displayMessages,
  } = props;

  return (
    <div className={classNames('tick-body', toggleTickBodyValue)}>
      <span
        className={classNames('hide-tick-popup icons ic-close-active')}
        onClick={toggleTickBody}
      />
      {
        !isAuth ? (
          <Auth
            tickAuth={tickAuth}
            displayMessages={displayMessages}
          />
        )
          : null
      }

      {
        isAuth && !task.id ? (
          <Tracker />
        )
          : null
      }

      {
        isAuth && task.id ? (
          <TaskStatus
            task={task}
            tickReturnTracker={tickReturnTracker}
          />
        )
          : null
      }
      <Loading
        isFetching={isFetching}
      />
    </div>
  );
};

Body.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  task: PropTypes.instanceOf(Object).isRequired,
  tickAuth: PropTypes.func.isRequired,
  tickReturnTracker: PropTypes.func.isRequired,
  toggleTickBody: PropTypes.func.isRequired,
  displayMessages: PropTypes.func.isRequired,
  toggleTickBodyValue: PropTypes.string.isRequired,
};

export default Body;
