import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles'
import Article from './components/Article';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Articles path='/articles' />
        <Article path='/articles/:article_id'/>
        <Comments path = '/articles/:articleid/comments' />
      </Router>
    </div>
  );
}

export default App;
