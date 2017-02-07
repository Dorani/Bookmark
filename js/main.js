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
  //test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null){
    //init array
    var bookmarks = [];
    //add to array
    bookmarks.push();
    //set to localStorage
    //json array and turn it into a string before it gets saved in local storage
    localStorage.setItem('bookmarks', JSON.stringigy(bookmarks));
  } else { //if there is something in bookmark
    //fetch it from local storage
    //create var that takes in the string that gets parsed back into json
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //add bookmark to array
    bookmarks.push(bookmark);
    //set it back to localStorage
    localStorage.setItem('bookmarks', JSON.stringigy(bookmarks));


  }

  //prevent form from submitting
  event.preventDefault();
}
