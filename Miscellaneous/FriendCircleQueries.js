function maxCircle(queries) {

    // Defining array of results
    let res = [];

    // Defining circles and sizes
    let circles = {};
    let sizes   = {};

    // Declaring parent
    let dad;

    // Iterating through queries
    for(let i = 0; i < queries.length; i ++){

        // Getting two friends
        let friends = [queries[i][0], queries[i][1]];

        // Creating new connection in case they both doesn't exist
        if(!circles[friends[0]] && !circles[friends[1]]){
            
            // Assigning dad
            dad = friends[0];
            
            // Assigning new dad to friends
            circles[friends[0]] = circles[friends[1]] = dad;

            // Size of this new group is equal to 2
            sizes[dad] = 2;

        }
        else if(circles[friends[0]] && !circles[friends[1]]){

            // Assigning dad
            dad = circles[friends[0]];

            // Assigning new value
            circles[friends[1]] = dad;

            // Size of this new group increases one
            sizes[dad] ++;

        }
        else if(!circles[friends[0]] && circles[friends[1]]){

            // Assigning dad
            dad = circles[friends[1]];

            // Assigning new value
            circles[friends[0]] = dad;

            // Size of this new group increases one
            sizes[dad] ++;

        }
        else{

            // Assigning dad depending on size 
            dad = circles[friends[0]];

            // Setting counter of friends to zero
            // Adding value to find and replace
            let count = 0;
            let find  = circles[friends[1]];

            // Iterating through object to merge
            Object.keys(circles).forEach(key => {

                if(circles[key] === find) circles[key] = dad; 
                if(circles[key] === dad)  count ++;

            });

            // Updating counter
            sizes[dad] = count;

        }

        // Pushing value to res
        res.length === 0 || sizes[dad] > res[res.length - 1] ? res.push(sizes[dad]) : res.push(res[res.length - 1]);

    }

    // Returning result
    return res;

}