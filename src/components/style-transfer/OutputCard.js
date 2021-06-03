import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import * as cardStyles from '../../styles/style-transfer/card.module.css';


const OutputCard = ({ title, card }) => {

    return (
        <Card className={cardStyles.card}>
            <CardActionArea>
                <CardMedia
                    className={cardStyles.media}
                    image={card.img}
                    title="Modeled Image"
                />
                <CardContent className={cardStyles.outputTitle}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default OutputCard;