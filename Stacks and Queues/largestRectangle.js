function largestRectangle(h) {

    // Declaring maxArea
    let maxArea = 0;

    // Declaring rectangles array, each element will determine [left, right] of rectangle
    let rectangles = [];

    // Rectangles that we don't know where they start or finish: 'To be determined'
    let incomplete = [];

    // Iterating through array
    for(let i = 0; i < h.length; i ++){

        // We know where a rectangle starts, but we don't know where it finishes
        rectangles[i] = [i, 'To be determined'];

        // If current rectangle is shorter than previous, we can determine the right limit of the previous
        while(i > 0 && h[i - 1] > h[i] && h[incomplete[incomplete.length - 1]] > h[i]){
            
            // We have stored the last incompleted triangle, so we take it out
            let incompleted = incomplete.pop();

            // We can determine the right limit of it
            rectangles[incompleted] = [rectangles[incompleted][0], i - 1];

            // We know the current left limit of the current rectangle, but we don't know the right limit
            rectangles[i] = [incomplete.length > 0 ? incomplete[incomplete.length  - 1] + 1 : 0, 'To be determined'];

        }

        // We push incompleted rectangle
        incomplete.push(i);

    }

    // At this point we will have a rectangles array
    // Example:
    // Rectangles = [[0, 3], [2, 5] ... [3, 'To be determined'], [5, 'To be determined']]
    // Area[0] = (3 - 0 + 1) * h[0]
    // Area[1] = (5 - 2 + 1) * h[1]
    // 'To be determined' elements are now h.length - 1 since we arrive to the end of array
    for(let i = 0; i < h.length; i ++){

        // Defining parameters to calculate area
        let left   = rectangles[i][0];
        let right  = rectangles[i][1] === 'To be determined' ? h.length - 1 : rectangles[i][1];
        let height = h[i];

        // Here we can calculate new area
        let area = (right - left + 1) * height;

        // Defining maxArea
        if(area > maxArea) maxArea = area;

    }

    // Returning max area
    return maxArea;

}