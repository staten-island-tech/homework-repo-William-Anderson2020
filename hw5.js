// Q1.READ ALL THE INSTRUCTIONS CAREFULLY
  // Select all the list items on the page and convert to array (array from)

    const itemsList = document.querySelectorAll('li');
    const itemsListArray = Array.prototype.slice.call(itemsList);
    //console.log(itemsListArray);
    
  // Filter for only the elements that contain the word 'Flexbox' hint use textContent (filter method)

    function itemsListFlexboxCheck(item){
        if( item.textContent == 'Flexbox'){
            return item;
        } else {
          return false;
        }
    }
    const itemsListFlexbox = itemsListArray.filter(itemsListFlexboxCheck); //?
    console.log(itemsListFlexbox);

  // map down to a list of time strings Hint look up dataset mdn and think 'time'... you will need to create a new variable called filtered 
  
  


  // map to an array of seconds, 
  /* .map(timeCode => {
    const parts = timeCode.split(':').ENTER SOME CODE HERE);
    //console.log(parts); 
    return SOME CODE GOES HERE
}) */

