import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

const Formular = ({onSub}) => {
    return (
        <Form method='post' onSubmit={onSub}>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input id='username' name='username' placeholder='Your username' type='text'/>
            </FormGroup>
            <FormGroup>
                <Label for="message">Message</Label>
                <Input id='message' name='message' placeholder='Your message' type='textarea'/>
            </FormGroup>
            <Button type='submit' color='primary'>Submit</Button>
        </Form>
    );
};

export default Formular;