function solve(args) {
    let arr = [...args].map(Number),
        x = arr.splice(arr.length - 1, 1),
        n = arr.splice(0, 1),
        minIndex = 0,
        maxIndex = arr.length - 1,
        currentIndex,
        currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = arr[currentIndex];

        if (currentElement < x[0]) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > x[0]) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);