import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './screens.css';

import Form from '../components/form/Form';

import { useDispatch, useSelector } from 'react-redux';
import { signIn, cleanErrors } from '../redux/actions/authActions';


const Signin = () => {

    const [forminfo, setFormInfo] = useState({
        email: '',
        password: ''
    });

    const { email, password } = forminfo;

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

        if(email.trim() === '' || password.trim() === ''){
            setErrors(['Verifique los campos del formulario']);
        }
        
        dispatch(await signIn(email, password));
        
        return;
    }

    const onRedirect = () => {
        dispatch(cleanErrors());
        history.push('/signup');
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
                    title={'Ingresar'}
                    errors={localErr}
                >
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
                <p className="link" onClick={onRedirect}>No tenes cuenta? Registrate</p>
            </div>
        </div>
    );
}
 
export default Signin;