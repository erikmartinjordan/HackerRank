function sortedInsert(head, data) {

    // Last position
    let last = false;

    // Starting position
    let current = head;

    // Iterating through the linked list
    while(true){
        
        // Arrived to last position
        if(last){

            // Creating next list
            current.next = new DoublyLinkedListNode();
            current.next.data = data;
            current.next.next = null;

            // Creating previous list
            current.next.prev = new DoublyLinkedListNode();
            current.next.prev.data = data;
            current.next.prev.prev = current.prev;
            current.next.prev.next = null;
            
            break;
    
        }
        // If current data is greater than previous value
        else if(current.data > data){

            // Creating next list
            let nextList  = new DoublyLinkedListNode();
            nextList.data = current.data;
            nextList.next = current.next;

            // Creating previous list
            nextList.prev = new DoublyLinkedListNode();
            nextList.prev.data = data;
            nextList.prev.next = current.next;
            nextList.prev.prev = current.prev;

            // Reassigning current value
            current.data = data;
            current.next = nextList;
            
            break;

        }
        // Otherwise
        else{

            // Moving forward
            if(current.next)
                current = current.next;
            else
                last = true;

        }

    }

    return head;

}