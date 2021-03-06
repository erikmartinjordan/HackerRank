function roadsAndLibraries(n, c_lib, c_road, cities) {

    // Defining total cost
    let totalCost = 0;

    // If is cheaper to build a library
    if(c_lib <= c_road){

        totalCost = n * c_lib;

    }
    else{

        // Defining land as an array of cities
        let land = [];

        // Defining city
        let city = (number, connections) => ({number: number, connections: connections});

        // Pushing cities to land
        for(let i = 0; i < n; i ++){

           land.push(city(i, []));

        }

        // Looping thorugh cities
        for(let i = 0; i < cities.length; i ++){

           let left  = cities[i][0];
           let right = cities[i][1];

           land[left  - 1].connections.push(right - 1);
           land[right - 1].connections.push(left - 1);

        }

        // Visiting all the cities
        const exploreNearCities = (start, visited) => {
    
            // Setting visited to true
            visited.cities[start] = true;
            visited.counter ++;

            // While there are cities to go nearby
            while(land[start].connections.length > 0){
                
                let nextCity = land[start].connections.shift();

                if(!visited.cities[nextCity])
                    exploreNearCities(nextCity, visited);

            }

            // Returning object of cities
            return visited;
                
        }

        // visited: count explored cities and array of visited cities
        // nextCity: next city to visit
        let visited  = {counter: 0, cities: Array(n).fill(false)};

        // While there are cities to explore
        for(let nextCity = 0; nextCity < visited.cities.length; nextCity ++){

            if(visited.cities[nextCity] === false){
            
                // Getting an array of visited cities
                visited = exploreNearCities(nextCity, visited);

                // We have a library for every group of cities and roads = cities - 1          
                totalCost += c_lib + (visited.counter - 1) * c_road;

                // Resetting counter
                visited.counter = 0;

            }

        }

    } 

    // Returning total cost
    return totalCost;

}