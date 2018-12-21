// const - constant
// let - variable
// var - old variable

const a = parseFloat(prompt('a'));
const b = parseFloat(prompt('b'));
const c = parseFloat(prompt('c'));

function quadraticEquation (a, b, c) {
    const d = b * b - 4 * a * c;
    
    if (d > 0) {
        const x1 = ( -b + Math.sqrt(d)) / (2 * a);
        const x2 = ( -b - Math.sqrt(d)) / (2 * a);
        return ' This equation has two results : x1 = ' + x1 + ', x2= ' + x2;
    } else if (d === 0) {
        const x = -b / (2 * a);
        return ' This equation has one result : x = ' + x;
    } else if (d < 0) {
        return 'This equation don`t have any result';
    }
}
alert(quadraticEquation(a, b, c));