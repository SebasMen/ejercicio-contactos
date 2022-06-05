import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';

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
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   console.log("Task state has been modified");
  //   setLoading(false);

  //   return () => {
  //     console.log("TaskList component is going to unmount...");
  //   }
  // }, [tasks])
  
  function completeTask(task) {
    console.log('complete this task:', task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].completed = !tempTask[index].completed;
    setTasks(tempTask);
  }

  function removeTask(task) {
    console.log('delete this task:', task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask);
  }

  function addTask(task) {
    console.log('Add this task:', task);
    const tempTask = [...tasks];
    tempTask.push(task);
    setTasks(tempTask);
  }

  return (
    <>
      <div className='col-12'>
        <div className='card mb-3'>
          <div className='card-header text-center p-3'>
            <h5>Your Task</h5>
          </div>
          <div 
            className='card-body' 
            data-mdb-perfect-scrollbar='true' 
            style={{position: 'relative', minHeight: '150px'}}
          >
            <table>
              <thead>
                <tr className='text-center'>
                  <th scope='col'>Title</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Priority</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  tasks.map((task, index) => (
                    <Task 
                      key={index} 
                      task={task} 
                      complete={completeTask}
                      remove={removeTask}>
                    </Task>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>     
        <TaskForm add={addTask} />
      </div>
    </>
  )
}

export default TaskList