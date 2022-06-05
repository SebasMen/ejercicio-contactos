import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { TaskClass } from '../../models/task.class'

import "../../styles/task.scss";
import { LEVELS } from '../../models/levels.enum';

const Task = ({ task }) => {

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
      return <i className='bi-toggle-on' style={{color: 'green'}}></i> 
    } else {
      return <i className='bi-toggle-off' style={{color: 'grey'}}></i>
    }
  }

  return (
    <tr className='fw-normal'>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td>
        <span className='align-middle'>{task.description}</span>
      </td>
      <td>
        { taskLevelBadge() }
      </td>
      <td className='align-middle'>
        { taskIconCompleted() }
        <i className='bi-trash' style={{color: 'tomato'}}></i>
      </td>
    </tr>
  )
}

Task.propTypes = {
    task: PropTypes.instanceOf(TaskClass)
}

export default Task;