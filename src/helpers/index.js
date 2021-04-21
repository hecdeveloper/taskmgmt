import {collatedTasks} from '../constants';
//devuelve el primer key y tarea que encuentre
export const collatedTaskExist = selectedProject =>
    collatedTaskExist.find(task => task.key === selectedProject);
    