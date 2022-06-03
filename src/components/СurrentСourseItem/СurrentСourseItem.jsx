import React from 'react';
import './current-course-item.scss';

const СurrentСourseItem = ({title, count}) => {
    return (
        <div className='current-course--item'>
            <h3 className='current-course--title'>{title}</h3>
            <span className='current-course--course'>{count}</span>
        </div>
    );
};

export default СurrentСourseItem;