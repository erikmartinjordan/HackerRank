function maxCircle(queries) {

    // Defining variables
    let root = {};
    let size = {};
    let res  = [];
    let newSize;
    
    // Defining mergeGroups function
    const mergeGroups = (r0, r1) => {
    
        // Changing the root of one of the groups
        root[r1] = r0;

        // Size of the group increases
        size[r0] += size[r1];

        // Size of the old root group becomes zero
        size[r1] = 0;
        
        // Returning size of the new group
        return size[r0];
    
    }
    
    // Defining getRoot function
    const getRoot = (friend) => {
    
        // If friend has root, find it iterating through root
        if(root[friend]){
            
            // Roots satisfy root[friend] === friend
            while(root[friend] !== friend){
                
                friend = root[friend];
                
            }
        
        }
        // Otherwise, create new group with friend as root
        else{
            
            root[friend] = friend;
            size[friend] = 1;
            
        }
        
        return root[friend];
    
    }
    
    // Iterating through queries
    for(let i = 0; i < queries.length; i ++){
        
        // Reading friends for each query
        let friends = [queries[i][0], queries[i][1]];
        
        // Getting roots of both friends
        let r = [getRoot(friends[0]), getRoot(friends[1])];
        
        // If roots are different, we need to merge both groups
        if(r[0] !== r[1]){
        
            newSize = mergeGroups(r[0], r[1]);
        
        }
        
        // Pushing max group size
        res.push(Math.max(newSize, res.length > 0 ? res[res.length - 1] : 2));
        
    }
    
    return res;
    
}