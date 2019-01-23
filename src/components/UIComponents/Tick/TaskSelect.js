import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';

/**
 * Component for display select tasks
 * @param props
 * @returns {*}
 * @constructor
 */
const TaskSelect = (props) => {

  const {
    tasks,
    changeTask,
    selectedTask,
  } = props;

  /**
   * Get array for tack select options
   */
  const optionsTacks = tasks.map((project) => {
    return {
      value: project.id,
      label: project.name,
    };
  });

  return (
    <Select
      className={classNames('select-tasks', 'tick-select')}
      onChange={changeTask}
      options={optionsTacks}
      value={selectedTask}
    />
  );
};

TaskSelect.propTypes = {
  changeTask: PropTypes.func.isRequired,
  selectedTask: PropTypes.instanceOf(Object).isRequired,
  tasks: PropTypes.instanceOf(Array).isRequired,
};

export default TaskSelect;
