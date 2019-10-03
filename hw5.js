// Q1.READ ALL THE INSTRUCTIONS CAREFULLY
  // Select all the list items on the page and convert to array (array from)

    const itemsList = document.querySelectorAll('li');
    const itemsListArray = Array.prototype.slice.call(itemsList);
    console.log(itemsListArray);
    
  // Filter for only the elements that contain the word 'Flexbox' hint use textContent (filter method)

    const itemsListFlexbox = itemsListArray.filter(item => {
      item = item.textContent;
      return item.includes('Flexbox') == true;
    });

    console.log(itemsListFlexbox);

  // map down to a list of time strings Hint look up dataset mdn and think 'time'... you will need to create a new variable called filtered 

    const itemsListTimestamp = itemsListArray.map(item => {
      const timeStamp = item.dataset.time;
      return timeStamp;
    });

    console.log(itemsListTimestamp);
  
  // map to an array of seconds, 
    
    const itemsListTimestampSeconds = itemsListTimestamp.map(timeCode => {
      const parts = timeCode.split(':');
      //console.log(parts);
      return Number(parts[0]*60) + Number(parts[1]);
    })

    console.log(itemsListTimestampSeconds);

    const itemsListTimestampTotal = itemsListTimestampSeconds.reduce((accumulator , currentValue) => accumulator + currentValue);
    console.log (itemsListTimestampTotal);

    const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
    const numbersFiltered = numbers.map(num => num > 70);
    console.log(numbersFiltered);