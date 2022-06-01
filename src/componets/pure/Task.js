import React from 'react'
import PropTypes from 'prop-types'
import { TaskClass } from '../../models/task.class'

const Task = ({ task }) => {
  return (
    <div>
        <h2>Nombre: { task.name }</h2>
        <h3>Descripción: { task.description }</h3>
        <h4>Nivel: { task.level }</h4>
        <h5>
            La tarea esta: { task.completed ? 'COMPLETED' : 'PENDING' }
        </h5>
    </div>
  )
}

Task.propTypes = {
    task: PropTypes.instanceOf(TaskClass)
}

export default Task;