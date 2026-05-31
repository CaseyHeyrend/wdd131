
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

const booksContainer = document.querySelector('main');

articles.forEach(book => {
    const article = document.createElement('article');
    article.className = 'book mobile-only';

    // Meta section
    const metaSection = document.createElement('section');
    metaSection.className = 'book-meta';

    const date = document.createElement('time');
    date.className = 'meta-item date';
    date.textContent = book.date;

    const age = document.createElement('p');
    age.className = 'meta-item age';
    age.textContent = book.ages;

    const genre = document.createElement('p');
    genre.className = 'meta-item genre';
    genre.textContent = book.genre;

    const rating = document.createElement('p');
    rating.className = 'meta-item rating';
    rating.setAttribute(
        'aria-label',
        `${book.stars.length} out of 5 stars`
    );
    rating.setAttribute('role', 'img');
    rating.textContent = book.stars;

    metaSection.append(date, age, genre, rating);

    // Content section
    const contentSection = document.createElement('section');
    contentSection.className = 'book-content';

    const title = document.createElement('h2');
    title.textContent = book.title;

    const details = document.createElement('div');
    details.className = 'book-details';

    const img = document.createElement('img');
    img.src = book.imgSrc;
    img.alt = book.imgAlt;
    img.className = 'book-cover';

    const description = document.createElement('p');
    description.className = 'book-description';
    description.textContent = book.description;

    details.append(img, description);
    contentSection.append(title, details);

    article.append(metaSection, contentSection);
    booksContainer.appendChild(article);
});
