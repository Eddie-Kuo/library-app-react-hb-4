import Book from './Book';
import { useBookDetail } from '../../hooks/useBookDetail';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BookDetail() {
  const { id } = useParams();
  const { book, loading, error } = useBookDetail(id);
  if (error)
    return (
      <>
        <h1>Something went wrong :</h1> <h2>{error}</h2>
      </>
    );

  if (loading) return <h3>Loading book...</h3>;

  return (
    <>
      <h1>Library Catalog</h1>
      <h4><Link to="/booklist">Return to Catalog</Link></h4>
      <Book book={book} showDetail />
    </>
  );
}

export default BookDetail;
