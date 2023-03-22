// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 03/21/2023
// This file contains the JS functions for index.html

"use strict";

// Declare tax amount as the constant
const TAX_RATE = 0.2005;

//This function will calculate someone's salary.
function payButtonClicked () {
 
  // Get the user input
  let hoursWorked = parseFloat(document.getElementById('hours-worked').value)
  let hourlyRate = parseFloat(document.getElementById('hourly-rate').value)

  // Perform mathematical equations
  let totalPay = hoursWorked * hourlyRate
  let taxesPaid = TAX_RATE * totalPay
	let netIncome = totalPay - taxesPaid 
  
  // Display the results
  document.getElementById('total-earnings').innerHTML = "Your pay will be $" + netIncome.toFixed(2)
  document.getElementById('tax-amount').innerHTML = "The government will take $" + taxesPaid.toFixed(2)
}