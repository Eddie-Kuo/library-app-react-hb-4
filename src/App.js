import BookList from './components/book/BookList';
import './App.css';
import Home from './components/home/Home';
import { Route } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Route exact path="/" component={Home} />
      {/* <Route path="/booklist/:id" component={BookDetail} /> */}
      <Route path="/booklist" component={BookList} />
      {/* <Route path="*" component={Error} /> */}
    </main>
  );
}

export default App;
