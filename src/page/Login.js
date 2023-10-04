// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const history = useHistory();
//     const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//     const response = await
//     axios.post('https://dummyjson.com/auth/login', {
//     username,
//     password
//     });
//     if (response.data.token) {
//     history.push('/blog');
//     }
//     } catch (error) {
//     console.error(error);
//     }
//     };
//     return (
//     <form onSubmit={handleSubmit}>
//     <input type="text" value={username} onChange={(e) =>
//     setUsername(e.target.value)} placeholder="Username" required />
//     <input type="password" value={password} onChange={(e) =>
//     setPassword(e.target.value)} placeholder="Password" required />
//     <button type="submit">Login</button>
//     </form>
//     );
// };

// export default Login;