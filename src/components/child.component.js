import React from 'react';
import { useSelector } from 'react-redux';

export default function ChildComponent() {
    const courses = useSelector(store=> store.data);

    return (
        <div className='ChildComponent'>
            Store from Child component: {courses.toString()}
        </div>
    )
}