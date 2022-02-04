// code your solution here

function superbowlWin(record){

    const found = record.find(function(game){
        return game.result === "W"
    
    })
        
    if (found) {
        
            return found.year; 
    }

    
}

