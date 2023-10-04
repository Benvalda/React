import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Toast, ToastBody, ToastHeader } from 'reactstrap';

const Task = ({todo, completed, lien}) => {
    return (
        <div className="p-3 m-auto rounded">
        <Toast>
          <ToastHeader>
            {todo} {" "}
            <>
                {completed ? (
                    <Badge color="success">Done</Badge>
                ) : (
                    <Badge color="danger">Not Done</Badge>
                )}
            </>
          </ToastHeader>
          <ToastBody>
            <Link to={"task-"+lien}>
                <Button color="primary">Details</Button>
            </Link>
          </ToastBody>
        </Toast>
      </div>
    );
};

export default Task;