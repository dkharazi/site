import { geoAlbersUsa } from "d3-geo";
import { scaleOrdinal } from "d3-scale";

// Define height and width for map
export const width = 775;
export const height = 500;

// D3 projection
export const projection = geoAlbersUsa()
                            .translate([width/2.15, height/2])  // translate to center of screen
                            .scale([1000]);                     // scale things down so see entire US

// Define ordinal scale for color output
const scaleText = ['States to Visit', 'States Visited', 'Cities to Visit', 'Cities Visited'];
const scaleColor = ['rgb(213,222,217)', 'rgb(69,173,168)', 'rgb(250,250,250)', 'rgb(217,91,67)'];
export const colorScale = scaleOrdinal().domain(scaleText).range(scaleColor);