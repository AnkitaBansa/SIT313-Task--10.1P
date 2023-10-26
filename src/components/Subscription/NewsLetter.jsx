import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    // State for holding the subscriber's email
    const [subscriberEmail, setSubscriberEmail] = useState('');

    // Handler function for the subscription process
    const handleSubscribe = async () => {
        // Log the email to console for debugging
        console.log({ email: subscriberEmail }); 
        
        // Make a POST request to the backend to handle email sending
        const response = await fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: subscriberEmail }),
        });
        
        // Handle the response from the server
        if (response.ok) {
            // Clear the email input and notify the subscriber
            setSubscriberEmail("");
            alert('Thank you for subscribing! An email has been sent to: ' + subscriberEmail);
        } else {
            // Log the error and alert the subscriber
            console.error("There was an error sending the email:", response.statusText);
            alert('Error: ' + response.status);
        }
    }

    // Render the newsletter subscription form
    return (
        <center>
            <div className="newsletter">
                <span className='text-sign'>SIGN UP FOR OUR DAILY INSIDER</span>
                <input 
                    className='email-input' 
                    placeholder='Enter your email here' 
                    type="email" 
                    value={subscriberEmail}
                    // Update the subscriberEmail state whenever the input value changes
                    onChange={e => setSubscriberEmail(e.target.value)} 
                />
                <button className='subscribe-button' type="button" 
                    onClick={handleSubscribe}
                >
                    Subscribe
                </button>
            </div>
        </center>
    );
}

export default NewsLetter;