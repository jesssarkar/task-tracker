import {useState} from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "text": "test",
            "other": "no-show",
            "day": "monday",
            "reminder": true
          },
          {
            "text": "Test4",
            "day": "Wednesday",
            "reminder": false,
            "id": 3
          },
          {
            "text": "Task6",
            "day": "Thursday",
            "reminder": true,
            "id": 4
          }
    ]
    )

  return (
    <>
        {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks