import React from 'react';
import graphicStyles from '../../styles/trips/graphic.module.css';
import Map from './map';
import Legend from './legend';

const Graphic = ({ map, tooltip, title, container, visitedFocus, setVisitedFocus, willvisitFocus, setWillvisitFocus, shiftStar, changeStar }) => {
  return (
    <main className={`${graphicStyles.graphic} container`} ref={container}>
      <Map
        mapDOM={map}
        tooltipDOM={tooltip}
        titleDOM={title}
        containerDOM={container}
        visitedFocus={visitedFocus}
        willvisitFocus={willvisitFocus}
        shiftStar={shiftStar}
        changeStar={changeStar}
      />
      <Legend
        visitedFocus={visitedFocus}
        setVisitedFocus={setVisitedFocus}
        willvisitFocus={willvisitFocus}
        setWillvisitFocus={setWillvisitFocus}
      />
    </main>
  );
}
  
export default Graphic;