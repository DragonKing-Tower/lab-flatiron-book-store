const bookStore = {
	name: "Flatbooks Technical Books",
	books: [
		{
			id: 1,
			title: "Eloquent JavaScript: A Modern Introduction to Programming",
			author: "Marjin Haverbeke",
			imageUrl:
				"https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
		},
		{
			id: 2,
			title: "JavaScript & JQuery: Interactive Front-End Web Development",
			author: "Jon Duckett",
			imageUrl:
				"https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg",
		},
		{
			id: 3,
			title: "JavaScript: The Good Parts",
			author: "Douglas Crockford",
			imageUrl:
				"https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
		},
		{
			id: 4,
			title: "JavaScript: The Definitive Guide",
			author: "David Flanagan",
			imageUrl:
				"https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg",
		},
		{
			id: 5,
			title: `You Don’t Know JS`,
			author: "Kyle Simpson",
			imageUrl:
				"https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg",
		},
		{
			id: 6,
			title: "Cracking the Coding Interview",
			author: "Gayle Laakmann McDowell",
			imageUrl:
				"https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg",
		},
	],
};

// Write your code here!

const bookStoreTitle = document.querySelector("#header");
bookStoreTitle.textContent = bookStore.name; //Make the displayed name the bookstore name

bookStore.books.forEach((book) => {
	const bookList = document.querySelector("#book-list");

	//Setting up the book object START
	const bookContainer = document.createElement("li");

	const bookTitle = document.createElement("h3");
	bookTitle.textContent = book.title;

	const bookAuthor = document.createElement("p");
	bookAuthor.textContent = book.author;

	const bookImage = document.createElement("img");
	bookImage.src = book.imageUrl;
	//Setting up the book object items END

	bookContainer.append(bookTitle, bookAuthor, bookImage); //These three put together the book container

	bookList.append(bookContainer); //Places the container onto the DOM
});

const removeMe = document.querySelector("#delete-this");
removeMe.remove();
