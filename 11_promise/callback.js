// A callback function is a function you
//  pass as an argument to another function so 
// that it can be called back (executed)
//  after something else has happened.



function getData(callback) {
    setTimeout(() => {          // Simulates a delay of 1 second
      console.log("Data fetched from the server");
      callback();
    }, 1000);
  }
  
  function displayData() {
    console.log("Displaying the data now!");
  }
  
  // Calling getData with displayData as the callback
  getData(displayData);
  
  // Output (after 1 second delay):
  // Data fetched from the server
  // Displaying the data now!
  