import {
  TICK_ERROR_DATE_TEXT,
  TICK_ERROR_PROJECT_TEXT,
  TICK_ERROR_TASK_TEXT,
  TICK_ERROR_TIME_TEXT,
  VALIDATION,
} from '../constants/Tick';

/**
 * Validate tick input user date
 * @param str
 * @returns {boolean}
 */
export const isValidInputDate = (str) => {
  return !!VALIDATION.TICK_INPUT_DATE.test(str);
};

/**
 * Validate tick entered user full date
 * @param str
 * @returns {boolean}
 */
export const isFullDate = (str) => {
  return !!VALIDATION.TICK_INPUT_FULL_DATE.test(str);
};

/**
 * Validate tick entered user time
 * @param str
 * @returns {boolean}
 */
export const isValidInputTime = (str) => {
  return !!VALIDATION.TICK_INPUT_TIME.test(str);
};

/**
 * Validate tick entered user email
 * @param str
 * @returns {boolean}
 */
export const isValidInputEmail = (str) => {
  return !!VALIDATION.EMAIL.test(str);
};

/**
 * Validate form for create tick entry
 * @param entry
 * @returns {Array}
 */
export const isErrorsTickEntries = (entry) => {
  let errors = [];
  const {
    dateValue,
    timeValue,
    selectedProject,
    selectedTask,
  } = entry;

  if(!selectedProject.value){
    errors.push({
      field:'project',
      message:TICK_ERROR_PROJECT_TEXT,
    });
  }

  if(!selectedTask.value){
    errors.push({
      field:'task',
      message:TICK_ERROR_TASK_TEXT,
    });
  }

  if(!dateValue){
    errors.push({
      field:'date',
      message:TICK_ERROR_DATE_TEXT,
    });
  }

  if(VALIDATION.TICK_INPUT_IS_ERROR_TIME.test(timeValue)){
    errors.push({
      field:'hours',
      message:TICK_ERROR_TIME_TEXT,
    });
  }

  return errors;
};
