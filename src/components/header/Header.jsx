import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logoutUser } from '../../redux/actions/authActions';
import './header.css';

const Header = () => {
    const history = useHistory();
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logout = () => dispatch(logoutUser())

    return (
        <header>
            <h3>Hola! {user && user.username}</h3>
            <h1 hidden>Conexa App</h1>
            <div className="actions">
                <Link className="item" to="/">Inicio</Link>
                <Link className="item" to="/photos">Fotos</Link>
                <Link className="item" to="/posts">Posts</Link>
                <button className="item" onClick={() => logout()} >Salir</button>
            </div>
        </header>
    );
}
 
export default Header;