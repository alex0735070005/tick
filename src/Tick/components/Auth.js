import React, {
  Component,
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  TICK_EMAIL_TEXT,
  TICK_PASSWORD_TEXT,
  TICK_BUTTON_AUTH_TEXT,
  TICK_AUTH_FORM_NAME_TEXT,
  TICK_ERROR_EMAIL_TEXT,
} from '../constants/Tick';
import {
  isValidInputEmail,
} from '../services/TickValidate';

import Messages from "./Messages";

/**
 * Auth component for show form login
 * if not exists user tick api_token and subscription_id
 */
class Auth extends Component {


  /**
   * Handler submit form auth for send auth data
   * and form validation
   * @param event
   */
  authHandler = (event) => {
    event.preventDefault();

    /**
     * Export tickAuth action
     */
    const {
      tickAuth,
      displayMessages,
    } = this.props;

    // Get user tick email and password from form
    const username = event.target.username.value;
    const password = event.target.password.value;

    /**
     * Valid form data email
    */
    if (!isValidInputEmail(username)) {
      let errors = [
        {
          field: 'email',
          message: TICK_ERROR_EMAIL_TEXT,
        },
      ];
      return displayMessages(errors);
    }
    return tickAuth(username, password);
  };

  render() {

    const {
      authHandler,
    } = this;

    return (
      <div className={classNames('tick-auth')}>
        <div className={classNames('auth-header')}>
          <h3>{TICK_AUTH_FORM_NAME_TEXT}</h3>
        </div>
        <Messages />
        <form
          onSubmit={authHandler}
          className={classNames('tick-auth-form')}
        >
          <label htmlFor='tickUsername'>
            {TICK_EMAIL_TEXT}
            <input
              id='tickUsername'
              type='text'
              name='username'
              defaultValue='alex0735070005@gmail.com'
            />
          </label>
          <label htmlFor='tickPassword'>
            {TICK_PASSWORD_TEXT}
            <input
              id='tickPassword'
              type='password'
              name='password'
              defaultValue='wz2c9hge'
            />
          </label>
          <button
            type='submit'
          >
            {TICK_BUTTON_AUTH_TEXT}
          </button>
        </form>
      </div>
    );
  }
}

Auth.propTypes = {
  tickAuth: PropTypes.func.isRequired,
  displayMessages:PropTypes.func.isRequired,
};

export default Auth;
