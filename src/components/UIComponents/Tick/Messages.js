import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  connect,
} from "react-redux";

/**
 * Component for display to the user
 * error messages
 * @param props
 * @returns {null}
 * @constructor
 */
const Messages = (props) => {

  const {
    messages,
  } = props;

  return (
    messages.length ? (
      <div
        className={classNames('tick-messages')}
      >
        {
          messages.map((error) => (
            <p
              key={error.message}
            >
              {error.message}
            </p>
            )
          )
        }
      </div>
      ):
      null
  );
};

Messages.propTypes = {
  messages: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => {
  const {
    messages,
  } = state.tick;

  return {
    messages,
  };
};

export default connect(mapStateToProps, null)(Messages);
