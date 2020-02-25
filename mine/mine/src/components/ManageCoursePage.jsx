import React from 'react';
// import { Prompt } from 'react-router-dom';

export const ManageCoursePage = (props) => {
   
    return (
        <>
           <h2>Manage Course</h2>
           {/* <Prompt when={true} message="Are you sure you want to leave page"/> */}
           {props.match.params.slug} 
        </>
    )
}
