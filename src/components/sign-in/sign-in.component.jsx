import React from 'react';

import './sign-in.styles.scss'
import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:""
        }
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
             email: "",
            password:""

        })
    }
    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({[name]: value})
        
        
    }
    render() {
        return (
            <div className="sign-in">
                <h2> I already have an account </h2>
                <span>Sign in with your email and password </span>  
                <form on onSubmit={this.handleSubmit}>
                    
                    <FormInput label="email" name="email" type="email" value={this.state.email} handelChange={this.handleChange} required/>
                  
                    <FormInput label="password" name="password" type="password"value={this.state.password} handelChange={this.handleChange} required />
                    <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton> 
                    <CustomButton onClick={signInWithGoogle} insGoogleSignIn>Sign In with google</CustomButton>    
                  </div>

                </form>
            </div>
        )
    }

}

export default SignIn