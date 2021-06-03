import React from 'react';
import { Dialog, DialogTitle, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Description from './Description';
import * as modalStyles from '../../styles/style-transfer/modal.module.css';


const Modal = ({ card, openModal, setOpenModal }) => {

    // Define state handler for opening modal
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Dialog open={openModal} onClose={handleCloseModal}>
            <DialogTitle disableTypography className={modalStyles.title} onClose={handleCloseModal}>
                <Typography variant="h6">
                    Description
                </Typography>
                <IconButton aria-label="close" onClick={handleCloseModal}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Description card={card} />
        </Dialog>
    );
}

export default Modal;