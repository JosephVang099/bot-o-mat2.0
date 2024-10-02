// End of Week have functional code


//  Provided Chores
const chores = [
    {
      description: 'do the dishes',
      eta: 1000,
    },{
      description: 'sweep the house',
      eta: 3000,
    },{
      description: 'do the laundry',
      eta: 10000,
    },{
      description: 'take out the recycling',
      eta: 4000,
    },{
      description: 'make a sammich',
      eta: 7000,
    },{
      description: 'mow the lawn',
      eta: 20000,
    },{
      description: 'rake the leaves',
      eta: 18000,
    },{
      description: 'give the dog a bath',
      eta: 14500,
    },{
      description: 'bake some cookies',
      eta: 8000,
    },{
      description: 'wash the car',
      eta: 20000,
    },
  ];

//   Creating a function within a function, the robot function will conatian all the other functions that assigns the chores,
//   time the robot chores, and create the robot when the user click the button
  
//   Create a function that is for the robot and inside that function,
//   the parameters will be the name and type because it's unique for each robot 
  function Robot(name, type) {
    const robot = [];  // To store the robot name and type after it's created

    // Setting up the robot name and type
    robot.name = name;
    robot.type = type;

    
// Create a function that assign 5 chores to every robot that is created
// then call the function
    function assignChores(choresList) {
        robot.chores = [];
        // Create a for...loop that goes through the list of chores and 
        // only select 5 chores to do for each robot
        // Then the chores would be pushed into the empty array in robot.chores
        for (let i = 0; i < 5; i++) {
            robot.chores.push(choresList[i]);
        }
        
    }
    // This calls the function to start assign chores
    assignChores(chores);



// Create a function to start the chores and complere the chores
// Then loop through the list of chores and mark them one by one to see if it's completed
// Finally get the current task to see what other chores are not done
    function choresStarted() {
        for (let i = 0; i < chores.length; i++) {
            const currentChores = robot.chores[i]; // Get the current chores
        }
    }
    // This calls the function to start the chores
    choresStarted();


// Create another function that sets a time for each chores using the ETA in the chore list
// We should have a wait time to make sure the chores are completed one at a time and not all at once for one robot
// After the ETA time is completed, mark the chore as completed
    function timer() {
        if (chores === 'completed') {
            completion = 'Chore is completed'
        }
        if (eta < robot.chores.eta) {
            setTime = 'Robot still working on chores'
        }
    }
    timer();

  }

// Create a code that I can assign the input from the text box and when I can assign it
// with the click of the button
// Then it can create a new robot with the input text box with the button

    // When the button is clicked
    document.getElementById('createRobot').onclick = function () {
        // it creates the robot with the robot name
            const robotName = document.getElementById('robotName').value;
            console.log(robotName);
    
        // and the type of robot it is
            const robotType = document.getElementById('robotType').value;
    
        // Then it creates a new robot using the createRobot function
        const newRobot = Robot(robotName, robotType);
        // We call the newRobot to be assigned to chores
        newRobot.assignChores();
        
        }
    

  Robot();



//   Resources:
// 
// Front-end -
// https://www.w3schools.com/tags/tag_option.asp
// https://www.w3schools.com/howto/howto_js_dropdown.asp
// 
// Back-end -
// https://eloquentjavascript.net/index.html
// https://stackoverflow.com/questions/5656392/how-to-create-input-type-text-dynamically
// https://stackoverflow.com/questions/9580038/calling-a-function-into-document-getelementbyid
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
