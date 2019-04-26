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
     var foundTraits = searchByTrait(people);
     mainMenu(foundPerson, people);
      break;
      default:
    app(people); // restart app
      break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(foundPerson, people,){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!foundPerson){
    alert("Could not find that individual.");
    return app(people,foundPerson); // restart
  }

  var displayOption = prompt("Found " + foundPerson[0].firstName + " " + foundPerson[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(foundPerson);
    // TODO: get person's info
    displayPerson(foundPerson);
    break;
    case "family":
    // TODO: get person's family
    displayPerson()

    break;
    case "descendants":
    // TODO: get person's descendants
    displayPerson()

    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(foundPerson, people); // ask again
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
  personInfo += "Parents: " + foundPerson[0].parents + "\n";
  personInfo += "Spouse: " + foundPerson[0].currentSpouse + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}
function displayFamily(foundPerson){
  var personFam = "First Name"
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


function searchByTraits(people){
  var gender = prompt("What is the person's gender?", chars);
  var dob = prompt("What is the person's date of birth?", chars);
  var height = prompt("What is the person's height?", chars);
  var weight = prompt("What is the person's weight?", chars);
  var eyeColor = prompt("What is the person's eye color?", chars);
  var occupation = prompt("What is the person's occupation?", chars);
  // var parents = prompt("Who are the person's parents?", chars);
  // var currentSpouse = prompt("Who is the person's current spouse?", chars);

  var foundTraits = people.filter(function(person){
    if(person.gender === gender || person.dob === dob || person.height === height || person.weight === weight || person.eyeColor === eyeColor
      || person.occupation === occupation){
        return true;
      }
      else{
        return false;
      }
  })
  console.log(foundTraits);
  return foundTraits;
}
