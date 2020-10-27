import nerdamer from './nerdamer/nerdamer';

const buildPoints = (formula) => {
    function calcNums(dx, points) {
        for (let e of dx) {
            let num = e.valueOf();
            if(num<=2*Math.PI) {
                num = Math.round((num + Number.EPSILON) * 100) / 100;
                points.add(num);
            }
        }
    }
    let dx = nerdamer("diff(" + formula + ", x)")
                .solveFor("x")
                .filter(x => x.symbol.multiplier.num.sign === false);
    let dx2 = nerdamer("diff(" + formula + ", x, 2)")
                .solveFor("x")
                .filter(x => x.symbol.multiplier.num.sign === false);
    let p = new Set();
    calcNums(dx, p);
    calcNums(dx2, p);
    p = [...p].sort();
    return p;
}

const buildFormula = (waves) => {
    let formula = '';
    for (let w of waves) {
        formula = formula + w._amplitude + '*sin(' + w._frequency + '*x)+';
    }
    formula = formula.slice(0, -1);
    return buildPoints(formula);
}

export default buildFormula;