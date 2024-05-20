import React, { useState, useEffect } from 'react';
import { TableRow, TableCell } from '@mui/material';
import QueryCard from './QueryCard'; // Import your QueryCard component here

const QueryData = ({ value }) => {
    const tokenValue = window.localStorage.getItem("token");
    const [showCard, setShowCard] = useState(false);
    const [buttonFeature, setButtonFeature] = useState(value.active);
    const [query, setQuery] = useState([]);
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: tokenValue })
        })
            .then(response => response.json())
            .then(data => {
                setQuery(data);
                const matchingData = data.find((item) => item.ticketId === value.ticketId);
                if (matchingData) {
                    setInitialData(matchingData);
                }

            });
    }, [tokenValue, value.ticketId]);

    const handleDetails = () => {
        setShowCard(prev => !prev);
    };

    // console.log(value.active)

    const handleButtonClick = async () => {
        try {
            const newActiveState = !buttonFeature;
            const response = await fetch(`http://localhost:3001/contact/${value.ticketId}/active`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ active: newActiveState }) // Toggle the active value
            });

            if (!response.ok) {
                throw new Error('Failed to update ticket status');
            }

            // Update local state only if the backend update was successful
            setButtonFeature(newActiveState);
        } catch (error) {
            console.error('Error updating ticket status:', error);
            // Handle error appropriately (e.g., show a notification to the user)
        }
    };

    const activeStyle = {
        backgroundColor: '#04AA6D',
        border: 'none',
        borderRadius: "8px",
        color: 'white',
        padding: '0.5rem ',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '1rem',
        cursor: 'pointer'
    }


    const resolvedStyle = {
        backgroundColor: '#008CBA',
        border: 'none',
        borderRadius: "8px",
        color: 'white',
        padding: '0.5rem ',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '1rem',   
        cursor: 'pointer',
    }



    return (
        <>
            <TableRow key={value.ticketId} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">{value.ticketId}</TableCell>
                <TableCell component="th" scope="row">{value.subject}</TableCell>
                <TableCell component="th" scope="row">
                    <button className='handleDetailsButton' onClick={handleDetails} style={{ borderRadius: "8px" }}>Details</button>
                </TableCell>
                <TableCell align="left">
                    <button onClick={handleButtonClick} style={buttonFeature ? activeStyle : resolvedStyle}>{buttonFeature ? "Active" : "Resolved"}</button>
                </TableCell>
            </TableRow>

            {showCard && initialData && (
                <QueryCard
                    initialData={initialData}
                    onClose={() => setShowCard(false)}
                />
            )}
        </>
    );
};

export default QueryData;
