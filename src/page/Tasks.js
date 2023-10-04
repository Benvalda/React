import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import Task from '../component/Task';

const Tasks = () => {

    // const [tasks,setTasks] = useState();
    const [isTasks, setIsTasks] = useState(true)

    useEffect(() => {
        axios.get('https://dummyjson.com/todos')
        .then(res => {
            // console.log(res.data.todos)
            // setTasks(res)
            localStorage.setItem("todos",JSON.stringify(res.data.todos))
            setIsTasks(false);
        })
        .then(console.log());
    }, [])

    const [todo, setTodo] = useState("");

    const handleChange = (event) => { const { name, value } = event.target; if (name === "addTodo") { setTodo(value); }};

    const handleSubmit = (event) => { 
        event.preventDefault(); 
        let LS = JSON.parse(localStorage.getItem("todos"))
        console.log(LS)
        fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: {todo},
            completed: false,
            userId: 1,
        })
        })
        .then(res => res.json())
        .then(console.log);
        console.log(todo);
        LS = LS.push(todo);
        console.log(LS)
        localStorage.setItem("todos",JSON.stringify(LS))
    }

    return (
        <>
            {isTasks ? (
                  <Spinner
                  color="primary"
                  type="grow"
                >
                  Loading...
                </Spinner>
            ) : (
                <>
                    <Form className='m-5' onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="addTodo">Add a ToDo</Label>
                            <Input id='addTodo' name='addTodo' type='text' value={todo} onChange={handleChange}></Input>
                        </FormGroup>
                        <Button color='primary'>Add</Button>
                    </Form>
                    <div className='grille'>
                        {
                            JSON.parse(localStorage.getItem("todos")).map((task) => {
                                // console.log(task)
                                return <Task todo={task.todo} completed={task.completed} lien={task.id} />
                            })
                        }

                    </div>
                </>
            )
            }
        </>
    );
};

export default Tasks;