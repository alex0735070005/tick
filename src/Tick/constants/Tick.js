export const DELAY_HIDE_MESSAGES = 5000;

/**
 * Tick Api constants
 */
export const TICK_API_CLIENTS_URL = 'tickspot/clients';
export const TICK_API_PROJECTS_URL = 'tickspot/projects';
export const TICK_API_USERS_URL = 'tickspot/users';
export const TICK_API_TASKS_URL = 'tickspot/tasks';
export const TICK_API_ROLES_URL = 'tickspot/roles';
export const TICK_API_ENTRIES_URL = 'tickspot/entries';

/**
 * Action redux update constants
 */
export const TICK_SET_PROJECTS = 'TICK_SET_PROJECTS';
export const TICK_SET_TASKS = 'TICK_SET_TASKS';
export const TICK_SET_IS_AUTH = 'TICK_SET_IS_AUTH';
export const TICK_SET_PROJECT = 'TICK_SET_PROJECT';
export const TICK_SET_TASK = 'TICK_SET_TASK';
export const TICK_SET_SELECTED_TASK = 'TICK_SET_SELECTED_TASK';
export const TICK_SET_TIME = 'TICK_SET_TIME';
export const TICK_SET_DATE = 'TICK_SET_DATE';
export const TICK_SET_MESSAGE = 'TICK_SET_MESSAGE';
export const TICK_SET_MESSAGES = 'TICK_SET_MESSAGES';
export const TICK_CLEAR = 'TICK_CLEAR';
export const TICK_SET_IS_FETCHING = 'TICK_SET_IS_FETCHING'


/**
 * Image icon constants
 */
export const TICK_CLOCK_ICON = '/assets/images/clock.png';
export const TICK_CLOCK_ALT = 'Clock';


/**
 * Labels name text
 */
export const TICK_AUTH_FORM_NAME_TEXT = 'Tick login';
export const TICK_EMAIL_TEXT = 'Email address:';
export const TICK_PASSWORD_TEXT = 'Password:';
export const TICK_BUTTON_AUTH_TEXT = 'Sign in';
export const TICK_BUTTON_LOGOUT_TEXT = 'Logout';
export const TICK_BUTTON_ENTER_TEXT = 'Enter time';
export const TICK_STATUS_TEXT = 'Task status';
export const TICK_RETURN_TEXT = 'Return tracker';
export const TICK_TRACK_TEXT = 'Track';
export const TICK_NAME_TEXT = 'Name';
export const TICK_TOTAL_TEXT = 'Total';
export const TICK_BUDGET_TEXT = 'Budget';
export const TICK_DONE_TEXT = 'Done';
export const TICK_ERROR_PROJECT_TEXT = 'Project is required';
export const TICK_ERROR_TASK_TEXT = 'Task is required';
export const TICK_ERROR_DATE_TEXT = 'Date is required';
export const TICK_ERROR_TIME_TEXT = 'hours is required';
export const TICK_ERROR_EMAIL_TEXT = 'Not valid email';
export const TICK_TIME_PLACEHOLDER = '24:00';
export const TICK_DATE_PLACEHOLDER = 'mm/dd/yyyy';
export const TICK_PROJECT_PLACEHOLDER = 'Select project';
export const TICK_TASK_PLACEHOLDER = 'Select task';
export const TICK_HOURS_SYMBOL = 'hours';
export const TICK_PERCENT_SYMBOL = '%';

/**
 * Query statuses and text
 */
export const TICK_UNAUTHORIZED_STATUS = 401;
export const TICK_UNPROCESSABLE_STATUS = 422;
export const TICK_UNAUTHORIZED_TEXT = 'Not exists password or email';
export const TICK_UNPROCESSABLE_TEXT = 'Unprocessable Entity';
export const TICK_BAD_REQUEST_TEXT = 'Server not answered';

export const VALIDATION = {
    /*eslint max-len: 0, no-useless-escape: 0*/
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
    TOKEN: /^\w{8}\-\w{4}\-\w{4}\-\w{4}\-\w{12}$/,
    FILE_STORAGE_ITEM_NAME: /([\/:*?"<>|'%$#@!()+=;`])|(^[\s]+$)/,
    TICK_INPUT_DATE: /^(|[0-9]|1[0-2]|0[1-9])(|\/|\/((|[0-9]|[01][1-9]|2[0-9]|3[01]))(|\/|\/(2|20|20[0-9]{0,2})))$/,
    TICK_INPUT_FULL_DATE: /^(1[0-2]|[1-9]|0[1-9])\/((0[1-9]|[1-2][0-9]|3[01]|[1-9])\/)20[0-9]{2}$/,
    TICK_INPUT_TIME: /^(|([0-9]|[10][0-9]|2[0-3])(|:(|[0-9]|[0-5][0-9]|6[0]{0,2}))|2[0-4](|:[0]{0,2}))$/,
    TICK_INPUT_IS_ERROR_TIME: /^(|:|[0-9]+:|:[0-9]+|0{1,4}|0{1,2}:0{1,2})$/,
};

export const HEADER_CONSTANTS = {
    LOCAL_TIME: 'local-time',
};

export const API_PREFIX = '/api/v1/';
