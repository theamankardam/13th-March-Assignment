extract = (arr) => {
    let [first, second, , , last] = arr;
    return [first, second, last];
}

const arr = [1, 2, 3, 4, 5];
console.log(extract(arr));  