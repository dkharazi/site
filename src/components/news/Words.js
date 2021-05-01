import {
    Grid,
    List,
    ListSubheader,
    ListItem,
    ListItemText
} from '@material-ui/core';
import React from 'react';
import topicStyles from '../../styles/news/topic.module.css';
import layoutStyles from '../../styles/news/layout.module.css';
import tfidfJson from '../../data/news/tfidf.json';


const TopicWords = ({ topic }) => {

    // Helper function for building list of top 20 words for topics
    const top20Words = tfidfJson[topic].map((w, idx) =>
        <ListItem key={w.word} button>
        <Grid item xs={1}>
            <ListItemText primary={idx+1} />
        </Grid>
        <Grid item xs={6}>
            <ListItemText primary={`${w.word.charAt(0).toUpperCase() + w.word.slice(1)}`} />
        </Grid>
        <Grid item xs={3} className={`${topicStyles.tfidf}`}>
            <ListItemText primary={`${w.tfidf.toFixed(3)}`} />
        </Grid>
        </ListItem>
    );

    // Save subheader JSX to variable
    const subheader = (
        <ListSubheader
            component="div"
            id="nested-list-subheader"
            className={topicStyles.subheader}
        >
            Top 20 Words
        </ListSubheader>
    );

    return (
        <List
            className={layoutStyles.topicContainer}
            subheader={subheader}
        >
            <Grid item xs={12} container direction="row">
                {top20Words}
            </Grid>
        </List>
    );
}

export default TopicWords;