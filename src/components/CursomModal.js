import React from 'react';
import {
  Dialog,
  Backdrop,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';


export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: 10px;

  img {
    height: 70%;
    width: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 15px;
    margin: 5px;
  }

  .carousel-control-next,
  .carousel-control-prev {
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      transition: 0.5s;
      animation: ease-in-out;
    }
  }

  .title {
    color: ${({ theme }) => theme.colors.dark};
    font-weight: bold;
    font-size: 25px;
    padding-left: 20px;
    margin: 20px;
    border-left: 3px solid ${({ theme }) => theme.colors.color};
  }

  button { outline: none; }
`;

const CustomModal = ({
  title,
  content,
  open,
  handleClose,
  children,
}) => {
  return (
    <Dialog
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      maxWidth="md"
    >
      <ModalContent>
        <DialogTitle id="alert-dialog-title" className="title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="content">
            {content}
          </DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Fechar
          </Button>
        </DialogActions>
      </ModalContent>
    </Dialog>
  );
};

export default CustomModal;
