// check if app.js is connected
console.log("Here be app.js, yarr");

// clear form after submission
function clearForm() {
  // let form = document.getElementById("text-area").value;
  let form = document.getElementById("form");
  // console.log(form);
  // document.getElementById("text-area").value = "";
  form.submit();
  form.reset();
  return false;
}

// display stored sales reports
function displaySalesReport() {
    // initialize display variable with target div
    let disp = document.getElementById("salesReps");
    // toggle styling of target div between "none" and "block" display
    if(disp.style.display === "none") {
        disp.style.display = "block";
    } else {
        disp.style.display = "none";
    }
}