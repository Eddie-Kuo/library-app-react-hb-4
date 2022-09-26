import { Link } from 'react-router-dom';
import Book from '../../components/book/Book';
import { useBooks } from '../../hooks/useBooks';

function BookList() {
  const { error, loading, books } = useBooks();
  if (error)
    return (
      <>
        <h1>Something went wrong :</h1> <h2>{error}</h2>
      </>
    );
  if (loading) return <h1>Loading books...</h1>;
  return (
    <>
      <h3><Link to="/" className='home' >Return Home</Link></h3>
      <ul className="book-list" aria-label="book list">
        {books.map((book) => (
          <li key={book.book_id}>
            <Link key={book.book_id} to={`/booklist/${book.book_id}`}>
              <Book book={book} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookList;
