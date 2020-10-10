import React from 'react';
import '../styles/SignIn.css';
import {signInWithGoogle} from '../firebase/farebase.utils';

function SignIn() {
    return (
        <div className="sign-button">
                <button onClick={signInWithGoogle}><i className="fas fa-key fa-lg"></i></button>
        </div>
    )
}

export default SignIn;