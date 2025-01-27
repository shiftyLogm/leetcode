const divisors = (integer) => {

    let arrDivisors = []

    for (let idx = 2; idx < integer; idx++) {
        if (integer % idx == 0) arrDivisors.push(idx)
    }

    return arrDivisors.length > 0 ? arrDivisors : integer + " is prime"

}

console.log(divisors(11))