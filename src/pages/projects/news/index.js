import React, { useState} from 'react';
import { Grid, Paper } from '@material-ui/core';
import NewsLayout from '../../../components/news/NewsLayout';
import NewsBar from '../../../components/news/NewsBar';
import Topic from '../../../components/news/Topic';
import Publication from '../../../components/news/Publication';
import Classify from '../../../components/news/Classify';
import * as layoutStyles from '../../../styles/news/layout.module.css';
import sampleArticle from '../../../data/news/article.js';


const NewsPage = () => {

	// Define state variables
	const [tab, setTab] = useState(0);
	const [topic, setTopic] = useState('Baseball');
	const [error, setError] = useState(null);
	const [items, setItems] = useState(null);
	const [article, setArticle] = useState(sampleArticle);
	const [submittedArticle, submitArticle] = useState(null);

	// Define state handlers
	const handleChangeTab = (event, newTab) => { setTab(newTab); };
	const handleChangeTopic = (event, newTopic) => { setTopic(newTopic); };

	// Helper function for returning output depending on tab
	const chooseTab = () => {
		if (!tab) {
			return <Topic topic={topic} handleChangeTopic={handleChangeTopic} />;
		} else if (tab === 1) {
			return <Publication />;
		} else {
			return <Classify error={error} setError={setError} items={items} setItems={setItems} article={article} setArticle={setArticle} submittedArticle={submittedArticle} submitArticle={submitArticle} />;
		}
	}

	return (
        <NewsLayout>
            <Grid container className={layoutStyles.appContainer} spacing={2}>
                <Grid item xs={12}>
                    <h3>Media Topic Classification</h3>
                </Grid>
                <Grid item xs={12}>
                    <NewsBar
                        labels={["Cluster", "Publication", "Classifying"]}
                        tab={tab}
                        handleChangeTab={handleChangeTab}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Paper className={layoutStyles.topicContainer}>
                        {chooseTab()}
                    </Paper>
                </Grid>
            </Grid>
       </NewsLayout>
	);
}

export default NewsPage;