import React from 'react';
import Connect from './Connect';
import ContactForm from './ContactForm';

// This component combines the Connect section and the ContactForm section.
const ContactPage = ({ id }) => {
  return (
    // We pass the id to this main container for react-scroll to work.
    <div id={id}>
      <Connect />
      <ContactForm />
    </div>
  );
};

export default ContactPage;