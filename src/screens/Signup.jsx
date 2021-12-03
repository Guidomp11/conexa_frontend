import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './screens.css';

import Form from '../components/form/Form';

import { useDispatch, useSelector } from 'react-redux';
import { signUp, cleanErrors } from '../redux/actions/authActions';


const Signup = () => {

    const [forminfo, setFormInfo] = useState({
        email: '',
        password: '',
        username: ''
    });

    const { email, username, password } = forminfo;

    const dispatch = useDispatch();
    const { errors } = useSelector((state) => state.auth);

    const history = useHistory();
    const [localErr, setErrors] = useState([]);

    useEffect(() => {    
        if(errors){
            setErrors([...localErr, errors]);
        }
    }, [errors])

    const onSubmit = async (e) => {
        e.preventDefault();

        if(username.trim() === '' || email.trim() === '' || password.trim() === ''){
            setErrors(['Verifique los campos del formulario']);
        }
        
        dispatch(await signUp(username, email, password));
        
        return;
    }

    const onRedirect = () => {
        dispatch(cleanErrors());
        history.push('/signin');
    }

    const onChange = (e) => {
        setFormInfo({
            ...forminfo,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="forms">
            <div className="form-container">
                <Form 
                    onSubmit={onSubmit}
                    title={'Registrarse'}
                    errors={localErr}
                >
                    <input 
                        name="username"
                        type="text"
                        value={username}
                        onChange={onChange} 
                    />
                    <label>username</label>

                    <input 
                        name="email"
                        type="email"
                        value={email}
                        onChange={onChange} 
                    />
                    <label>email</label>
                  

                    <input 
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChange} 
                    />
                    <label>password</label>
                </Form>
                <p className="link" onClick={onRedirect}>Ya tenes cuenta? Ingresar</p>
            </div>
        </div>
    );
}
 
export default Signup;