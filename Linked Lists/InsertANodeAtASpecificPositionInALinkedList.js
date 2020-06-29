function insertNodeAtPosition(head, data, position) {

    // Defining next element
    let nextElement = head;
    
    // Iterating through list
    for(let i = 0; i < position; i ++){
        
        // If we arrive to position to insert
        if(i === position - 1){
            
            // Create new list
            let lastPart = new SinglyLinkedListNode();
            
            // Insert data and list until the end
            lastPart.data = data;
            lastPart.next = nextElement.next;
            
            // Modify current list
            nextElement.next = lastPart;

        }
        // Moving forward 
        else
            nextElement = nextElement.next;
        
    }
    
    return head;
    
}