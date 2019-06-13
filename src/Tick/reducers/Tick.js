import {
  TICK_SET_PROJECTS,
  TICK_SET_IS_AUTH,
  TICK_SET_PROJECT,
  TICK_SET_TASKS,
  TICK_SET_SELECTED_TASK,
  TICK_SET_TASK,
  TICK_SET_TIME,
  TICK_SET_DATE,
  TICK_SET_MESSAGE,
  TICK_SET_MESSAGES,
  TICK_CLEAR,
  TICK_PROJECT_PLACEHOLDER,
  TICK_TASK_PLACEHOLDER,
  TICK_SET_IS_FETCHING,
} from "../constants/Tick";

export const initialState = {
  projects: [],
  tasks: [],
  task: {},
  selectedProject: {
    label: TICK_PROJECT_PLACEHOLDER,
  },
  selectedTask: {
    label: TICK_TASK_PLACEHOLDER,
  },
  timeValue: '',
  dateValue: '',
  messageValue: '',
  isAuth: false,
  isFetching: false,
  isShowMessages: false,
  messages: [],
}

const tick = (state = initialState, action) => {

  switch (action.type) {

    case TICK_SET_PROJECTS:
      return {
        ...state,
        projects: action.projects,
      }

    case TICK_SET_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      }

    case TICK_SET_TASK:
      return {
        ...state,
        task: action.task,
      }

    case TICK_SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      }

    case TICK_SET_PROJECT:
      return {
        ...state,
        selectedProject: action.selectedProject,
      }

    case TICK_SET_SELECTED_TASK:
      return {
        ...state,
        selectedTask: action.selectedTask,
      }

    case TICK_SET_TIME:
      return {
        ...state,
        timeValue: action.timeValue,
      }

    case TICK_SET_DATE:
      return {
        ...state,
        dateValue: action.dateValue,
      }

    case TICK_SET_MESSAGE:
      return {
        ...state,
        messageValue: action.messageValue,
      }

    case TICK_SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      }

    case TICK_SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case TICK_CLEAR:
      return {
        ...state,
        messages: [],
        task: {},
        timeValue: '',
        dateValue: '',
        messageValue: '',
        selectedProject: {
          label: TICK_PROJECT_PLACEHOLDER,
        },
        selectedTask: {
          label: TICK_TASK_PLACEHOLDER,
        }
      }

    default: {
      return state;
    }
  }
};

export default tick;
