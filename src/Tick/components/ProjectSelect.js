import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import ProjectOption from './ProjectOption';

/**
 * Component for display list projects
 * and select project to the user
 * @param props
 * @returns {*}
 * @constructor
 */
const ProjectSelect = (props) => {

  const {
    projects,
    changeProject,
    selectedProject,
  } = props;


  return (
    <Select
      onChange={changeProject}
      options={projects}
      value={selectedProject}
      components={{ Option: ProjectOption }}
      className={classNames('select-project', 'tick-select')}
    />
  );
};

ProjectSelect.propTypes = {
  changeProject: PropTypes.func.isRequired,
  selectedProject: PropTypes.instanceOf(Object).isRequired,
  projects: PropTypes.instanceOf(Array).isRequired,
};

export default ProjectSelect;
