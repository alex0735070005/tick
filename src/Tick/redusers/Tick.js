import {
  Record,
} from 'immutable';
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


const InitState = Record({
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
);

const initState = new InitState();

const tick = (state = initState, action) => {

  const {
    type,
  } = action;

  switch (type) {

    case TICK_SET_PROJECTS:
      return state.withMutations((ctx) => {
        const {
          projects,
        } = action;
        ctx.set('projects', projects);
      });

    case TICK_SET_TASKS:
      return state.withMutations((ctx) => {
        const {
          tasks,
        } = action;
        ctx.set('tasks', tasks);
      });

    case TICK_SET_TASK:
      return state.withMutations((ctx) => {
        const {
          task,
        } = action;
        ctx.set('task', task);
      });

    case TICK_SET_IS_AUTH:
      return state.withMutations((ctx) => {
        const {
          isAuth,
        } = action;
        ctx.set('isAuth', isAuth);
      });

    case TICK_SET_PROJECT:
      return state.withMutations((ctx) => {
        const {
          selectedProject,
        } = action;
        ctx.set('selectedProject', selectedProject);
      });

    case TICK_SET_SELECTED_TASK:
      return state.withMutations((ctx) => {
        const {
          selectedTask,
        } = action;
        ctx.set('selectedTask', selectedTask);
      });

    case TICK_SET_TIME:
      return state.withMutations((ctx) => {
        const {
          timeValue,
        } = action;
        ctx.set('timeValue', timeValue);
      });

    case TICK_SET_DATE:
      return state.withMutations((ctx) => {
        const {
          dateValue,
        } = action;
        ctx.set('dateValue', dateValue);
      });

    case TICK_SET_MESSAGE:
      return state.withMutations((ctx) => {
        const {
          messageValue,
        } = action;
        ctx.set('messageValue', messageValue);
      });

    case TICK_SET_MESSAGES:
      return state.withMutations((ctx) => {
        const {
          messages,
        } = action;
        ctx.set('messages', messages);
      });

    case TICK_SET_IS_FETCHING:
      return state.withMutations((ctx) => {
        const {
          isFetching,
        } = action;
        ctx.set('isFetching', isFetching);
      });

    case TICK_CLEAR:
      return state.withMutations((ctx) => {
        ctx.set('messages', []);
        ctx.set('task', {});
        ctx.set('timeValue', '');
        ctx.set('dateValue', '');
        ctx.set('messageValue', '');
        ctx.set('selectedProject', {
          label: TICK_PROJECT_PLACEHOLDER,
        });
        ctx.set('selectedTask', {
          label: TICK_TASK_PLACEHOLDER,
        });
      });

    default: {
      return state;
    }
  }
};

export default tick;
