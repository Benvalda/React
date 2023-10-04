import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Comment from '../component/Comment';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
    const {slug} = useParams()
    let id = slug.split("-")[1];

    const [cSelected, setCSelected] = useState([]);

    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
          cSelected.push(selected);
        } else {
          cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    }

    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (event) => { const { name, value } = event.target; if (name === "username") { setUsername(value); } else if (name === "message") { setMessage(value); } };

    const handleSubmit = (event) => { 
        event.preventDefault(); 
        localStorage.setItem("comments-"+id,JSON.stringify({"username" : username, "message" : message}))
    }

    let comments = JSON.parse(localStorage.getItem("comments-"+id));
    console.log(comments)

    return (
        <div className='m-5'>
            <Button
            className='mb-3'
            color="primary"
            outline
            onClick={() => onCheckboxBtnClick(1)}
            active={cSelected.includes(1)}
            >
            Completed ?
            </Button>
            {
                comments ? (
                    <>
                    <Comment username={comments.username} message={comments.message} />
                    </>
                ) : ("")
            }
            <Form method='post' onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input id='username' name='username' placeholder='Your username' type='text' value={username} onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message</Label>
                    <Input id='message' name='message' placeholder='Your message' type='textarea' value={message} onChange={handleChange}/>
                </FormGroup>
                <Button type='submit' color='primary'>Submit</Button>
            </Form>
        </div>
    );
};

export default TaskDetails;