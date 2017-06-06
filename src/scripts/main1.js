// To allow menu to dropdown
$(document).ready(function() {
    $("#dropdownMenu1").dropdown();
});

// Convert to .txt file
function txtDoc1() {
  var form = document.getElementById("text-options");
  var text = document.getElementById("text").value;
  var filename = document.getElementById("text-filename").value;
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});

  // Validate that file extension is .txt and nothing else
  /*
  var re = /(\.txt)$/i;
  if (!re.exec(filename)) {
    alert("This application only supports .txt file downloads.");
  }
  */

  saveAs(blob, filename);
}
