import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import * as metricStyles from '../../styles/trips/metrics.module.css';
import { starToPath } from '../../constants/trips/geo';

const Metrics = ({ locs, setLocs, setShiftStar, setChangeStar }) => {

  let data = useStaticQuery(graphql`
    query {
      allFavoritesData {
        edges {
          node {
            place
            type
            rank
          }
        }
      }
    }
  `)

  data = data.allFavoritesData.edges;

  useEffect(() => {
    let st = data.filter(function(d) {return d.node.type === 'state'})
    let ci = data.filter(function(d) {return d.node.type === 'city'})
    let si = data.filter(function(d) {return d.node.type === 'site'})

    st = st.sort((a, b) => parseFloat(a.rank) - parseFloat(b.rank));
    ci = ci.sort((a, b) => parseFloat(a.rank) - parseFloat(b.rank));
    si = si.sort((a, b) => parseFloat(a.rank) - parseFloat(b.rank));

    st = { key: 'state', title: 'Favorite States', data: st }
    ci = { key: 'city', title: 'Favorite Cities', data: ci }
    si = { key: 'site', title: 'Favorite Sites', data: si }

    setLocs([st, ci, si])

    return () => {
      setLocs(null)
    }
  }, [data, setLocs]);

  const handleShiftStar = (e) => {
    let place = e.target.dataset.place
    if (place != null) {
      place = place.toLowerCase().replace(/ /,'-');
      setShiftStar(place);
      setChangeStar('add');
    }
  }

  const handleShiftStarOff = () => {
    setChangeStar('remove');
  }

  let jsx;

  if (locs) {
    jsx = (
      <div className={metricStyles.container}>
        {
          locs.map(l => {
            return (
              <div className={metricStyles[l.key]} key={l.key}>
                <div className={metricStyles.title}>
                  {l.title}
                </div>
                <div>
                  {
                    l.data.map(loc => {
                      const starPath = starToPath(0, 0);
                      return (
                        <div
                          className={metricStyles.loc}
                          key={loc.node.rank}
                        >
                          <svg viewBox='0 0 16 16' className={metricStyles.icon} xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d={starPath}
                              data-place={loc.node.place}
                              onMouseOver={loc.node.type !== 'state' ? handleShiftStar : null}
                              onMouseOut={loc.node.type !== 'state' ? handleShiftStarOff : null}
                            />
                          </svg>
                          <div className={metricStyles.description}>
                            {loc.node.place}
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    )
  } else {
    jsx = <p></p>
  }

  return (
    jsx
  )
}
  
export default Metrics;