//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(event){
  console.log('it works!')
  event.preventDefault();
}
