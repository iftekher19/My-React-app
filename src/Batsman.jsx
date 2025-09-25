import React, { useState } from 'react';

export default function Batsman() {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "10vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif"
    };

    const headingStyle = {
        color: "#2c3e50",
        fontSize: "2.5rem",
        border: "2px solid #2c3e50",
        padding: "10px 20px",
        borderRadius: "8px",
        backgroundColor: "#ecf0f1",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    };
    // State handeling
    const [runs,setRuns] = useState(0);
    const handelsingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>player: Bangla Batsman 🏏</h1>
            {
                runs > 50 && <h2 style={{color:'green'}}>Congo 50</h2>
            }
                
            <h1>score: {runs} </h1>
            <button onClick={handelsingle}>single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handelsingle}>six</button>
        </div>
    );
}