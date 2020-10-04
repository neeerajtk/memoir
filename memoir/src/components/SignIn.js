import React from 'react'
import {signInWithGoogle} from '../firebase/farebase.utils';

function SignIn() {
    return (
        <div>
                <button onClick={signInWithGoogle}>Sign In</button>
        </div>
    )
}

export default SignIn;