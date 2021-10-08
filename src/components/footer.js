import React from 'react';
import { useSelector } from 'react-redux';
import ChildComponent from './child.component';

export default function Footer() {
    const courses = useSelector(state=> state.data);
    
    return (
        <div className='Footer'>
            All courses... {courses.toString()}
            <ChildComponent />
        </div>
    )
}