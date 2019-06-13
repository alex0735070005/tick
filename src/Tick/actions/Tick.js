import TickService from '../services/Tick';
import {
  isErrorsTickEntries,
} from '../services/TickValidate';
import {
  TICK_SET_IS_AUTH,
  TICK_SET_PROJECT,
  TICK_SET_SELECTED_TASK,
  TICK_SET_PROJECTS,
  TICK_SET_TASKS,
  TICK_SET_TIME,
  TICK_SET_DATE,
  TICK_SET_MESSAGE,
  TICK_CLEAR,
  TICK_SET_TASK,
  TICK_SET_MESSAGES,
  DELAY_HIDE_MESSAGES,
  TICK_UNAUTHORIZED_TEXT,
  TICK_UNAUTHORIZED_STATUS,
  TICK_UNPROCESSABLE_STATUS,
  TICK_UNPROCESSABLE_TEXT,
  TICK_BAD_REQUEST_TEXT,
  TICK_SET_IS_FETCHING,
} from '../constants/Tick';

export const setMessagesAction = messages => ({type: TICK_SET_MESSAGES, messages});
export const setIsFetchingAction = isFetching => ({type: TICK_SET_IS_FETCHING, isFetching});
export const setProjectsAction = projects => ({type: TICK_SET_PROJECTS, projects});
export const setProjectAction = selectedProject => ({type: TICK_SET_PROJECT, selectedProject});
export const setIsAuthAction = isAuth => ({type: TICK_SET_IS_AUTH, isAuth});
export const setClearAction = () => ({type: TICK_CLEAR});
export const setTasksAction = tasks => ({type: TICK_SET_TASKS, tasks});
export const setTaskAction = task => ({type: TICK_SET_TASK, task});
export const setSelectedTaskAction = selectedTask => ({type: TICK_SET_SELECTED_TASK, selectedTask});
export const setTimeAction = timeValue => ({type: TICK_SET_TIME, timeValue});
export const setDateAction = dateValue => ({type: TICK_SET_DATE, dateValue});
export const setMessageAction = messageValue => ({type: TICK_SET_MESSAGE, messageValue});

/**
 * Set track message for task
 * @param {array} messages
 * @returns {Function}
 */
export const displayMessages = messages => dispatch => {
  dispatch(setMessagesAction(messages));

  setTimeout(() => {
    dispatch(setMessagesAction([]));
  }, DELAY_HIDE_MESSAGES);
};

const setIsFetching = (isFetching, dispatch) => {
  dispatch(setIsFetchingAction(isFetching));
}

const setClients = data => {
  const tickClients = {};
  data.forEach(client => {
    tickClients[client.id] = client;
  });
  localStorage.setItem('tickClients', JSON.stringify(tickClients));
  return tickClients;
} 

export const setProjects = (projects, dispatch)=> {
  const clients = JSON.parse(localStorage.getItem('tickClients'));
  const projectOptions = projects.reduce((data, project) => {

    let lastProject = data.length ? data[data.length-1] : null;
   
    if(!lastProject || lastProject.client_id !== project.client_id) {
      data.push({
        label:clients[project.client_id]['name'],
        client_id:project.client_id,
        value:'',
      });
    }
    
    return data.concat({
      label:project.name,
      client_id:project.client_id,
      value: project.id,
    });

  }, []);

  /**
   * Set projects for redux state
   */
  dispatch(setProjectsAction(projectOptions));
}

/**
 * Tick auth handler
 * @param username
 * @param password
 * @returns {Function}
 */
export const tickAuth = (username, password) => dispatch => {
  setIsFetching(true, dispatch);
  TickService.auth(username, password).then((data) => {
    if(!Array.isArray(data)) {
      throw new Error(TICK_BAD_REQUEST_TEXT);
    }
    const dataAuth = data && data[0] ? data[0] : null;
    /**
     * Save user auth token, subscription_id and username for localStorage
     */
    localStorage.setItem('tickAuth', JSON.stringify({
      ...dataAuth,
      username,
    }));
    /**tickAuth
     * Set is auth params for check isLogged user
     */
    dispatch(setIsAuthAction(true));
  })
  .then(() => {

    /**
     * Get users
     */
    return TickService.getUsers();
  })
  .then((users) => {

    /**
     * Save user data for localStorage
     */
    const currentUser = users.find(user => user.email === username);
    localStorage.setItem('tickUser', JSON.stringify(currentUser));
  })
  .then(() => {
    /**
     * Get user clients and projects
     */
    return Promise.all([
      TickService.getClients(),
      TickService.getProjects(),
    ]);

  }).then(([clients, projects]) => {

    setClients(clients);
    setProjects(projects, dispatch);
    setIsFetching(false, dispatch);

  }).catch((error) => {
    if (error.code === TICK_UNAUTHORIZED_STATUS) {
      displayMessages([{
        message: TICK_UNAUTHORIZED_TEXT,
      }])(dispatch);
    }
    setIsFetching(false, dispatch);
  });
};

