import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    localStorage.clear();
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState(false);

    const userData = {};

    function onHandleChange(e) {
        setErrMsg(false);
        userData[e.target.name] = e.target.value
    }


    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/auth/signin', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(userData)
            });
            console.log(response);
            if (response && response.status === 200) {
                const data = await response.json();
                localStorage.setItem('userId', data.id);
                localStorage.setItem('username', data.username);
                localStorage.setItem('user_access_token', data.accessToken);
                navigate('/task');
            } else
                setErrMsg(true);

        } catch (error) {
            setErrMsg(true);
        }
    }

    return (
        <div >
            <div className="login-form" style={{ marginTop: '50px' }}>
                <h1 style={{ textAlign: 'center' }}> <i>User Signin </i></h1>
                <TextField label="Username" variant='outlined' type='text' name='username' onChange={onHandleChange} />
                <TextField label="password" variant='outlined' type='password' name='password' onChange={onHandleChange} />
                <Button variant="contained" color="primary" onClick={handleSubmit}>Login</Button>
                {errMsg && <p style={{ color: 'red' }}>Please provide correct credentials</p>}
            </div>
        </div>
    )
};
export default HomePage;