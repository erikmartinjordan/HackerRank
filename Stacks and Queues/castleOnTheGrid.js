// Complete the minimumMoves function below.
function minimumMoves(grid, startX, startY, goalX, goalY){

    // Array defining directions
    let directions = [];

    // Queue of different paths until reaching the goal
    let paths = [];

    // Queue of next points to visit
    let queue = {left: [], right: [], up: [], down: []};

    // Transforming grid into matrix
    let matrix = grid.map(string => [...string]);

    // Defining visited nodes; false by default
    let visited = grid.map(string => [...string].map(visited => false));

    // Defining current position
    let currentX = startX;
    let currentY = startY;
    let rows     = grid.length;
    let cols     = grid[0].length;

    // Defining moving function
    while( (currentX === startX && currentY === startY) || queue.left.length > 0 || queue.right.length > 0 || queue.up.length > 0 || queue.down.length > 0){

        // Getting current point
        if(queue.left.length > 0)       [currentX, currentY] = queue.left.shift();
        else if(queue.right.length > 0) [currentX, currentY] = queue.right.shift();
        else if(queue.up.length > 0)    [currentX, currentY] = queue.up.shift();
        else if(queue.down.length > 0)  [currentX, currentY] = queue.down.shift();

        // Check if arrived to goal
        if(currentX === goalX && currentY === goalY) {

            paths.push(directions);
            directions = [];
            
        }

        // Visited point 
        visited[currentX][currentY] = true;

        // Moving up
        if(currentX - 1 > -1  && matrix[currentX - 1][currentY] !== 'X' && !visited[currentX - 1][currentY]){
            queue.left.push([currentX - 1, currentY]);
            directions.push('up');
        }

        // Moving down
        if(currentX + 1 < cols   && matrix[currentX + 1][currentY] !== 'X' && !visited[currentX + 1][currentY]){
            queue.right.push([currentX + 1, currentY]);
            directions.push('down');
        }

        // Moving left
        if(currentY - 1 > -1  && matrix[currentX][currentY - 1] !== 'X' && !visited[currentX][currentY - 1]){
            queue.up.push([currentX, currentY - 1]);
            directions.push('left');
        }

        // Moving bottom
        if(currentY + 1 < rows   && matrix[currentX][currentY + 1] !== 'X' && !visited[currentX][currentY + 1]){
            queue.down.push([currentX, currentY + 1]);
            directions.push('right');
        }

    }

    // Getting number of moves for each path until achieve the goal
    let moves = paths.map(array => array.reduce( (acc, elem, index) => array[index] !== array[index + 1] ? acc = acc + 1 : acc, 0));

    // Returning minimum number of moves
    return Math.min(...moves);

}