function findMergeNode(headA, headB) {

    // Declaring two empty arrays
    let arrA = [];
    let arrB = [];

    // Exploring linked lists A & B
    let currentA = headA;
    let currentB = headB;

    while(currentA || currentB){

        // Getting data from linked list A
        // Inserting it into array
        if(currentA && currentA.data) {

            arrA.push(currentA.data);
            currentA = currentA.next;

        }
        // Getting data from linked list B
        // Inserting it into array
        if(currentB && currentB.data) {
            
            arrB.push(currentB.data);
            currentB = currentB.next;
        
        }

    }

    // Declaring result
    let res = null;

    // Comparing two last values of each array until they are different
    while(arrA.length > 1 || arrB.length > 1){

        let valueA = arrA.pop();
        let valueB = arrB.pop();

        if(valueA === valueB) res = valueA;
        else break;

    }

    // Returning result
    return res;

}