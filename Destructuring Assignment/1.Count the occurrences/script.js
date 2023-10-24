function wordCounter(string) {
    let words = string.split(" ")
    let map = new Map();

    for (let w of words) {
        if (map.has(w)) {
            map.set(w, map.get(w) + 1);
        }
        else {
            map.set(w, 1);
        }
    }
    return map;
}
let Sentence = "I am Aman and I am learning Mern Stack Development from Pw Skills";
console.log(wordCounter(Sentence));






