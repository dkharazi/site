// Convert circle to path
export function circleToPath(cx, cy, r) {
    return `M ${cx} ${cy} m -${r}, 0 a ${r},${r} 0 1,0 ${r*2},0 a ${r},${r} 0 1,0 -${r*2},0`;
}

// Convert star to paths
export function starToPath(x, y) {
    return `M${x+3.612} ${y+15.443}c-.386.198-.824-.149-.746-.592l.83-4.73L${x+.173} ${y+6.765}c-.329-.314-.158-.888.283-.95l4.898-.696L${x+7.538} ${y+.792}c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L${x+8} ${y+13.187}l-4.389 2.256z`;
}