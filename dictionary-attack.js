var wordsList = [];
var wordMatch = false;
var pw;
var pwOrig;

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

function checkPassword() {

  pw = document.getElementById("mypassword").value;
  pwOrig = pw;

  getVariations();

  for (i=0; i < wordsList.length; i++) {
    if(wordsList[i] === pw) {
      wordMatch = true;
    }
  }
  printResults();
}

function getVariations() {

  pw = pw.toLowerCase();

  pw = pw.replace("4", "a");
  pw = pw.replace("0", "o");
  pw = pw.replace("3", "e");
  pw = pw.replace("6", "g");
  pw = pw.replace("@", "a");
  pw = pw.replace("!", "i");

}

function printResults() {
  if (wordMatch === true) {
    document.getElementById("results").innerHTML = "You need a stronger password than " + pwOrig;
    wordMatch = false;
  }
  else {
    document.getElementById("results").innerHTML = "That password is strong enough.";
  }
}
