import React from 'react';
import './current-course.scss';
import СurrentСourseItem from "../СurrentСourseItem/СurrentСourseItem";

const СurrentСourseContainer = () => {
    return (
        <article className='current-course'>
            <СurrentСourseItem title='USD/UAH' param='USD_UAH'/>
            <СurrentСourseItem title='EUR/UAH' param='EUR_UAH'/>
        </article>
    );
};

export default СurrentСourseContainer;