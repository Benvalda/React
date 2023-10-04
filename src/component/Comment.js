import React from 'react';
import { CloseButton, Toast, ToastBody, ToastHeader } from 'reactstrap';

const Comment = ({username, message}) => {
    return (
        <div className="p-3 my-2 rounded">
            <Toast>
                <ToastHeader>
                    {username} 
                    <CloseButton />
                </ToastHeader>
                <ToastBody>
                    {message}
                </ToastBody>
            </Toast>
        </div>
    );
};

export default Comment;