import React from 'react';

export const tasks = [];

export const TasksContext = React.createContext({
    tasks: tasks,
    addTask: () => {},
    removeTask: () => {}
});