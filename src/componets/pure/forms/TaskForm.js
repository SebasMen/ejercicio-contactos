import React, {useRef} from 'react';
import PropTypes from 'prop-types';

import { LEVELS } from '../../../models/levels.enum';
import { TaskClass } from '../../../models/task.class';

const TaskForm = ({add}) => {
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new TaskClass(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  return (
    <form 
      onSubmit={addTask} 
      className="d-flex justify-content-center align-items-center mb-4">
      <div className='form-outline flex-fill'>
        <input 
          required 
          autoFocus 
          type="text" 
          ref={nameRef} 
          id="inputName" 
          placeholder='Task name'
          className="form-control" 
        />
        <input 
          required 
          type="text" 
          ref={descriptionRef} 
          id="inputDescription" 
          placeholder='Task description'
          className="form-control mt-2" 
        />
        <div className='form-group mt-2'>
          <label 
            htmlFor="selectLevel" 
            className='sr-only me-2'
          >
            Priority
          </label>
          <select 
            ref={levelRef} 
            id="selectLevel"
            defaultValue={LEVELS.NORMAL} 
          >
            <option value={LEVELS.NORMAL}>
              Normal
            </option>
            <option value={LEVELS.URGENT}>
              Urgent
            </option>
            <option value={LEVELS.BLOCKING}>
              Blocking
            </option>
          </select>
        </div>

        <button 
          type="submit" 
          className='btn btn-success btn-lg mt-3 float-end'
        >
          Add
        </button>
      </div>      
    </form>
  )
}

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired
}

export default TaskForm