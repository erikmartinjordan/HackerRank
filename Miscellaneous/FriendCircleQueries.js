function maxCircle(queries) {

    // Defining array of results
    let res = [];

    // Defining circles and sizes
    let roots = {};
    let sizes = {};

    // Defining root function
    const findRoot = (elem) => {

        if(roots[elem]){
            
            // We find the root
            while(roots[elem] !== elem){
                elem = roots[elem];
            }

        }
        else{

            // If there is no root we assign 
            roots[elem] = elem; 
            sizes[elem] = 1;

        }

        return elem;
       
    }

    // Iterating through queries
    for(let i = 0; i < queries.length; i ++){

        // Getting two friends
        let friends = [queries[i][0], queries[i][1]];

        // Finding roots
        let root = [findRoot(friends[0]), findRoot(friends[1])];

        // If roots are different, we need to union them
        if(root[0] !== root[1]){

            // Union two roots
            roots[root[1]] = roots[root[0]];

            // Increasing sizes properly
            sizes[root[0]] += sizes[root[1]]; 

            // Resetting sizes of root 1
            sizes[root[1]] = 0;

        }

        // Pushing result
        if(res.length === 0) res.push(2);
        else                 res.push(Math.max(res[res.length - 1], sizes[root[0]]))

    }

    // Returning result
    return res;

}