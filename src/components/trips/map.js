/* eslint no-unused-vars: 0 */

import React, {useEffect} from 'react';
import { select } from 'd3-selection';
import { transition, duration } from 'd3-transition';
import { graphql, useStaticQuery } from "gatsby"
import { geoPath } from "d3-geo";
import * as mapStyles from '../../styles/trips/map.module.css';
import { width, height, projection, colorScale } from '../../constants/trips/map';
import { circleToPath, starToPath } from '../../constants/trips/geo';
import statesJson from '../../data/trips/states.json';

const Map = ({ mapDOM, tooltipDOM, titleDOM, containerDOM, mastDOM, visitedFocus, willvisitFocus, shiftStar, changeStar, setLoadMap }) => {

  let data = useStaticQuery(graphql`
    query {
        allCitiesData {
            edges {
                node {
                    state
                    place
                    hasVisited
                    lat
                    lon
                }
            }
        }
    }
  `)

  data = data.allCitiesData.edges;

  useEffect(() => {
    buildMap(data, mapDOM, tooltipDOM, titleDOM, containerDOM, mastDOM)
    setLoadMap('loaded')
  }, [data, mapDOM, tooltipDOM, titleDOM, containerDOM, mastDOM, setLoadMap])

  useEffect(() => {
    focusPoints(mapDOM, visitedFocus, willvisitFocus)
  }, [mapDOM, visitedFocus, willvisitFocus])

  useEffect(() => {
    transformStar(mapDOM, shiftStar, changeStar)
  }, [mapDOM, shiftStar, changeStar])

  const focusPoints = (mapDOM, visitedFocus, willvisitFocus) => {
    let svg = select(mapDOM.current).select('svg');
    svg.selectAll(`.${mapStyles.circle}`).attr("class", function(d) {
      const city = d.node.place.toLowerCase().replace(/ /,'-');
      const cityClass = d.node.hasVisited==="1" ? `${mapStyles.circle} ${visitedFocus} ${city}` : `${mapStyles.circle} ${willvisitFocus} ${city}`;
      return cityClass;
    })
  }

  const transformStar = (mapDOM, shiftStar, changeStar) => {
    let svg = select(mapDOM.current).select('svg');
    svg.select(`.${shiftStar}`).attr("d", function(d) {
      let cx = projection([d.node.lon, d.node.lat])[0];
      let cy = projection([d.node.lon, d.node.lat])[1];
      let r = 4;
      let path = null;
      path = changeStar === 'remove' ? circleToPath(cx, cy, r) : starToPath(cx-10, cy-10);
      return path;
    })
  }

  const buildMap = (data, mapDOM, tooltipDOM, titleDOM, containerDOM, mastDOM) => {

    // Define path generator
    const path = geoPath()                    // path generator that will convert GeoJSON to SVG paths
                    .projection(projection);  // tell path generator to use albersUsa projection

    let tooltip = select(tooltipDOM.current)
    
    let svg = select(mapDOM.current)
                .append('svg')
                .attr('preserveAspectRatio', 'xMinYMin meet')
                .attr('viewBox', `0 0 ${width} ${height}`);

    // Convert states column to array
    const statesVisited = data.filter(function(d){ return d.node.hasVisited==="1" }).map(function(d){ return d.node.state });

    // Map visited states to json GeoJSON data
    for (var i=0; i<statesJson.features.length; i++) {
      const hasVisited = statesVisited.includes(statesJson.features[i].properties.NAME);
      statesJson.features[i].properties.hasVisited = hasVisited;
    }

    // Plot state paths by binding GeoJSON data to SVG
    svg.selectAll("path")
        .data(statesJson.features)
        .join("path")
        .attr("d", path)
        .attr("class", function(d) { return d.properties.NAME.toLowerCase().replace(/ /,'-'); })
        .style("stroke", "#fff")
        .style("stroke-width", "1")
        .style("fill", function(d, i) {
            return colorScale(d.properties.hasVisited);
        });

    // Plot city paths by binding CSV data to SVG
    svg.selectAll(`path .${mapStyles.circle}`)
        .data(data)
        .join("path")
        .attr("class", function(d) {
            const city = d.node.place.toLowerCase().replace(/ /,'-');
            const cityClass = d.node.hasVisited==="1" ? `${mapStyles.circle} visited-focus ${city}` : `${mapStyles.circle} willvisit-focus ${city}`;
            return cityClass;
        })
        .attr("d", function(d) {
            const cx = projection([d.node.lon, d.node.lat])[0];
            const cy = projection([d.node.lon, d.node.lat])[1];
            const r = 4;
            return circleToPath(cx, cy, r);
        })
        .style("fill", function(d) {
            return (d.node.hasVisited==="1") ? "rgb(217,91,67)" : "rgb(250,250,250)";
        })
        .style("stroke", "rgb(217,91,67)")
        .style("stroke-width", 2)
        .style("opacity", 0.85)
        .on("mouseover", function(event, d) {
          const titleHeight = titleDOM.current.offsetHeight;
          console.log(`titleHeight: ${titleHeight}`)
          const mastHeight = mastDOM.current.offsetHeight;
          console.log(`mastHeight: ${mastHeight}`)
          const containerLeft = containerDOM.current.getBoundingClientRect().left;
          const x = event.pageX;
          const y = event.pageY;
          select(this)
              .transition()
              .attr("d", function(d) {
                  const cx = projection([d.node.lon, d.node.lat])[0];
                  const cy = projection([d.node.lon, d.node.lat])[1];
                  const r = 8;
                  return circleToPath(cx, cy, r);
              });
          tooltip
              .transition()
              .duration(200)
              .style("opacity", .9);
          tooltip
              .text(d.node.place)
              .style("top", `${y-titleHeight-mastHeight-35}px`)  // d3.select(this).attr("cy")
              .style("left", `${x-containerLeft-50}px`);  // d3.select(this).attr("cx")
        })
        .on("mouseout", function(d) {
            select(this)
                .transition()
                .attr("d", function(d) {
                    const cx = projection([d.node.lon, d.node.lat])[0];
                    const cy = projection([d.node.lon, d.node.lat])[1];
                    const r = 4;
                    return circleToPath(cx, cy, r);
                });
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
  }

  return (
    <div className={mapStyles.map} ref={mapDOM}>
      <div className={mapStyles.tooltip} ref={tooltipDOM} />
    </div>
  );
}
  
export default Map;