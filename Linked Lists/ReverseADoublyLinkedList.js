function reverse(head) {

    // Array of elements
    let elements = [];

    // Defining starting position
    let current = head;

    // Getting the elements of the list
    while(true){

        if(current) 
            elements.push(current.data);
        else
            break;

        current = current.next;

    }

    // Reverse array of elements
    elements.reverse();

    // Defining a new list
    let newList = new DoublyLinkedListNode();

    // Setting starting pointer
    head = newList;

    for(let i = 0; i < elements.length; i ++){

        newList.data = elements[i];
        newList.next = new DoublyLinkedListNode();
        newList.prev = new DoublyLinkedListNode();

        if(i === 0) 
            newList.prev = null;
        if(i !== 0) {
            newList.prev.data = elements[i - 1];
            newList.prev.next = new DoublyLinkedListNode();
            newList.prev.prev = new DoublyLinkedListNode();
        }
        if(i === elements.length - 1) 
            newList.next = null;

        newList = newList.next;

    }

    return head;

}