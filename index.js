// code your solution here





// we want to create a call back function that will evaluate if each result of each object is a win

function superbowlWin(array) {
   //const found = array1.find(element => element > 10);

   let found = array.find(obj => obj.result === "W")
   console.log(found);

   if(found) {
    return found.year;
   }
}

// record.find(superbowlWin).year


