// Declare a variable in global scope
var customerName;

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.UpperCase();
  } else {
    console.log();
  }
}

// Function to set a variable in global scope
function setBestCustomer() {
  bestCustomer = "not bob"; 
}

// Function to overwrite a variable in global scope
function overwriteBestCustomer() {
  bestCustomer = "still not bob"; 
}

// Declare a constant in global scope
const leastFavoriteCustomer = "Mark";

// Function attempting to change a constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Bob";
  // It will result in an error 
}

