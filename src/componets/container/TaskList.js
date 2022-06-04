import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { TaskClass } from '../../models/task.class';
import Task from '../pure/Task';

import '../../styles/task.scss';

const TaskList = props => {

  const defaultTask = new TaskClass('Example', 'Tarea de ejemplo', false, LEVELS.NORMAL);
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);

    return () => {
      console.log("TaskList component is going to unmount...");
    }
  }, [tasks])
  

  // const changeState = () => {
  //   console.log('TODO: cambiar esado de una tarea');
  // }

  return (
    <>
      <div>
        <h1>Your Tasks</h1>        
      </div>

      <Task task={defaultTask}></Task>
    </>
  )
}

export default TaskList