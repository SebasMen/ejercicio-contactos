import React, { useState, useEffect } from 'react';

import Task from '../pure/Task';
import TaskForm from '../pure/forms/TaskForm';

import { LEVELS } from '../../models/levels.enum';
import { TaskClass } from '../../models/task.class';

import '../../styles/task.scss';

const TaskList = props => {

  const defaultTask1 = new TaskClass('Example', 'Tarea de ejemplo', true, LEVELS.NORMAL);
  const defaultTask2 = new TaskClass('Example2', 'Lavar la moto', false, LEVELS.URGENT);
  const defaultTask3 = new TaskClass('Example3', 'Hacer mercado', false, LEVELS.BLOCKING);

  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("Task state has been modified");
    setLoading(false);

    return () => {
      // console.log("TaskList component is going to unmount...");
    }
  }, [tasks])
  

  // const changeState = () => {
  //   console.log('TODO: cambiar esado de una tarea');
  // }

  return (
    <>
      <div className='col-12'>
        <div className='card'>
          <div className='card-header p-3'>
            <h5>Your Task</h5>
          </div>
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '480px'}}>
            <table>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Priority</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  tasks.map((task, index) => (
                    <Task task={task} key={index}></Task>
                  ))
                }
              </tbody>
            </table>
          </div>
          <TaskForm />
        </div>     
      </div>
    </>
  )
}

export default TaskList