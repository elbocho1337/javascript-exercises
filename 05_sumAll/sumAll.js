const sumAll = function (start, end) {
    let sum = 0
    if (start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number') {
        return "ERROR"
    }
    else {
        if (start < end) {
            for (start; start <= end; start++) {
                sum += start
            }
        }

        else {
            for (end; end <= start; end++)
                sum += end
        }

        return sum
    }

};

// Do not edit below this line
module.exports = sumAll;
