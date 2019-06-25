// check if app.js is connected
console.log("Here be app.js, yarr");

// clear form after submission
function clearForm() {
  //   let form = document.getElementById("text-area").value;
  let form = document.getElementById("form");
  console.log(form);
  //   form = "";
  //   document.getElementById("text-area").value = "";
  form.submit();
  form.reset();
  return false;
}
