import React, {
  Component,
} from 'react';
import {
  connect,
} from 'react-redux';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import classNames from 'classnames';
import ProjectSelect from './ProjectSelect';
import TaskSelect from './TaskSelect';
import TaskDate from './TaskDate';
import TaskTime from './TaskTime';
import Messages from './Messages';

import {
  TICK_BUTTON_LOGOUT_TEXT,
  TICK_BUTTON_ENTER_TEXT,
} from '../constants/Tick';
import {
  changeProject,
  changeTask,
  changeTickDate,
  changeTickMessage,
  changeTickTime,
  tickLogout,
  createEntry,
} from '../actions/Tick';


/**
 * Component tracker for display track form
 */
class Tracker extends Component {

  constructor(props) {

    super(props);
    this.state = {
      messageValueText: '',
    };
    // set delay for input user text in message
    this.changeMessage = debounce(props.changeTickMessage, 500);
  }

  /**
   * Handler for input user message text
   * @param event
   */
  changeMessageText = event => {
    const value = event.target.value;
    this.setState({
      messageValueText:value,
    });
    this.changeMessage(value);
  };
  /**
   * Handler for create entry time
   */
  create = () => {
    const {
      selectedProject,
      selectedTask,
      timeValue,
      dateValue,
      messageValue,
      createEntry,
    } = this.props;

    createEntry({
      timeValue,
      dateValue,
      messageValue,
      selectedTask,
      selectedProject,
    });
  };

  render() {
    const {
      tickLogout,
      projects,
      tasks,
      changeProject,
      changeTickTime,
      changeTickDate,
      selectedProject,
      selectedTask,
      timeValue,
      dateValue,
      changeTask,
    } = this.props;

    const {
      create,
      changeMessageText,
    } = this;

    const {
      messageValueText,
    } = this.state;

    return (
      <div className={classNames('tick-tracker')}>
        <div className={classNames('tick-tracker-header')}>
          <h3>Tick tracker</h3>
          <button onClick={tickLogout} type='button'>{TICK_BUTTON_LOGOUT_TEXT}</button>
        </div>
        <Messages />
        <div className={classNames('tick-tracker-body')}>
          <ProjectSelect
            projects={projects}
            changeProject={changeProject}
            selectedProject={selectedProject}
          />
          <TaskSelect
            tasks={tasks}
            changeTask={changeTask}
            selectedTask={selectedTask}
          />
          <TaskTime
            changeTickTime={changeTickTime}
            timeValue={timeValue}
          />
          <TaskDate
            changeTickDate={changeTickDate}
            dateValue={dateValue}
          />
          <textarea
            onChange={changeMessageText}
            value={messageValueText}
          />
          <button
            type='button'
            onClick={create}
          >
            {TICK_BUTTON_ENTER_TEXT}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    projects,
    tasks,
    user,
    selectedProject,
    selectedTask,
    timeValue,
    dateValue,
    messageValue,
  } = state.tick;

  return {
    projects,
    user,
    tasks,
    selectedProject,
    selectedTask,
    timeValue,
    dateValue,
    messageValue,
  };
};

const mapDispatchToProps = ({
  tickLogout,
  changeProject,
  changeTask,
  changeTickTime,
  changeTickDate,
  changeTickMessage,
  createEntry,
});

Tracker.propTypes = {
  changeProject: PropTypes.func.isRequired,
  changeTask: PropTypes.func.isRequired,
  changeTickDate: PropTypes.func.isRequired,
  changeTickMessage: PropTypes.func.isRequired,
  changeTickTime: PropTypes.func.isRequired,
  createEntry: PropTypes.func.isRequired,
  dateValue: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  projects: PropTypes.instanceOf(Array).isRequired,
  selectedProject: PropTypes.instanceOf(Object).isRequired,
  selectedTask: PropTypes.instanceOf(Object).isRequired,
  tasks: PropTypes.instanceOf(Object).isRequired,
  tickLogout: PropTypes.func.isRequired,
  timeValue: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracker);

