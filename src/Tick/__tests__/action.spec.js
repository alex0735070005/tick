import { setProjectsAction, setProjectAction, setTaskAction, setTasksAction } from '../actions/Tick';
import { projects, project, tasks, task } from '../tickMock';
import {
    TICK_SET_PROJECT,
    TICK_SET_PROJECTS,
    TICK_SET_TASKS,
    TICK_SET_TASK
} from '../constants/Tick';


describe('Message list functionality', () => {
    test('should set projects action', () => {
        expect(setProjectsAction(projects))
            .toEqual({ type: TICK_SET_PROJECTS, projects });
    });

    test('should set project action', () => {
        expect(setProjectAction(project))
            .toEqual({ type: TICK_SET_PROJECT, selectedProject: project });
    });

    test('should set task action', () => {
        expect(setTaskAction(task))
            .toEqual({ type: TICK_SET_TASK, task });
    });

    test('should set tasks action', () => {
        expect(setTasksAction(tasks))
            .toEqual({ type: TICK_SET_TASKS, tasks });
    });

});



