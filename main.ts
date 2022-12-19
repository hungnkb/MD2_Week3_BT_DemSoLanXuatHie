let countDisplay = (_numbers: number[], _value: number): number => {
    let counts: number = 0;
    let i = 0;
    while (i < _numbers.length) {
        if (_numbers[i] == _value) {
            counts++;
        }
        i++;
    };
    return counts;
}


console.log(countDisplay([1, 2, 3, 1, 2, 3, 5, 4, 1], 1))
