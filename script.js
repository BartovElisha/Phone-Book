
let personsNumber = 1;
let personsArray = [];

class Person {
    constructor(firstName,lastName,age,idNumber,mobilePhone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.idNumber = idNumber;
        this.mobilePhone = mobilePhone;
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

    AddPersonDataToTableRow(person);  
    personsArray[personsNumber] = person;
    personsNumber++;  
}

function AddPersonDataToTableRow(person) {

    const tableElement = document.getElementById('persons-table');

    // Add person data to Table elements
    tableElement.innerHTML +=  `<tr>
                                    <th scope="row">${personsNumber}
                                    <td>${person.firstName}</td>
                                    <td>${person.lastName}</td>
                                    <td>${person.age}</td>
                                    <td>${person.idNumber}</td>
                                    <td>${person.mobilePhone}</td>
                                </th>`;
}