let x = 5;
let y = 10;

swap = (a, b) => {
    [a, b] = [b, a];
    return [a, b]
}

[x, y] = swap(x, y);
console.log(x, y);