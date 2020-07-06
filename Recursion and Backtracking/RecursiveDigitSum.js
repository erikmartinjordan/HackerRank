function digitSum(n, k) {

    // Transforming number into string
    let string = n.toString();

    // Getting the starting sum 
    let sum = k * [...string].reduce( (acc, elem) => acc += parseInt(elem), 0);

    // Sum to string
    let sumString = sum.toString();

    // Iterating until only one digit left
    while(sumString.length > 1){

        // Sum of digits
        sum = [...sumString].reduce( (acc, elem) => acc = acc + parseInt(elem), 0);

        // Sum of digist to string
        sumString = sum.toString();

    }

    // Returning res
    return sum;

}