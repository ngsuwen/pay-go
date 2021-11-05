import React, { useState, useEffect } from "react";

export default function FetchData({ data }) {

    const styles = {
        height: '20vw',
        width: '15vw',
        backgroundImage: `url(${data.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
        <>
        <p>{data.title}</p>
        <p>{data.price}</p>
        <div style={styles}/>
        </>
    );
};