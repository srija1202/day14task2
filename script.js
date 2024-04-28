function thead_tbody_create(tagname,attrname,attrvalue){
  let tab = document.createElement(tagname);
  tab.setAttribute(attrname,attrvalue);
  return tab;
}

function th_create(tagname,attrname,attrvalue,content){
  let th = document.createElement(tagname);
  th.setAttribute(attrname,attrvalue);
  th.innerHTML = content;
  return th;
}
document.addEventListener("DOMContentLoaded", function() {
  let container = document.createElement("div");
  container.className = "container-fluid";
  let row = document.createElement("div");
  row.className = "row";
  
  let section1 = document.createElement("div");
  section1.className = "col";
  
  let section2 = document.createElement("div");
  section2.className = "col";

  let heading1 = document.createElement("h1");
  heading1.id = "title";
  heading1.innerHTML = `<p id='description'>Manipulations With Form</p>`;
  
  let form_section = document.createElement("form");
  form_section.id = "form";
  form_section.className = "form-group";
  form_section.onsubmit = function(event) {
    event.preventDefault();
    myForm();
    form_section.reset();  // Reset the form after submission
  };

  // First Name
  var firstNameDiv = document.createElement('div');
  firstNameDiv.className = 'form-group';
  var labelFirstName = document.createElement('label');
  labelFirstName.setAttribute('for', 'first-name');
  labelFirstName.innerHTML = `First Name <span>*</span>`;
  labelFirstName.id ='name-label';
  var inputFirstName = document.createElement('input');
  inputFirstName.id = 'first-name';
  inputFirstName.type = 'text';
  inputFirstName.required = true;
  inputFirstName.placeholder = "Enter the first name";
  inputFirstName.className = 'form-control';
  firstNameDiv.appendChild(labelFirstName);
  firstNameDiv.appendChild(inputFirstName);

  // Last name
  var lastNameDiv = document.createElement('div');
  lastNameDiv.className = 'form-group';
  var labelLastName = document.createElement('label');
  labelLastName.setAttribute('for', 'last-name');
  labelLastName.innerHTML = `Last Name <span>*</span>`;
  labelLastName.id ='name-label';
  var inputLastName = document.createElement('input');
  inputLastName.type = 'text';
  inputLastName.className = 'form-control';
  inputLastName.required = true;
  inputLastName.placeholder = "Enter the last name";
  inputLastName.id = 'last-name';
  lastNameDiv.appendChild(labelLastName);
  lastNameDiv.appendChild(inputLastName);

  // Address
  var addressDiv = document.createElement('div');
  addressDiv.className = 'form-group';
  var labelAddress = document.createElement('label');
  labelAddress.setAttribute('for', 'address');
  labelAddress.innerHTML = `Address <span>*</span>`;
  labelAddress.id ='name-label';
  var inputAddress = document.createElement('textarea');
  inputAddress.className = 'form-control';
  inputAddress.required = true;
  inputAddress.id = 'address';
  inputAddress.placeholder = "Enter the address";
  addressDiv.appendChild(labelAddress);
  addressDiv.appendChild(inputAddress);

  // Pincode
  var pincodeDiv = document.createElement('div');
  pincodeDiv.className = 'form-group';
  var labelPincode = document.createElement('label');
  labelPincode.setAttribute('for', 'pincode');
  labelPincode.innerHTML = `Pincode <span>*</span>`;
  labelPincode.id ='name-label';
  var inputPincode = document.createElement('input');
  inputPincode.type = 'text';
  inputPincode.className = 'form-control';
  inputPincode.required = true;
  inputPincode.id = 'pincode';
  inputPincode.placeholder = "Enter the pincode";
  pincodeDiv.appendChild(labelPincode);
  pincodeDiv.appendChild(inputPincode);

  // State
  var stateDiv = document.createElement('div');
  stateDiv.className = 'form-group';
  var labelState = document.createElement('label');
  labelState.setAttribute('for', 'state');
  labelState.innerHTML = `State <span>*</span>`;
  labelState.id ='name-label';
  var inputState = document.createElement('input');
  inputState.type = 'text';
  inputState.className = 'form-control';
  inputState.required = true;
  inputState.id = 'state';
  inputState.placeholder = "Enter the state";
  stateDiv.appendChild(labelState);
  stateDiv.appendChild(inputState);

  // Country
  var countryDiv = document.createElement('div');
  countryDiv.className = 'form-group';
  var labelCountry = document.createElement('label');
  labelCountry.setAttribute('for', 'country');
  labelCountry.innerHTML = `Country <span>*</span>`;
  labelCountry.id ='name-label';
  var inputCountry = document.createElement('input');
  inputCountry.type = 'text';
  inputCountry.className = 'form-control';
  inputCountry.required = true;
  inputCountry.id = 'country';
  inputCountry.placeholder = "Enter the country";
  countryDiv.appendChild(labelCountry);
  countryDiv.appendChild(inputCountry);

  // Gender
  var divGender = document.createElement('div');
  divGender.className = 'form-group';
  var labelGender = document.createElement('label');
  labelGender.innerHTML = `Gender <span>*</span>`;
  labelGender.id = 'gender-label';
  var radioMale = document.createElement('input');
  radioMale.type = 'radio';
  radioMale.id = 'Male';
  radioMale.name = 'gender';
  radioMale.value = 'Male';
  var labelMale = document.createElement('label');
  labelMale.setAttribute('for', 'Male');
  labelMale.textContent = 'Male';
  var radioFemale = document.createElement('input');
  radioFemale.type = 'radio';
  radioFemale.id = 'Female';
  radioFemale.name = 'gender';
  radioFemale.value = 'Female';
  var labelFemale = document.createElement('label');
  labelFemale.setAttribute('for', 'Female');
  labelFemale.textContent = 'Female';
  divGender.appendChild(labelGender);
  divGender.appendChild(radioMale);
  divGender.appendChild(labelMale);
  divGender.appendChild(radioFemale);
  divGender.appendChild(labelFemale);
 
  // Choice of Food
  var divFoodChoice = document.createElement('div');
  divFoodChoice.className = 'form-group';
  var labelFoodChoice = document.createElement('label');
  labelFoodChoice.innerHTML = `Choice Of Food <span>*</span>`;
  labelFoodChoice.id = 'checkbox-label';
  divFoodChoice.appendChild(labelFoodChoice);
  var smallFoodChoice = document.createElement('small');
  smallFoodChoice.className = 'form-text text-muted';
  smallFoodChoice.textContent = '(Must choose at least 2 options out of 5.)';
  divFoodChoice.appendChild(smallFoodChoice);
  
  // Checkbox options for food
  var foodOptions = ['Pizza', 'Pasta', 'Salad', 'Burger', 'Sushi'];
  foodOptions.forEach(function(food) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = food.toLowerCase();
    checkbox.name = 'food';
    checkbox.value = food;
    var label = document.createElement('label');
    label.setAttribute('for', food);
    label.textContent = food;
    divFoodChoice.appendChild(checkbox);
    divFoodChoice.appendChild(label);
  });

  // Button
  var buttonSubmit = document.createElement('button');
  buttonSubmit.id = 'submit'
  buttonSubmit.type = 'submit';
  buttonSubmit.className = 'btn btn-primary';
  buttonSubmit.textContent = 'Submit';
  buttonSubmit.setAttribute('onclick','myForm()');

  let heading2 = document.createElement("h1");
  heading2.innerHTML = "Table Details";

  let table_tag = thead_tbody_create("table","class","table table-striped table-bordered");
  let thead = thead_tbody_create("thead","class","thead-dark");
  
  let new_row1 = document.createElement("tr");
  
  let th1 = th_create("th","scope","col","First Name");
  let th2 = th_create("th","scope","col","Last Name");
  let th3 = th_create("th","scope","col","Address");
  let th4 = th_create("th","scope","col","Pincode");
  let th5 = th_create("th","scope","col","Gender");
  let th6 = th_create("th","scope","col","Food");
  let th7 = th_create("th","scope","col","State");
  let th8 = th_create("th","scope","col","Country");
  
  let tbody = thead_tbody_create("tbody","id","table_data");

  form_section.append(firstNameDiv, lastNameDiv, addressDiv, pincodeDiv, divGender, divFoodChoice, stateDiv, countryDiv, buttonSubmit);
  
  section1.append(heading1,form_section);
  
  new_row1.append(th1,th2,th3,th4,th5,th6,th7,th8);
  thead.append(new_row1);
  
  table_tag.append(thead,tbody);
  
  section2.append(heading2,table_tag);
  
  row.append(section1, section2);
  
  container.appendChild(row);
  document.body.append(container);

  function myForm() {
    let firstname = document.getElementById("first-name").value;
    let lastname = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let select_gender = document.querySelector("input[name='gender']:checked");
    let gender = select_gender ? select_gender.value : '';

    let choosefood = document.querySelectorAll("input[name='food']:checked");
    if (choosefood.length < 2) {
      alert("Please select at least 2 foods.");
      return;
    }
    let food = Array.from(choosefood).map(option => option.value).join(", ");
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    let table = document.getElementById("table_data");
    let new_row = table.insertRow();
    let cell1 = new_row.insertCell(0);
    let cell2 = new_row.insertCell(1);
    let cell3 = new_row.insertCell(2);
    let cell4 = new_row.insertCell(3);
    let cell5 = new_row.insertCell(4);
    let cell6 = new_row.insertCell(5);
    let cell7 = new_row.insertCell(6);
    let cell8 = new_row.insertCell(7);
    cell1.textContent = firstname;
    cell2.textContent = lastname;
    cell3.textContent = address;
    cell4.textContent = pincode;
    cell5.textContent = gender;
    cell6.textContent = food;
    cell7.textContent = state;
    cell8.textContent = country;
  }
});