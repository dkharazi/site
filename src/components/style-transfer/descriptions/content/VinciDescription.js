import React from 'react';
import { DialogContent, Typography } from '@material-ui/core';


const VinciDescription = () => {

    return (
        <DialogContent dividers>
            <Typography gutterBottom>
                The <b><i>Mona Lisa</i></b> is a half-length portrait painting by 
                Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, 
                it has been described as the best known, the most visited, the most written about, the most sung about,
                the most parodied work of art in the world.
            </Typography>
            <Typography gutterBottom>
                Leonardo da Vinci was an Italian polymath of the High Renaissance who was active as a painter,
                draughtsman, engineer, scientist, theorist, sculptor and architect. While his fame initially rested
                on his achievements as a painter, he also became known for his notebooks, in which he made drawings
                and notes on a variety of subjects, including anatomy, astronomy, botany, cartography, painting,
                and paleontology.
            </Typography>
            <Typography gutterBottom>
                It had been believed to have been painted between 1503 and 1506.
                However, Leonardo may have continued working on it as late as 1517.
                It was acquired by King Francis I of France and is now the property of the
                French Republic, on permanent display at the Louvre, Paris since 1797.
            </Typography>
        </DialogContent>
    );
    
}

export default VinciDescription;