function minimumMoves(grid, startX, startY, goalX, goalY){

    // Queue of next points to visit
    let queue = [];

    // Transforming grid into matrix
    let matrix = grid.map(string => [...string]);

    // Defining visited nodes; false by default
    let visited = grid.map(string => [...string].map(visited => false));

    // Defining distances; infinite by default
    let distance = grid.map(string => [...string].map(distance => Infinity));

    // Defining current position
    let currentX = startX;
    let currentY = startY;

    // Defining rows and cols
    let rows = grid.length;
    let cols = grid[0].length;

    // Adding first position to queue
    queue[0] = [currentX, currentY];
    distance[currentX][currentY] = 0;

    // Defining moving function
    while(queue.length > 0){

        // Current points
        [currentX, currentY] = queue.shift();

        // Current distance
        let currentDistance = distance[currentX][currentY];

        // Visited point 
        visited[currentX][currentY] = true;

        // Defining neighbors
        let neighbors = [];

        // Moving left
        for(let y = currentY - 1; y > -1 && matrix[currentX][y] !== 'X' && !visited[currentX][y]; y --){
            neighbors.push([currentX, y]);
        }

        // Moving right
        for(let y = currentY + 1; y < cols && matrix[currentX][y] !== 'X' && !visited[currentX][y]; y ++){
            neighbors.push([currentX, y]);
        }

        // Moving up
        for(let x = currentX - 1; x > -1 && matrix[x][currentY] !== 'X' && !visited[x][currentY]; x --){
            neighbors.push([x, currentY]);
        }

        // Moving down
        for(let x = currentX + 1; x < rows && matrix[x][currentY] !== 'X' && !visited[x][currentY]; x ++){
            neighbors.push([x, currentY]);
        }

        // Checking neighbors with shortest distance
        neighbors.forEach( ([x, y]) => {
            
            if(distance[x][y] > currentDistance + 1){
                distance[x][y] = currentDistance + 1;
                queue.push([x, y]);
            }

        });

    }

    return distance[goalX][goalY];

}
