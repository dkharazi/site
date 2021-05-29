import React from 'react';
import { DialogContent, Typography } from '@material-ui/core';


const DancingDescription = () => {

    return (
        <DialogContent dividers>
            <Typography gutterBottom>
                <b><i>Louise Chalwell of the West Austrailian Ballet</i></b> is photographed 
                in 2004 by Jon Green in his private collection of photographs of West Australian 
                dancers and choreographers.
            </Typography>
            <Typography gutterBottom>
                Jon Green has spent over 27 years working as a professional photographer.
                During the last 19 years, Jon has focused on professional freelance photography
                for performing arts.
            </Typography>
            <Typography gutterBottom>
                This photograph is one of many photographs included in
                Jon Green's private collection called <i>avec attitude</i>.
                The public can access it digitally and freely via the National Library of Australia.
            </Typography>
        </DialogContent>
    );
    
}

export default DancingDescription;