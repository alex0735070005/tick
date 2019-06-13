import Tick, { initialState } from '../reducers/Tick';
import { projects, project, tasks, task, messageValue, messages, clearData, dateValue, timeValue, } from '../tickMock';

import {
    setProjectsAction,
    setProjectAction,
    setTasksAction,
    setTaskAction,
    setDateAction,
    setTimeAction,
    setClearAction,
    setIsFetchingAction,
    setMessagesAction,
    setMessageAction,
} from '../actions/Tick';

describe('tick', () => {

    test('should initial state', () => {
        expect(Tick(undefined, {})).toEqual(initialState);
    });

    test('should set projects action', () => {
        expect(
            Tick(initialState, setProjectsAction(projects))
        ).toEqual({
            ...initialState,
            projects,
        });
    });

    test('should set project action', () => {
        expect(
            Tick(initialState, setProjectAction(project))
        ).toEqual({
            ...initialState,
            selectedProject: project,
        });
    });

    test('should set tasks action', () => {
        expect(
            Tick(initialState, setTasksAction(tasks))
        ).toEqual({
            ...initialState,
            tasks,
        });
    });

    test('should set task action', () => {
        expect(
            Tick(initialState, setTaskAction(task))
        ).toEqual({
            ...initialState,
            task,
        });
    });

    test('should set message action', () => {
        expect(
            Tick(initialState, setMessageAction(messageValue))
        ).toEqual({
            ...initialState,
            messageValue,
        });
    });

    test('should set messages action', () => {
        expect(
            Tick(initialState, setMessagesAction(messages))
        ).toEqual({
            ...initialState,
            messages,
        });
    });

    test('should set isFetching action', () => {
        expect(
            Tick(initialState, setIsFetchingAction(true))
        ).toEqual({
            ...initialState,
            isFetching: true,
        });
    });

    test('should set clear action', () => {
        expect(
            Tick(initialState, setClearAction(true))
        ).toEqual({
            ...initialState,
            ...clearData,
        });
    });

    test('should set date action', () => {
        expect(
            Tick(initialState, setDateAction(dateValue))
        ).toEqual({
            ...initialState,
            dateValue,
        });
    });

    test('should set time action', () => {
        expect(
            Tick(initialState, setTimeAction(timeValue))
        ).toEqual({
            ...initialState,
            timeValue,
        });
    });

});
