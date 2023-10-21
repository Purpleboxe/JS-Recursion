function fibs (num) {
    let arr = [0, 1];
    let current = 0;

    for (let i = 2; i < num; i++) {
        current = arr[i-1];
        current += arr[i-2];
        arr.push(current);
    }

    return arr;
}

console.log(fibs(8));

function fibsRecursion (num, arr = [0, 1]) {
    if (arr.length >= num) {
        return arr.slice(0, num);
    }

    const current = arr.at(-1) + arr.at(-2);
    arr.push(current);
    return fibsRecursion(num, arr);
}

console.log(fibsRecursion(8));