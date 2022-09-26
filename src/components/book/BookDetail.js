import Book from './Book';
import { useBookDetail } from '../../hooks/useBookDetail';
import { useParams } from 'react-router-dom';

function BookDetail() {
  const id = useParams();
  console.log('1', id);
  const { book, loading, error } = useBookDetail(id);
  console.log('3', book);
  if (error)
    return (
      <>
        <h1>Something went wrong :</h1> <h2>{error}</h2>
      </>
    );

  if (loading) return <h3>Loading book...</h3>;

  return <Book book={book} showDetail />;
}

export default BookDetail;
