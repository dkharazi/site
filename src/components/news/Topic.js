import React from 'react';
import { Grid } from '@material-ui/core';
import ScatterChart from './ScatterChart';
import Legend from './Legend';
import Words from './Words';
import { topicChartContainer } from '../../styles/news/layout.module.css';
import topicsJson from '../../data/news/topics.json';


const Topic = ({ topic, handleChangeTopic }) => {
	return(
		<Grid container>
			<Grid item xs={6} container direction="column">
				<Grid item className={topicChartContainer}>
					<ScatterChart data={topicsJson} chartType="cluster" />
				</Grid>
				<Grid item>
					<Legend
						topic={topic}
						handleChangeTopic={handleChangeTopic}
					/>
				</Grid>
			</Grid>
			<Grid item xs={6}>
				<Words topic={topic} />
			</Grid>
		</Grid>
	);
}

export default Topic;