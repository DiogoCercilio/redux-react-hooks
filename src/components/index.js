import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function addCourseAction(title) {
    return { type: 'ADD_COURSE', title }
}

export default function CourseList() {
    const courses = useSelector(state => state.data);
    const [courseName, setCourseName] = useState();
    const dispatch = useDispatch();
    
    function addCourse() {
        dispatch(addCourseAction(courseName));
        setCourseName('');
    }

    return (
        <>
            <ul>
                {courses.map(course=> <li key={course}>{course}</li>)}
            </ul>
            <label htmlFor="name">Nome do Curso</label>
            <input value={courseName} onChange={(e)=> setCourseName(e.target.value)}/>
            <button onClick={()=> addCourse()}>Adicionar</button>
        </>
    )
}