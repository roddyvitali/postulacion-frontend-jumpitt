import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Button, Image } from 'semantic-ui-react'
import { fakeAuth } from '../../config/common'

class Login extends Component {
  state = {
    redirectToReferrer: false,
    email: "",
    pass: "",
    not_valid_email_msg: [],
    not_valid_pass_msg: [],
  }

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const { name, value } = e.target;
    console.log(e)
    console.log(name, value)
    this.setState({[name]: value});
  }
  login = () => {
    const { email, pass  } = this.state
    let not_valid_pass_msg =[], not_valid_email_msg = [];
    let pass_valid = true, email_valid = true; 

    if( pass != "" ) {
      console.log("PASA Req Pass")
    }else{
      pass_valid = false; 
      not_valid_pass_msg = [...not_valid_pass_msg, "La Contraseña es un campo requerido"]
    }

    if( /[A-Z]/.test(pass) && /[0-9]/.test(pass)){
      console.log("PASA Mayu Num")
    }else{
      pass_valid = false; 
      not_valid_pass_msg = [...not_valid_pass_msg, "La Contraseña debe contener al menos una Mayúscula y un Número"]

    }
    
    if (pass.length >= 8 && pass.length <= 10 ){
      console.log("PASA Long Pass")
    }else{
      pass_valid = false; 
      not_valid_pass_msg = [...not_valid_pass_msg, "La Contraseña debe contener tener entre 8 a 10 caracteres"]
      console.log("NO PASA Long Pass")
    }

    if( email != "" ) {
      console.log("PASA Req Email")
    }else{
      email_valid = false; 
      not_valid_email_msg = [...not_valid_email_msg, "El Email es un campo requerido"]
    }


    if( /\S+@\S+\.\S+/.test(email) ){
      console.log("PASA val Email")
    }else{
      email_valid = false; 
      not_valid_email_msg = [...not_valid_email_msg, "El Email no es válido"]
    }

    if(email_valid && pass_valid) {
      fakeAuth.authenticate(() => {
        this.setState({
          redirectToReferrer: true
        })
      })
    }else{
      this.setState({
        not_valid_email_msg,
        not_valid_pass_msg
      })
    }

    

  }
  render() {
    const { redirectToReferrer, email, pass, not_valid_pass_msg, not_valid_email_msg } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/main' } }

    if(redirectToReferrer === true){
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div className="login-container">
        <section className="login-form">
          <h1 className='ui header title-form'>
            <Image className="img-form" src='/images/Logo Icon.svg'  /> Cool Dashboard
          </h1>
          <h2 className="welcome">Hola!</h2>
          <p className="subwelcome">Ingresa con tus datos o crea una nueva cuenta </p>
          <input type="email" value={email} name="email" onChange={ this.handleChange } placeholder="Correo electrónico" />
          {not_valid_email_msg.length > 0 && not_valid_email_msg.map( (item, index) => <p style={{fontSize: '11px'}} key={index}>{item}</p>)}
          <input type="text" pass={pass} name="pass" onChange={ this.handleChange } placeholder="Contraseña" />
          {not_valid_pass_msg.length > 0 && not_valid_pass_msg.map( (item, index) => <p style={{fontSize: '11px'}} key={index}>{item}</p>)}
          <Button className="btn-login-cool" onClick={this.login}>Ingresar</Button>
          <p className="new-account">¿No tienes cuenta? <Link to="#" className="link-to">Crear cuenta</Link></p>
        </section>

      </div>
    )
  }
}

export default Login
