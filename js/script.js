const searchText = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  searchField.value = '' ;
  const url = `https://openlibrary.org/search.json?q=${searchText} `;
  //console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(data => displaySearchResult(data.docs))

}

const displaySearchResult = books =>{
  const searchResult = document.getElementById('search-result');
  books.forEach(book =>{
    console.log(book);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
     <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
          <div class="card-body">
            <h5 class="card-title">Books name : ${book.title}</h5>
            <p class="card-text"> Author name : ${book.author_name} </p>
            <p>Publish Date: ${book.publish_date}</p>
            <p>Title : ${book.title_suggest}</p>
          </div>
        </div>
    
    `;
    searchResult.appendChild(div)
  })
} 



            