/**
 * Check exists user in localStorage
 * @returns {Function}
 */
export const tickIsAuth = () => (dispatch) => {
  const isAuth = !!localStorage.getItem('tickAuth');

  dispatch(setIsAuthAction(isAuth));

  if (isAuth) {
    TickService.getProjects()
    .then((projects) => {
      setProjects(projects, dispatch)
    });
  }
};

/**
 * Logout user from tick
 * clear localStorage
 * @returns {Function}
 */
export const tickLogout = () => (dispatch) => {
  const isTickAuth = !!localStorage.getItem('tickAuth');
  const isTickUser = !!localStorage.getItem('tickUser');
  if(isTickAuth || isTickUser) {
    localStorage.removeItem('tickAuth');
    localStorage.removeItem('tickUser');
    dispatch(setIsAuthAction(false));
    dispatch(setClearAction());
    dispatch(setProjectsAction([]));
    dispatch(setTasksAction([]));
  }
};

/**
 * Set selected project and get project tasks
 * @param {object} selectedProject
 * @returns {Function}
 */
export const changeProject = selectedProject => dispatch => {
  setIsFetching(true, dispatch);
  TickService.getTasks(selectedProject.value).then(tasks => {
    dispatch(setProjectAction(selectedProject));
    dispatch(setTasksAction(tasks));
    setIsFetching(false, dispatch);
  }).catch((error) => {
    if (error.response.status === TICK_UNAUTHORIZED_STATUS) {
      displayMessages([{
        message: TICK_UNAUTHORIZED_TEXT,
      }])(dispatch);
    }
    setIsFetching(false, dispatch);
  });
};

/**
 * Set selected task
 * @param {object} selectedTask
 * @returns {Function}
 */
export const changeTask = selectedTask => dispatch => {
  dispatch(setSelectedTaskAction(selectedTask));

};

/**
 * Set track time for task
 * @param {string} value
 * @returns {Function}
 */
export const changeTickTime = (value) => (dispatch) => {
  dispatch(setTimeAction(value));
};

/**
 * Set track date for task
 * @param {object} date
 * @returns {Function}
 */
export const changeTickDate = date => dispatch => {
  // if user not input full date set date empty string
  const dateValue = date ? date.format('Y-M-D') : '';
  dispatch(setDateAction(dateValue));
};

/**
 * Hide task status and show tracker
 * @returns {Function}
 */
export const tickReturnTracker = () => (dispatch) => {
  dispatch(setClearAction());
};

/**
 * Set track message for task
 * @param {string} messageValue
 * @returns {Function}
 */
export const changeTickMessage = messageValue =>(dispatch) => {
  dispatch(setMessageAction(messageValue));
};

/**
 * Send track time
 * @param {object} entry
 * @returns {Function}
 */
export const createEntry = (entry) => (dispatch) => {
  const errors = isErrorsTickEntries(entry);
  // get tick user tick data from localStorage
  const user = JSON.parse(localStorage.getItem('tickUser'));

  if (!errors.length) {
    setIsFetching(true, dispatch);
    // set data for create entry method
    const entryQuery = {
      date: entry.dateValue,
      hours: entry.timeValue,
      notes: entry.messageValue,
      taskId: entry.selectedTask.value,
      userId: user.id,
    };

    TickService.createEntry(entryQuery)
    .then((data) => {
      return TickService.getTask(data.task_id);
    })
    .then((task) => {
      const {
        id,
        project_id,
        project,
        budget,
        name,
        total_hours,
      } = task;

      dispatch(setTaskAction({
        id,
        project_id,
        budget,
        name,
        total_hours,
        timeValue: entry.timeValue,
        project_name: project.name,
      }));

      setIsFetching(false, dispatch);
    }).catch((error) => {
      let errorMessages = [];

      switch (error.code) {
        case TICK_UNAUTHORIZED_STATUS :
          errorMessages.push(
            {
              message:TICK_UNAUTHORIZED_TEXT,
            }
          );
          break;
        case TICK_UNPROCESSABLE_STATUS:
          errorMessages.push(
            {
              message:TICK_UNPROCESSABLE_TEXT,
            }
          );
          break;

        default:
          errorMessages.push(
            {
              message:TICK_BAD_REQUEST_TEXT,
            }
          );
      }

      displayMessages(errorMessages)(dispatch);
      setIsFetching(false, dispatch);
    });

  } else {
    displayMessages(errors)(dispatch);
  }
};
