//  revisando los lifecycle de los componentes con una funcion regular 

 import {useState, useEffect} from 'react';
 import {moment} from 'moment';
 import {firebase} from '../firebase';
 import {collatedTaskExist} from '../helpers';


export const useTasks = selectedProject => {
    const [taks, setTasks ] = useState([]);
    const [archivedTasks, setArchivedTasks ] = useState([]);
    //users, setUsers funcion anonima cada que hay cambios se usa usseefefct
    //were es un metodo de firebase para buscar dentro de nuestras colecciones en la base de datos

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('tasks')
        .where('userId', '==', 'USR-1618786-NtTMtr-613343');
        //busca y trae las tareas dentro de la db 

        unsubscribe = 
        selectedProject && !collatedTaskExist(selectedProject) ?
        (unsubscribe = unsubscribe.where('projectId', '==', selectedProject ))
        : selectedProject == 'TODAY'
        ?(unsubscribe = unsubscribe.where(
            'date', 
            '==', 
            moment().format('DD/MM/YYYYY')
            ))
            : selectedProject === 'INBOX' || selectedProject == 0
            ?(unsubscribe = unsubscribe.where('date', '==', ''))
            : unsubscribe;

            unsubscribe = unsubscribe.onSnapshot(snapshot => {
                const newTasks = snapshot.docs.map(task({
                    id: task.id,
                    ...task.data(),
                }));
                setTasks(
                    selectedProject === 'NEXT_7'
                    ? newTasks.filter(
                        task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                        task.archived !==true
                    )
                    : newTasks.filter(task => task.archived !==true )
                );
                setArchivedTasks(newTasks.filter(task => task.archived !== false));
            });
            return () => unsubscribe();
    }, [selectedProject]);
    return {tasks, archivedTasks};
};

const selectedProject = 1;
const {taks, archivedTasks} = useTasks(selectedProject);

