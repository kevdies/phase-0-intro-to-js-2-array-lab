const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = function(name) {
    cats.push(name);
}

const destructivelyPrependCat = function(name) {
    cats.unshift(name);
}

const destructivelyRemoveLastCat = function(name) {
    cats.pop(name);
}

const destructivelyRemoveFirstCat = function(name) {
    cats.shift(name);
}

const appendCat = function(name) {
    const newArr = [...cats, name];
    return newArr;
}

const prependCat = function(name) {
    const newArr2 = [name, ...cats];
    return newArr2;
}

const removeLastCat = function() {
    return cats.slice(0,-1);
}

const removeFirstCat = function() {
    return cats.slice(1);
}

    // console.log(typeof appendCat('henry'));
