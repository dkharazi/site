import React, {useRef, useState} from 'react';
import Header from '../../../components/trips/header';
import Graphic from '../../../components/trips/graphic';
import TripsLayout from "../../../components/trips/tripsLayout"
import * as legendStyles from '../../../styles/trips/legend.module.css';

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
  const mast = useRef(null);

  return (
    <TripsLayout mast={mast}>
      <Header
        title={title}
      />
      <Graphic
        map={map}
        tooltip={tooltip}
        title={title}
        container={container}
        mast={mast}
        locs={locs}
        setLocs={setLocs}
        visitedFocus={visitedFocus}
        setVisitedFocus={setVisitedFocus}
        willvisitFocus={willvisitFocus}
        setWillvisitFocus={setWillvisitFocus}
        shiftStar={shiftStar}
        setShiftStar={setShiftStar}
        changeStar={changeStar}
        setChangeStar={setChangeStar}
        loadMap={loadMap}
        setLoadMap={setLoadMap}
      />
    </TripsLayout>
  );
}

export default TripsPage;