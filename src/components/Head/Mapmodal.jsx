import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MapModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Crowned Naturally Location</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.320113666929!2d-73.92855098799846!3d40.6448734712846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ca3171e5807%3A0x9fe4df3d5641af74!2s5321%20Clarendon%20Rd%2C%20Brooklyn%2C%20NY%2011203%2C%20USA!5e0!3m2!1sen!2sjm!4v1722523148099!5m2!1sen!2sjm"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MapModal;



