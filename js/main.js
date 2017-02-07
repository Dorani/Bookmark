//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(event){
  //Get form values
  var siteName = document.getElementById('siteName');

  //prevent form from submitting
  event.preventDefault();
}
