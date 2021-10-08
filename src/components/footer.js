import React from 'react';
import { useSelector } from 'react-redux';

export default function Footer() {
    const courses = useSelector(state=> state.data);
    
    return (
        <div className='Footer'>
            All courses... {courses.toString()}
        </div>
    )
}