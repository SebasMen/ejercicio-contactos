import React from 'react'
import { LEVELS } from '../../models/levels.enum';
import { TaskClass } from '../../models/task.class'
import Task from '../pure/Task';

const TaskList = props => {
  const defaultTask = new TaskClass('Example', 'Tarea de ejemplo', false, LEVELS.NORMAL);  

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