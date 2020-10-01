import React, {useRef, useState} from 'react';
import Header from '../../../components/trips/header';
import Graphic from '../../../components/trips/graphic';
import Metrics from '../../../components/trips/metrics';
import Layout from "../../../components/layout"
import legendStyles from '../../../styles/trips/legend.module.css';

const TripsPage = () => {

  const [locs, setLocs] = useState(null);
  const [visitedFocus, setVisitedFocus] = useState(legendStyles.visitedFocus);
  const [willvisitFocus, setWillvisitFocus] = useState(legendStyles.willvisitFocus);
  const [shiftStar, setShiftStar] = useState(null);
  const [changeStar, setChangeStar] = useState(null);
  const [loadMap, setLoadMap] = useState('loading');

  const map = useRef(null);
  const tooltip = useRef(null);
  const title = useRef(null);
  const container = useRef(null);

  return (
    <Layout>
      <Header
        title={title}
      />
      <Graphic
        map={map}
        tooltip={tooltip}
        title={title}
        container={container}
        visitedFocus={visitedFocus}
        setVisitedFocus={setVisitedFocus}
        willvisitFocus={willvisitFocus}
        setWillvisitFocus={setWillvisitFocus}
        shiftStar={shiftStar}
        changeStar={changeStar}
        loadMap={loadMap}
        setLoadMap={setLoadMap}
      />
      <Metrics
        locs={locs}
        setLocs={setLocs}
        setShiftStar={setShiftStar}
        setChangeStar={setChangeStar}
      />
    </Layout>
  );
}

export default TripsPage;