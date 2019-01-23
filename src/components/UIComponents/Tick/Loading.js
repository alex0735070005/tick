import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Loading = ({ isFetching }) => {

    return (
        isFetching ?
        <div className={classNames('loading-wrap')}>
            <div className={classNames('loading-block')}>
                <ul className={classNames('menu-list')}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        : null
    );
};

Loading.propTypes = {
    isFetching: PropTypes.bool.isRequired,
};

export default Loading;
