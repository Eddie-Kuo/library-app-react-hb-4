import BookList from './components/book/BookList';
import './App.css';
import Home from './components/home/Home';
import { Route } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/booklist" component={BookList} />

    </main>
  );
}

export default App;
