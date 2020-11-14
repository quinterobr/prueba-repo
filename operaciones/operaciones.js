module.exports = {
    suma(a, b) {
        return a == 0 ? b : a + b;
    },
    resta(a, b) {
        if (a < b) {
            let c = a;
            b = a;
            b = c;
            return a - b;
        }
        return a - b;
    },
    mult(a, b) { return a * b },
    div(a, b) { return a / b }
}