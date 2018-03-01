import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { updateLogIn } from '../../actions/log-in';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.validateAndSubmit = this.validateAndSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  validateAndSubmit(e) {
    const { email, password } = this.props.logIn;
    e.preventDefault();

<<<<<<< HEAD
=======
    // literally black magic
    if (!email.match(/^[^@]+@[^\.]+(\.[a-z0-9]+)*\.[a-z]+/i)) {
      console.log('email validation failed');
      return false;
    }

    if (email.length )

>>>>>>> working on login
    if (password.length < 8) {
      console.log('password validation failed');
      return false;
    }
<<<<<<< HEAD
    axios.get('./api/users').then(data => {
      if (this.isMatching(data.data, email, password)) {
        dispatch(logIn({ email: email, password: password }))
      } else {
        console.log('Invalid email or password')
      }

    })
  }

  isMatching(data, name, password) {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      let entry = data[i];
      if ((entry.email == name || entry.username == name) && entry.password == password) {
        return true;
      }
    }
    return false;
  }


updateForm(e) {
  const { dispatch } = this.props;
  const name = e.target.name;
  const value = e.target.value;

  dispatch(updateLogIn({ name: name, value: value }));
}

render() {
  const { logIn } = this.props;
  return (
    <div>
      <form className='Login-form'>
        <input
          type='text'
          onChange={this.updateForm}
          name='email'
          placeholder='Email' />

        <input
          type='password'
          onChange={this.updateForm}
          name='password'
          placeholder='Password' />

        <input
          type='checkbox'
          onChange={this.updateForm}
          name='remember' />Remember me
          <button
          type='submit'
          onClick={this.validateAndSubmit}>Log In</button>
      </form>
      <p>Forgot your password?</p>
    </div>
  )
}
=======
    axios.get('./api/users').then( data => {
      if (this.isMatching(data.data, email, password)) {
        dispatch(logIn({ email: email, password: password }))
      } else {
        console.log('Invalid email or password');
      }
    });
  }
  isMatching(data, name) {
    console.log(data);
    data.forEach(item => {});
      (entry => {
        if (entry.email == email && entry.password == password) {
          return true;
        }
      });
    return false;
  }
  updateForm(e) {
    const { dispatch } = this.props;
    const name = e.target.name;
    const value = e.target.value;

    dispatch(updateLogIn({ name: name, value: value }));
  }

  render() {
    const { logIn } = this.props;
    return (
      <div>
        <form className="Login-form">
          <input
            type="text"
            value={ logIn.emailOrUsername }
            onChange={this.updateForm}
            name="emailOrUsername"
            placeholder="Email or username" />

          <input
            type="password"
            value={ logIn.password }
            onChange={this.updateForm}
            name="password"
            placeholder="Password" />

          <input
            type="checkbox"
            onChange={this.updateForm}
            name="remember" />Remember me
          <button
            type="submit"
            onClick={this.validateAndSubmit}>Log In</button>
        </form>
        <p>Forgot your password?</p>
      </div>
    );
  }
>>>>>>> working on login
}

LogIn.propTypes = {
  logIn: PropTypes.object,
  dispatch: PropTypes.func,
};

export default LogIn;
