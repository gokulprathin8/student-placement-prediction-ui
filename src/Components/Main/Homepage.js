import React from 'react';
import { SketchField, Tools } from 'react-sketch';
import Kabana from "./kabana";

const Homepage = () => {
    return (
        <>
            <h3>Student Placement Portal</h3>
            <p>The Student can view all the jobs,notifications,learning resources,faculty details !!!  </p>

            <Kabana/>
            <p style={{ textAlign: "center" }}>Remember Something? Write it down before you forget!</p>
            <SketchField width='1024px'
                height='400px'
                width="900px"
                tool={Tools.Pencil}
                lineColor='black'
                lineWidth={3} 
                backgroundColor="lightgrey"
                />
        </>
    )
}

export default Homepage;