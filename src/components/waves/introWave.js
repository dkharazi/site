import React, { useRef, useEffect, useMemo } from 'react';
import { line, curveNatural } from "d3-shape";
import { timer } from "d3-timer";
import { select } from 'd3-selection';
import * as waveStyles from '../../styles/waves/waves.module.css';

function IntroWave() {
    const shift = 2 * Math.PI / 3;
    const speed = 1 / 1000;
    const frequency = 16;
    const amplitude = 32;
    const height = 250;
    const width = 800;
    const radius = Math.min(width, height) / 1.5 - amplitude * 2;

    const idxPoints = useMemo(() => {
        const p = [];
        for (let i=2; i<104; i+=2) {
            p.push(i);
        }
        return p;
    }, []);

    const curveFunc = line()
                .curve(curveNatural)
                .x((d, i) => idxPoints[i] * 2 * Math.PI)
                .y(d => d);

    const canvasRef = useRef(null);

    useEffect(() => {

        const buildWave = (canvasRef) => {
            let svg = select(canvasRef.current).select('svg').style("width", width + 'px').style("height", height + 'px');
    
            let cynPath = svg.append('path').attr("fill", "none").attr("stroke", "cyan").style("mix-blend-mode", "multiply").attr("stroke-width", "0.8rem").attr("stroke-linecap", "round");
            let magPath = svg.append('path').attr("fill", "none").attr("stroke", "magenta").style("mix-blend-mode", "multiply").attr("stroke-width", "0.8rem").attr("stroke-linecap", "round");
            let yelPath = svg.append('path').attr("fill", "none").attr("stroke", "yellow").style("mix-blend-mode", "multiply").attr("stroke-width", "0.8rem").attr("stroke-linecap", "round");
    
            timer(time => {
                const cynPoints = [];
                const magPoints = [];
                const yelPoints = [];
    
                // Push cyan points
                for (const m of idxPoints) {
                    const a = m * 2 * Math.PI / 250;
                    const t = time * speed;
                    const c = Math.cos(a * frequency - 1 * shift + t);
                    const p = Math.pow((1 + Math.cos(a - t)) / 2, 3);
                    cynPoints.push(radius + amplitude * c * p);
                }
    
                // Push magenta points
                for (const m of idxPoints) {
                    const a = m * 2 * Math.PI / 250;
                    const t = time * speed;
                    const c = Math.cos(a * frequency - 2 * shift + t);
                    const p = Math.pow((1 + Math.cos(a - t)) / 2, 3);
                    magPoints.push(radius + amplitude * c * p);
                }
    
                // Push yellow points
                for (const m of idxPoints) {
                    const a = m * 2 * Math.PI / 250;
                    const t = time * speed;
                    const c = Math.cos(a * frequency - 3 * shift + t);
                    const p = Math.pow((1 + Math.cos(a - t)) / 2, 3);
                    yelPoints.push(radius + amplitude * c * p);
                }
    
                cynPath.attr("d", curveFunc(cynPoints));
                magPath.attr("d", curveFunc(magPoints));
                yelPath.attr("d", curveFunc(yelPoints));
            })
        }

        buildWave(canvasRef)
        
    }, [canvasRef, curveFunc, idxPoints, radius, shift, speed])

    return (
        <div ref={canvasRef}>
            <svg className={waveStyles.image} />
        </div>
    )
}

export default IntroWave;
