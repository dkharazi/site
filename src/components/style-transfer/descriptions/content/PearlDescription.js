import React from 'react';
import { DialogContent, Typography } from '@material-ui/core';


const PearlDescription = () => {

    return (
        <DialogContent dividers>
            <Typography gutterBottom>
                Johannes Vermeer painted <b><i>Girl with a Pearl Earring</i></b> as an oil painting
                in 1665. Going by various names over the centuries, it became known by its
                present title towards the end of the 20th century. 
            </Typography>
            <Typography gutterBottom>
            During his lifetime, he was a moderately successful provincial genre painter,
            recognized in Delft and The Hague. Nonetheless, he produced relatively few
            paintings and evidently was not wealthy, leaving his wife and children in
            debt at his death.
            </Typography>
            <Typography gutterBottom>
                The work has been in the collection of the Mauritshuis in The Hague
                since 1902 and has been the subject of various literary treatments.
                In 2006, the Dutch public selected it as the most beautiful painting
                in the Netherlands.
            </Typography>
        </DialogContent>
    );
    
}

export default PearlDescription;