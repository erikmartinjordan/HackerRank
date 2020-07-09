function maxCircle(queries) {

    // Defining array of results
    let res = [];

    // Defining circles and sizes
    let circles = {};
    let sizes   = {};

    // Declaring variables
    let dad;
    let find;

    // Iterating through queries
    for(let i = 0; i < queries.length; i ++){

        // Getting two friends
        let friends = [queries[i][0], queries[i][1]];

        // Creating new connection in case they both doesn't exist
        if(!circles[friends[0]] && !circles[friends[1]]){
            
            // Assigning dad
            dad = friends[0];
            
            // Assigning new dad to both friends
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
        else if(circles[friends[0]] !== circles[friends[1]]){

            // Assigning dad depending on size of the group
            // The greater the group we choose, the less replacements we'll need to do later
            dad  = sizes[circles[friends[0]]] > sizes[circles[friends[1]]] ? circles[friends[0]] : circles[friends[1]];

            // Adding value to find and replace
            // It's the opposite from dad's value
            find = sizes[circles[friends[0]]] > sizes[circles[friends[1]]] ? circles[friends[1]] : circles[friends[0]];

            // New group size will be the sum of the oldest and the replacements
            sizes[dad] += sizes[find];

            // Iterating to replace dad
            Object.keys(circles).forEach(key => circles[key] === find ? circles[key] = dad : null);


        }

        // Pushing value to res
        res.push(Math.max(sizes[dad], res[res.length - 1] || 0));

    }

    // Returning result
    return res;

}