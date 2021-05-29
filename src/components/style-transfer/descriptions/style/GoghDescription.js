import React from 'react';
import { DialogContent, Typography } from '@material-ui/core';


const GoghDescription = () => {

    return (
        <DialogContent dividers>
            <Typography gutterBottom>
                <b><i>The Starry Night</i></b> is an oil on canvas painting by
                Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889,
                it depicts the view from the east-facing window of his asylum room at
                Saint-Rémy-de-Provence, just before sunrise, with the addition of
                an imaginary village. Widely regarded as Van Gogh's magnum opus,
                The Starry Night is one of the most recognized paintings in Western art. 
            </Typography>
            <Typography gutterBottom>
                Vincent van Gogh was a Dutch post-impressionist painter who posthumously
                became one of the most famous and influential figures in the history of
                Western art. In a decade, he created about 2,100 artworks, including around
                860 oil paintings, most of which date from the last two years of his life.
                They include landscapes, still lifes, portraits and self-portraits, and
                are characterised by bold colours and dramatic, impulsive and expressive
                brushwork that contributed to the foundations of modern art. He was not
                commercially successful, and his suicide at 37 came after years of mental
                illness, depression and poverty.
            </Typography>
            <Typography gutterBottom>
                It has been in the permanent collection of the Museum
                of Modern Art in New York City since 1941, acquired through the
                Lillie P. Bliss Bequest.
            </Typography>
        </DialogContent>
    );
    
}

export default GoghDescription;