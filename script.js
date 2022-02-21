
// Global Variables
let personsNumber = 0;
let personsArray = [];
let tableEmpty = true;

class Person {
    constructor(firstName,lastName,age,idNumber,mobilePhone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.idNumber = idNumber;
        this.mobilePhone = mobilePhone;
    }
}

function init() {
    let storedPersonsData = getPersons();

    if (storedPersonsData) {
        personsArray = storedPersonsData;
        personsNumber = storedPersonsData.length - 1;

        for(let i = 0; i < storedPersonsData.length; i++) {
            addPersonDataToTableRow(storedPersonsData[i], i);
        }
    }
}

// This function gets person data from user
function getPersonData() {

    let person = new Person();

    person.firstName = document.getElementById('validationCustom01').value;
    person.lastName = document.getElementById('validationCustom02').value;
    person.age = document.getElementById('validationCustom03').value;
    person.idNumber = document.getElementById('validationCustom04').value;
    person.mobilePhone = document.getElementById('validationCustom05').value;
    
    // Print person data to table row
    addPersonDataToTableRow(person,personsNumber);
    
    // Add person data to array
    personsArray[personsNumber] = person;
    personsNumber++;  

    // Store persons array to local store
    //storePersons(personsArray);
}

function clearLocalStorage() {
    localstorage.clear();
}

function removeOldPersonsArray() {
    localStorage.removeItem("persons");
}

function storePersons(personsArray) {
    localStorage.setItem('persons', JSON.stringify(personsArray));
}

function getPersons() {
    if(localStorage.getItem('persons')) {
        return JSON.parse(localStorage.getItem('persons'));
    }
}

function addPersonDataToTableRow(person,rowNum) {

    const tableElement = document.getElementById('persons-table');

    tableEmpty = false;

    // Add person data to Table elements
    tableElement.innerHTML +=  `<tr id="table-row">
                                    <th scope="row">${rowNum+1}
                                    <td >${person.firstName}</td>
                                    <td >${person.lastName}</td>
                                    <td >${person.age}</td>
                                    <td >${person.idNumber}</td>
                                    <td >${person.mobilePhone}</td>
                                </th>`;
}

function clearTable(length) {

    // Removing current table rows only if table not empty
    if(!tableEmpty) {
        tableEmpty = true;
        for(let i = 0;i < length; i++) {
            let tableRowElement = document.getElementById('table-row');
            tableRowElement.remove();
        }
    }
    else {
        alert("List Already Empty");
    }
}

function addNewDataToTable(newPersonsArray) {

    // Fiiling table with sorted data
    for(let i = 0;i < newPersonsArray.length; i++) {
        addPersonDataToTableRow(newPersonsArray[i],i);
    }
}

function showOriginalList() {

    clearTable(personsArray.length);
    addNewDataToTable(personsArray);
}

function sortByFirsName() {

    // for debug
     console.log(personsArray);
     console.log(sortedByAgeArray);
}

function sortByAge() {

    // use slice() to copy the array and not just make a reference
    let sortedByAgeArray = personsArray.slice(0);

    sortedByAgeArray.sort(function(a,b) {return a.age - b.age});

    clearTable(sortedByAgeArray.length);
    addNewDataToTable(sortedByAgeArray);
}

function clearPersonsList() {

    let initLength = personsArray.length;

    if(confirm("Are You Shure ?")) {
        clearTable(initLength);

        // Clear Persons Array
        for(let i = 0;i < initLength;i++) {
            personsArray.pop();
        }
        // Clear persons number
        personsNumber = 0;

        // Clear Local storage
        //clearLocalStorage();
    }
}

function togleDisplayDarkLightMode() {
    let bodyElement = document.body;
    let headerElement = document.getElementById('header-dark-mode');
    let formElement = document.getElementById('form-dark-mode');
    let tableElement = document.getElementById('table-dark-mode');
    let DarkSvgiconElement = document.getElementById('icon-dark-mode');
    
    // Body Element update Dark/Light mode
    bodyElement.classList.toggle("bg-dark");

    // Header Element update Dark/Light mode
    headerElement.classList.toggle("bg-dark");
    headerElement.classList.toggle("text-white");
    
    // Form Element update Dark/Light mode
    formElement.classList.toggle("text-white")

    // Table Element update Dark/Light mode
    tableElement.classList.toggle("table-dark")

    // Display mode icon Element update Dark/Light mode
    DarkSvgiconElement.classList.toggle("icon-dark");
}
