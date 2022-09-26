import './App.css';
import Home from './components/home/Home';
import { Route, Switch } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';
import BookList from './components/book/BookList';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/booklist/:id" component={BookDetail} />
        <Route path="/booklist" component={BookList} />
        {/* <Route path="*" component={Error} /> */}
      </Switch>
    </main>
  );
}

export default App;
