//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(event){
  //Get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  // local storage test
  localStorage.setItem('test', 'hello world');

  //prevent form from submitting
  event.preventDefault();
}
