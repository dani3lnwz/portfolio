import React from 'react';
import './ContactMe.css'

const ContactMe = () => {
    return (
        <div id='con' className='container'>
            <form onSubmit="sendEmail(); reset(); return false;">
                <h3>GET IN TOUCH</h3>
                <input type="text" id='name' placeholder='Your Name' required />
                <input type="email" id='email' placeholder='Email id' required />
                <input type="text" id='phone' placeholder='Phone no' required />
                <textarea name="message" rows="4" placeholder='How Can We help You?'></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>

        
    );
};

export default ContactMe;