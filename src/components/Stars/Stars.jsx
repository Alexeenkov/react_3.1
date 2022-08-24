import React from 'react';
import s from './Stars.module.css';
import Star from './Star';
import PropTypes from "prop-types";

const Stars = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(
            <Star key={i} />
        );
    }

    return (
        <ul className={s['card-body-stars']}>
            {stars}
        </ul>
    );
}

Stars.propTypes = {
    rating: PropTypes.number,
}

export default Stars;