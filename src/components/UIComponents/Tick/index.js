import React, {
  Component,
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  connect,
} from 'react-redux';
import {
  TICK_CLOCK_ICON,
  TICK_CLOCK_ALT,
} from '../../../constants/Tick';
import Body from './Body';
import {
  tickIsAuth,
  tickAuth,
  tickReturnTracker,
  displayMessages,
} from '../../../actions/Tick';

class Tick extends Component {

  constructor(props) {
    super(props);

    /**
     * Hide or show body class for animation show/hide tick popup
     * @type {{toggleTickBodyValue: string}}
     */
    this.state = {
      toggleTickBodyValue: 'show',
    };
  }

  componentDidMount() {
    /**
     * If user authorized in tick, show time tracker
     * else show auth form
     */
    const {
      tickIsAuth,
    } = this.props;
    tickIsAuth();
  }

  /**
   * Handler for show or hide tick popup
   */
  toggleTickBody = () => {
    const {
      toggleTickBodyValue,
    } = this.state;

    let toggleClass = '';
    if (toggleTickBodyValue === '' || toggleTickBodyValue === 'hide') {
      toggleClass = 'show';
    } else {
      toggleClass = 'hide';
    }

    this.setState({
      toggleTickBodyValue: toggleClass,
    });
  };

  render() {

    const {
      isAuth,
      tickAuth,
      isFetching,
      task,
      tickReturnTracker,
      displayMessages,
    } = this.props;

    const {
      toggleTickBody,
    } = this;

    const {
      toggleTickBodyValue,
    } = this.state;

    return (
      <div className={classNames('tick-container')}>
        <div className={classNames('tick-header')}>
          <i onClick={toggleTickBody}>
            <img
              src={TICK_CLOCK_ICON}
              alt={TICK_CLOCK_ALT}
            />
          </i>
        </div>
        <Body
          toggleTickBodyValue={toggleTickBodyValue}
          tickReturnTracker={tickReturnTracker}
          toggleTickBody={toggleTickBody}
          displayMessages={displayMessages}
          isAuth={isAuth}
          isFetching={isFetching}
          tickAuth={tickAuth}
          task={task}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    isAuth,
    isFetching,
    task,
  } = state.tick;

  return {
    isAuth,
    isFetching,
    task,
  };
};

const mapDispatchToProps = ({
  tickIsAuth,
  tickAuth,
  tickReturnTracker,
  displayMessages,
});

Tick.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  task: PropTypes.instanceOf(Object).isRequired,
  tickAuth: PropTypes.func.isRequired,
  tickIsAuth: PropTypes.func.isRequired,
  tickReturnTracker: PropTypes.func.isRequired,
  displayMessages: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tick);
