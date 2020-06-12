function processData(input) {
    
    // Declaring FIFO queue
    let fifo = [];

    // Queries
    let queries = input.split('\n').slice(1).map(elem => elem.split(' '));

    // Iterating throught queries
    for(let i = 0; i < queries.length; i ++){

        if(queries[i][0] === '1') fifo.push(queries[i][1]);
        if(queries[i][0] === '2') fifo.splice(0, 1);
        if(queries[i][0] === '3') console.log(fifo[0]);

    }

} 