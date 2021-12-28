import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import { StyledModal } from './styles/Modal';

const CustomModal = (props) => {
  const { onHide, content } = props;

  return (
    <StyledModal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered dialogClassName="class">
    {content && (
      <><Modal.Header className="color"><Modal.Title id="contained-modal-title-vcenter">{content.title}</Modal.Title></Modal.Header>
        <Modal.Body className="body">
          {content.body}
        </Modal.Body>
        <Modal.Footer className="color"><Button onClick={onHide}>Fechar</Button></Modal.Footer></>)}
    </StyledModal>
  );
};

export default CustomModal;
