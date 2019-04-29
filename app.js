"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      var foundPerson = searchByName(people);
      mainMenu(foundPerson, people);
      break;
    case 'no':
     var foundTraits = searchByTraits(people);
     mainMenu(foundTraits, people);
      break;
    }
      return app(people); // restart app
  }


// Menu function to call once you find who you are looking for
function mainMenu(foundPerson, foundTraits, people,){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!foundPerson){
    alert("Could not find that individual.");
    return app(foundPerson, foundTraits, people); // restart

  }

  var displayOption = prompt("Found " + foundPerson[0].firstName + " " + foundPerson[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(foundPerson);
    // TODO: get person's info
    break;
    case "family":
    displayFamily(foundPerson);
    // TODO: get person's family
    displayPerson(foundPerson)

    break;
    case "descendants":
    displayDecendents(foundPerson);
    // TODO: get person's descendants
    displayPerson(foundPerson)

    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(foundPerson, foundTraits, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  var foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(foundPerson){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + foundPerson[0].firstName + "\n";
  personInfo += "Last Name: " + foundPerson[0].lastName + "\n";
  personInfo += "Gender: " + foundPerson[0].gender + "\n";
  personInfo += "Dob: " + foundPerson[0].dob + "\n";
  personInfo += "Height: " + foundPerson[0].height + "\n";
  personInfo += "Weight: " + foundPerson[0].weight + "\n";
  personInfo += "Eye Color: " + foundPerson[0].eyeColor + "\n";
  personInfo += "Occupation: " + foundPerson[0].occupation + "\n";

  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}
function findParents(foundPerson, people){          //concider turning into for loop for checking each index
var foundPersonParents = people.filter(function(person){
  if(foundPerson.parents[0] === person.id || foundPerson.parents[1] === person.id){
    return true;
  }
  else{
    return false;
  }
})
  return(foundPersonParents);
}
function findChildren(foundPerson, people){
  var foundPersonChildren = people.filter(function(person){
    if(person.parents[0] === foundPerson.id || person.parents[1] === foundPerson.id){
      return true;
    }
    else{
      return false;
    }
  })
  return(foundPersonChildren);
}
function displayfamily(foundPerson, foundPersonParents){
var personsFamily = foundPerson[0].firstName + "'s family" + "\n";
personsFamily += "Parents are: " +foundPersonParents[0].firstName + " " + foundPersonParents[0].lastName + "/n"
foundPersonParents[1].firstName + " " + foundPersonParents[1].lastName + "\n"
// function displayFamily(foundPerson){
  // var personFam = "People related to: " + foundPerson[0].firstName + " " + foundPerson[0].lastName + "\n";
  // personFam += "parents: " + foundPerson[0].parents + "\n";
  // personFam += "children: " + foundPerson[0].children + "\n";
  // alert(personFam);
}
function displayDecendents(foundPerson){
  var personDecendendents = "Decendents of: " + foundPerson[0].firstName + " " + foundPerson[0].lastName + "\n";
  personDecendendents += "Children: " + foundPerson[0].children + "\n";
  personDecendendents += "Grandchildren: " + foundPerson[0].grandchildren + "\n";
  alert(personDecendendents); 
}
// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

function searchByTraits(foundTraits, people){
  if(!foundTraits){
    alert("Could not find that trait.");
    return app(foundPerson, foundTraits, people);
  }

var foundTraits = ["gender", "dob", "height", "weight", "eyeColor", "occupation"];
foundTraits.toString();
let matchingPeople = people;
var whichTrait = prompt("Which trait would you like to search for? (gender, dob, height, weight, eye color, occupation)");
  switch(whichTrait){
    case "gender":
    matchingPeople = findGender(matchingPeople);
    // function findGender(gender);
    break;
    case "dob":
    // function findDob(dob);
    break;
    case "height":
    // function findHeight(height);
    break;
    case "weight":
    // function findWeight(weight);
    break;
    case "eyeColor":
    // function findEyeColor(eyeColor);
    break;
    case "occupation":
    // function findOccupation(occupation);
    break;
}


function findGender(people){
  var gender = promptFor("What is the person's gender?", chars);
  var foundPeople = people.filter(function(person){
    if(person.gender === gender){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}

// function findDob(){

// }

function findHeight(people){
  var height = promptFor("What is the person's gender?", chars);
  var foundPeople = people.filter(function(person){
    if(person.height === height){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}

function findWeight(people){
  var weight = promptFor("What is the person's gender?", chars);
  var foundPeople = people.filter(function(person){
    if(person.weight === weight){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}

function findEyeColor(people){
  var eyeColor = promptFor("What is the person's gender?", chars);
  var foundPeople = people.filter(function(person){
    if(person.eyeColor === eyeColor){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}

function findOccupation(people){
  var occupation = promptFor("What is the person's gender?", chars);
  var foundPeople = people.filter(function(person){
    if(person.occupation === occupation){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}





    // var gender = prompt("What is the person's gender?", chars);
    // var dob = prompt("What is the person's date of birth?", chars);
    // var height = prompt("What is the person's height?", chars);
    // var weight = prompt("What is the person's weight?", chars);
    // var eyeColor = prompt("What is the person's eye color?", chars);
    // var occupation = prompt("What is the person's occupation?", chars);
  // var parents = prompt("Who are the person's parents?", chars);
  // var currentSpouse = prompt("Who is the person's current spouse?", chars);

    // var foundTraits = people.filter(function(person){
    //   if(person.gender === gender || person.dob === dob || person.height === height || person.weight === weight 
    //     || person.eyeColor === eyeColor || person.occupation === occupation){
    //       return true;
    //     }
    //     else{
    //       return false;
    //     }
    // })
    // return foundTraits;


}
