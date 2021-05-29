import React from 'react';
import {
    DancingDescription,
    PearlDescription,
    VinciDescription
} from './descriptions/content';
import {
    GoghDescription,
    PicassoDescription,
    StaircaseDescription
} from './descriptions/style';


const Description = ({ card }) => {

    switch (card.id) {
        case "dancing":
            return <DancingDescription />;
        case "pearl":
            return <PearlDescription />;
        case "vinci":
            return <VinciDescription />;
        case "gogh":
            return <GoghDescription />;
        case "picasso":
            return <PicassoDescription />;
        case "staircase":
            return <StaircaseDescription />;
        default:
            return <DancingDescription />;
    }

}

export default Description;