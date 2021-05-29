import React from 'react';
import { DialogContent, Typography } from '@material-ui/core';


const PicassoDescription = () => {

    return (
        <DialogContent dividers>
            <Typography gutterBottom>
                <b><i>Seated Nude</i></b> is Pablo Picasso's final collapse of form into Cubism.
                It was part of a series from late 1909 to spring 1910, and a summation of 
                earlier Cubist three-dimensional experimental work on still life and portraits.
                In fact, this time of experiment and research gives this period the title of
                Analytical Cubism, with its manipulation and fragmentation of space and
                multiple angles of vision. Picasso's whole preoccupation with the notion of
                vision, explored in the earlier blind man images, now finds its
                thematic challenge in Cubis.
            </Typography>
            <Typography gutterBottom>
                Pablo Picasso was a Spanish painter, sculptor, printmaker, ceramicist
                and theatre designer who spent most of his adult life in France.
                Regarded as one of the most influential artists of the 20th century,
                he is known for co-founding the Cubist movement, the invention of
                constructed sculpture, the co-invention of collage, and for the wide
                variety of styles that he helped develop and explore.
            </Typography>
        </DialogContent>
    );
    
}

export default PicassoDescription;