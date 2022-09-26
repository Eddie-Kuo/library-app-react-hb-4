import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <h1>Library Catalog</h1>
      <h3>{`Welcome to Dangalf's Library of Computer Science`} </h3>
      <h5>Check out the amazing selection of books in our <Link className='home' to="/booklist" >catalog</Link>.</h5>
    </div>
  );
}
