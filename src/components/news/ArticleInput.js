import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { textFieldContainer } from '../../styles/news/layout.module.css';
import sampleArticle from '../../data/news/article.js';


const ArticleInput = ({ article, setArticle, submitArticle }) => {

    const handleClick = () => { submitArticle(article); }
    const handleTextChange = (e) => { setArticle(e.target.value); }

    return (
        <Grid item xs={8} container direction="column">
            <Grid item className={textFieldContainer}>
                <TextField
                    id="outlined-multiline-static"
                    label="Custom Article"
                    defaultValue={sampleArticle}
                    multiline
                    rows={24}
                    fullWidth
                    variant="outlined"
                    onChange={handleTextChange}
                />
            </Grid>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Learn Topic
            </Button>
        </Grid>
    );
}

export default ArticleInput;