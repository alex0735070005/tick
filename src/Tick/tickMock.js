import { TICK_PROJECT_PLACEHOLDER, TICK_TASK_PLACEHOLDER } from "./constants/Tick";

export const projects = [
  {
    label: 'devServer',
    client_id: 363162,
    value: ''
  },
  {
    label: 'devServer',
    client_id: 363162,
    value: 1757603
  }
]

export const project = {
  label: 'devServer',
  client_id: 363162,
  value: 1757603
}

export const tasks = [
  {
    id: 12411493,
    name: 'create structure',
    budget: 100,
    position: 1,
    project_id: 1757603,
    date_closed: null,
    billable: true,
    url: 'http://secure.tickspot.com/113000/api/v2/tasks/12411493.json',
    created_at: '2019-01-10T05:11:21.000-05:00',
    updated_at: '2019-01-21T04:45:25.000-05:00'
  },
  {
    id: 12411494,
    name: 'create disign',
    budget: 50,
    position: 2,
    project_id: 1757603,
    date_closed: null,
    billable: true,
    url: 'http://secure.tickspot.com/113000/api/v2/tasks/12411494.json',
    created_at: '2019-01-10T05:11:22.000-05:00',
    updated_at: '2019-06-13T05:24:49.000-04:00'
  },
  {
    id: 12438703,
    name: 'Web development',
    budget: 1000,
    position: 3,
    project_id: 1757603,
    date_closed: null,
    billable: true,
    url: 'http://secure.tickspot.com/113000/api/v2/tasks/12438703.json',
    created_at: '2019-01-21T04:55:15.000-05:00',
    updated_at: '2019-02-16T21:26:55.000-05:00'
  }
]

export const task = {
  id: 12411493,
  name: 'create structure',
  budget: 100,
  position: 1,
  project_id: 1757603,
  date_closed: null,
  billable: true,
  url: 'http://secure.tickspot.com/113000/api/v2/tasks/12411493.json',
  created_at: '2019-01-10T05:11:21.000-05:00',
  updated_at: '2019-01-21T04:45:25.000-05:00'
}

export const messageValue = 'message text';
export const dateValue = '1/4/2019';
export const timeValue = '24:00';


export const messages = [
  {
    field: 'project',
    message: 'Project is required'
  },
  {
    field: 'task',
    message: 'Task is required'
  },
  {
    field: 'hours',
    message: 'hours is required'
  }
]

export const clearData = {
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