import buildFormula from '../../constants/waves/buildFormula';
import { line, curveNatural } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import { timer } from 'd3-timer';

class WaveBuilder {
    constructor(waves, position=2) {
        this.waves = waves;
        this._position = position;
        this._time = 0;
        this._speed = 1;
        this._svgHeight = 0;
        this._svgWidth = 0;
        this._derivedPoints = buildFormula(waves);  // now build formula in points function?
    }

    get svgVerticalShift() {
        return this._svgHeight / this._position;
    }

    get points() {  // need to fix this -- loop through each wave to calculate ys, create array for each wave, then add up numpoints and array for each index at end
        let p = [];
        let dx = this._derivedPoints;
        for (let e of dx) {
            p.push({
                "x": this._x(e),
                "y": this._y(e)
            });
        }
        return p;
    }

    _x(d) {
        return this._scale(d);
    }

    _y(d, waves) {
        let y = 0;
        for (let w of this.waves) {
            y = y + w.formula(d, w._svgHeight, w._amplitude, w._frequency, this._time, this._speed);
        }
        y = y + this.svgVerticalShift;
        return y;
    }

    _scale(d) {
        return scaleLinear().domain([0, 2*Math.PI]).range([0.02*this._svgWidth, 0.98*this._svgWidth])(d);
    }

    setSize(height, width) {
        this._svgHeight = height;
        this._svgWidth = width;
        return this;
    }

    animate(speed=1) {
        this._time = 1;
        this._speed = speed;
        return this;
    }

    apply(...selection) {
        selection = selection[1][0];
        let curveFunc = line()
                            .curve(curveNatural)
                            .x(function(d) { return d.x; })
                            .y(function(d) { return d.y; });
        selection = selection.append("path");
        if (this._time) {
            timer((time) => {
                this._time = time;
                selection = selection.attr("d", curveFunc(this.points));
            });
        } else {
            selection = selection.attr("d", curveFunc(this.points));
        }
        selection.attr("fill", "none")
            .attr("stroke", "#8838a7")
            .attr("stroke-width", "1rem")
            .attr("stroke-linecap", "round");
    }
}

export default WaveBuilder;