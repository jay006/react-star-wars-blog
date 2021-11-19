import PropTypes from 'prop-types';
import React from 'react';

/**
 * Dummy ad component
 * @method Ad
 * @param  {object} props
 */
const Ad = props => {
    return (
        <div className="ad">
            <a target="_blank" rel="noreferrer noopener" href={props.url}>
                <img
                    className="img-responsive"
                    src={props.imageUrl}
                    alt="React in Nutshell"
                />
            </a>
            <small>Star Wars Ads</small>
        </div>
    );
};

Ad.propTypes = {
    imageUrl: PropTypes.string,
    url: PropTypes.string,
};

export default Ad;
