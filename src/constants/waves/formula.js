const formula = {
    sine: (x, svgHeight, a=0.5, f=2, t=0, c=1) => {
            const amplitude = a * svgHeight / 4;
            const velocity = t * c / 100;
            return amplitude * Math.sin(f * x + velocity);
        }
    }

export default formula;