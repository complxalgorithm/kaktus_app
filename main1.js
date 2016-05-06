// To allow menu to dropdown
$(document).ready(function() {
    $("#dropdownMenu1").dropdown();
});

// Convert to .txt file
function txtDoc1() {
  var text = document.getElementById("text").value;
  var filename = document.getElementById("text-filename").value;
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename);
}
