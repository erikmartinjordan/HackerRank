function maxCircle(queries) {

    // Defining array of results
    let res = [];

    // Defining connections and sizes
    let connections = {};
    let sizes = {};

    // Iterating through queries
    for(let i = 0; i < queries.length; i ++){

        // Getting two friends
        let friends = [queries[i][0], queries[i][1]];

        // Creating new connection in case they both doesn't exist
        if(!connections[friends[0]] && !connections[friends[1]]){

            connections[friends[0]] = friends[0];
            connections[friends[1]] = friends[0];

            sizes[friends[0]] = 2;

        }
        else{

            // Merge two groups condition
            let mergeTwoGroups = connections[friends[0]] && connections[friends[1]] ? true : false;

            // Setting values
            connections[friends[0]] = connections[friends[0]] ? connections[friends[0]] : connections[friends[1]];
            connections[friends[1]] = connections[friends[1]] ? connections[friends[1]] : connections[friends[0]];

            // Find and replace values
            let find    = connections[friends[0]] ? connections[friends[1]] : connections[friends[0]];
            let replace = connections[friends[0]] ? connections[friends[0]] : connections[friends[1]];

            // Merging two groups
            if(mergeTwoGroups){

                let counter = 0;

                Object.keys(connections).forEach(key => {

                    if(connections[key] === find)    connections[key] = replace; 
                    if(connections[key] === replace) counter ++;

                });

                sizes[replace] = counter;

            }
            else{

                sizes[replace] ++;

            }

        }

        // Updating max
        let largestGroup = Math.max(...Object.values(sizes));

        // Pushing result
        res.push(largestGroup);


    }

    // Returning result
    return res;

}