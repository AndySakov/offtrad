import React, { useEffect, useState } from 'react';
import Bus from './utils/Bus';

// import './index.css';

export const Flash = () => {
    let [visibility, setVisibility] = useState(false);
    let [message, setMessage] = useState('');
    let [error, setError] = useState('');
    let [type, setType] = useState('');

    useEffect(() => {
        Bus.addListener('flash', ({error, message, type}) => {
            setVisibility(true);
            setError(error);
            setMessage(message);
            setType(type);
            setTimeout(() => {
                setVisibility(false);
            }, 10000);
        });

    }, []);

    useEffect(() => {
        if(document.querySelector('.close') !== null) {
            document.querySelector('.close').addEventListener('click', () => setVisibility(false));
        }
    })

    return (
        visibility && <div className={`alert alert-${type}`}>
                        <span className="close"><strong>X</strong></span>
                        <div className="information">
                          <h6 className="error">{error}</h6>
                          {/* <br></br> */}
                          <p>{message}</p>
                        </div>
                      </div>
    )
}
