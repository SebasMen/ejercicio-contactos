import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { TaskClass } from '../../models/task.class'

import "../../styles/task.scss";
import { LEVELS } from '../../models/levels.enum';

const Task = ({ task, complete, remove }) => {

  useEffect(() => {
    // console.log("Created task");
  
    return () => {
      // console.log(`Task: ${task.name} is going to unmount`);
    }
  }, [task]);
  
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-primary'>{task.level}</span>
          </h6>
        )
      
      case LEVELS.URGENT:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-warning'>{task.level}</span>
          </h6>
        )
      
      case LEVELS.BLOCKING:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-danger'>{task.level}</span>
          </h6>
        )
    
      default:
        break;
    }
  }

  function taskIconCompleted() {
    if(task.completed) {
      return (
        <i 
          onClick={() => complete(task)} 
          className='bi-toggle-on task-action' 
          style={{color: 'green'}}>
        </i> 
      )
    } else {
      return (
        <i 
          onClick={() => complete(task)} 
          className='bi-toggle-off task-action' 
          style={{color: 'grey'}}>
        </i>
      )
    }
  }

  return (
    <tr className='fw-normal'>
      <th>
        <span>{task.name}</span>
      </th>
      <td>
        <span className='align-middle'>{task.description}</span>
      </td>
      <td>
        { taskLevelBadge() }
      </td>
      <td className='align-middle'>
        { taskIconCompleted() }
        <i 
          className='bi-trash task-action' 
          style={{color: 'tomato'}}
          onClick={() => remove(task)}>
        </i>
      </td>
    </tr>
  )
}

Task.propTypes = {
    task: PropTypes.instanceOf(TaskClass).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default Task;