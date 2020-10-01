import React from 'react';
import legendStyles from '../../styles/trips/legend.module.css';
import { titles, text } from '../../constants/trips/legend';

const Legend = ({ visitedFocus, setVisitedFocus, willvisitFocus, setWillvisitFocus }) => {

  const handleVisitedFocus = () => {
    willvisitFocus === legendStyles.willvisitFocus ? setWillvisitFocus(legendStyles.willvisitUnfocus) : setWillvisitFocus(legendStyles.willvisitFocus);
  }

  const handleWillVisitFocus = () => {
    visitedFocus === legendStyles.visitedFocus ? setVisitedFocus(legendStyles.visitedUnfocus) : setVisitedFocus(legendStyles.visitedFocus);
  }

  const handleVisitedFocusKey = (event) => {
    if (event.key === "Enter") {
      willvisitFocus === legendStyles.willvisitFocus ? setWillvisitFocus(legendStyles.willvisitUnfocus) : setWillvisitFocus(legendStyles.willvisitFocus);
    }
  }

  const handleWillVisitFocusKey = (event) => {
    if (event.key === "Enter") {
      visitedFocus === legendStyles.visitedFocus ? setVisitedFocus(legendStyles.visitedUnfocus) : setVisitedFocus(legendStyles.visitedFocus);
    }
  }

  return (
    <div className={legendStyles.legend}>
      {titles.map(title => {
        return (
          <div className={legendStyles.section} key={title.key}>
            <div className={legendStyles.title}>
              {title.desc}
            </div>
            {text.map(t => {
              let iconClass = `${title.key}${t.key}`;
              let focusCities = (title.key === 'city' && t.key === 'visited') ? 
                handleVisitedFocus :
                  ((title.key === 'city' && t.key === 'willvisit') ? 
                    handleWillVisitFocus :
                      null);
              let focusCitiesKey = (title.key === 'city' && t.key === 'visited') ? 
                handleVisitedFocusKey :
                  ((title.key === 'city' && t.key === 'willvisit') ? 
                    handleWillVisitFocusKey :
                      null);
              return (
                <div
                  className={legendStyles.subsection}
                  key={t.key}
                  role="button"
                  onClick={focusCities}
                  onKeyDown={focusCitiesKey}
                  tabIndex={0}
                >
                  <div className={legendStyles.iconContainer}>
                    <div className={`${legendStyles[iconClass]} ${legendStyles.icon}`} />
                  </div>
                  <div className={legendStyles.description}>
                    {t.desc}
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
  
export default Legend;