import {
    FormControl,
    FormLabel,
    Radio,
    RadioGroup,
    FormControlLabel
} from '@material-ui/core';
import React from 'react';
import * as colorStyles from '../../styles/news/color.module.css';
import { formLabel, radioGroup } from '../../styles/news/topic.module.css'
import topicsJson from '../../data/news/uniqueTopics.json';


const Legend = ({ topic, handleChangeTopic }) => {

    // Helper function for building topic labels for legend
    const topicButtons = topicsJson.topics.map((t) => {
        const colorName = t.toLowerCase().split('.').join('').split(' ').join('');
        const customRadio = <Radio className={colorStyles[colorName]} />;
        return (
            <FormControlLabel
                key={t}
                value={t}
                control={customRadio}
                label={t} 
            />
        );
    });

    return (
        <FormControl component="fieldset">
            <FormLabel 
                component="legend"
                className={formLabel}
            >
                Topic
            </FormLabel>
            <RadioGroup 
                className={radioGroup}
                aria-label="topic"
                name="topic"
                value={topic}
                onChange={handleChangeTopic}
            >
                {topicButtons}
            </RadioGroup>
        </FormControl>
    );
}

export default Legend;