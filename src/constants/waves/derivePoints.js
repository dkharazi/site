import nerdamer from './nerdamer/nerdamer';

const derivePoints = (f) => {
    function calcNums(dx, points) {
        for (let e of dx) {
            let num = e.valueOf();
            if(num<=2*Math.PI) {
                num = Math.round((num + Number.EPSILON) * 100) / 100;
                points.add(num);
            }
        }
    }
    let dx = nerdamer("diff(sin(" + f + "*x), x)")
                .solveFor("x")
                .filter(x => x.symbol.multiplier.num.sign === false);
    let dx2 = nerdamer("diff(sin(" + f + "*x), x, 2)")
                .solveFor("x")
                .filter(x => x.symbol.multiplier.num.sign === false);
    let p = new Set();
    calcNums(dx, p);
    calcNums(dx2, p);
    p = [...p].sort();
    return p;
}

export default derivePoints;