const addBookButton = document.querySelector('button.add-new-book');
const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const table = document.querySelector('table');
const submitButton = document.querySelector('button.submit');
const author = document.getElementById('author');

class Book {
    constructor(author, title, pages, read) {

        this.author = author;

        this.title = title;

        this.pages = pages;

        this.read = read;
    }
}

class Library {

    constructor() {
        this.myLibrary = [new Book("Jane Austen", "Pride and Prejudice", 432, true), new Book("George R. R. Martin", "A Game of Thrones", 694, false), new Book("F. Scott Fitzgerald", "The Great Gatsby", 208, true)];
        this.bookIndex = 0;
    }

    display(){

        for(let i = this.bookIndex; i < this.myLibrary.length; i++){

        const tableRow = document.createElement('tr');

            tableRow.setAttribute('data-key', i);

            for(const key in this.myLibrary[i]){
                

                const tableCell = document.createElement('td');
                if(key == "read"){

                    const readButton = document.createElement('button');

                    readButton.textContent = this.myLibrary[i][key];

                    tableCell.appendChild(readButton);

                    readButton.addEventListener('click', function(){


                        if(this.textContent == "true"){

                            this.textContent= "false";
                        }
                        else if(this.textContent == "false"){

                            this.textContent = "true";
                        }
                    })
                }
                else{

                    tableCell.textContent = this.myLibrary[i][key];
                }
                tableRow.appendChild(tableCell);
        }

        const deleteButton = document.createElement('button');
        
        const tableCell = document.createElement('td');

        deleteButton.addEventListener('click', () => {

                this.bookIndex--;

                tableRow.remove();

                this.myLibrary.splice(i, 1);
        })
            deleteButton.textContent = '✖'

            deleteButton.style = "color: red;"

            tableCell.appendChild(deleteButton);

            tableRow.appendChild(tableCell);

            tbody.appendChild(tableRow);
        }
    }

    addBookToLibrary(author, title, pages, userHasRead){

        const newBook = new Book(author, title, pages, userHasRead);

        this.myLibrary.push(newBook);

        this.bookIndex = this.myLibrary.length - 1

        library.display();
    }
}

const library = new Library();

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const title = form.elements['title'].value;
    const pages = form.elements['pages'].value;
    const userHasRead = form.elements['has_read'].value;
    const author = form.elements['author'].value;

    library.addBookToLibrary(author, title, pages, userHasRead)


    form.reset();
})

addBookButton.addEventListener('click', () => {

    form.classList.toggle('active');
})

const authorError = document.querySelector('#mail + span.error')

author.addEventListener('input', function(event){

    if(author.validity.valid){

        authorError.textContent = '';

        authorError.className = 'error';
        
    }
})

library.display();