import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Modal from './Modal';
import * as cardStyles from '../../styles/style-transfer/card.module.css';
import images from '../../data/style-transfer/images';


const InputCard = ({ card, title, type, setCard, openModal, setOpenModal }) => {

    // Helper function for creating menu items in selection
    const createMenuItems = images[type].map((card) => {
        return <MenuItem key={card.id} value={card.id}>{card.desc}</MenuItem>;
    });

    // Define state handler for content and style images
    const handleImgChange = (event, newImg) => {
        setCard(images[type].find(e => e.id === newImg.props.value));
    };

    // Define state handler for content description button
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    return (
        <Card className={cardStyles.card}>
            <CardActionArea>
            <CardMedia
                className={cardStyles.media}
                image={card.img}
                title={card.desc}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <FormControl className={cardStyles.formControl}>
                    <InputLabel id="select-label">Choose an Image</InputLabel>
                    <Select
                        labelId="select-label"
                        value={card.id}
                        onChange={handleImgChange}
                    >
                        {createMenuItems}
                    </Select>
                </FormControl>
            </CardContent>
            </CardActionArea>
            <CardActions className={cardStyles.outputDescription}>
                <Button
                    size="small"
                    color="primary"
                    onClick={handleOpenModal}
                >
                    <p className={cardStyles.infoText}>Description</p>
                </Button>
                <Modal
                    card={card}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
                <Button size="small" color="primary" href={card.link}>
                    <p className={cardStyles.infoText}>Learn More</p>
                </Button>
            </CardActions>
        </Card>
    );
}

export default InputCard;