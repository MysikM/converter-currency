import React from 'react';
import './current-course.scss';
import СurrentСourseItem from "../СurrentСourseItem/СurrentСourseItem";

const СurrentСourseContainer = () => {
    return (
        <article className='current-course'>
            <СurrentСourseItem title='USD/UAH' count={29.1} />
            <СurrentСourseItem title='EUR/UAH' count={33.2} />
        </article>
    );
};

export default СurrentСourseContainer;