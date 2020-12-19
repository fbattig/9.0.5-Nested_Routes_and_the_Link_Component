import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Link,
  useRouteMatch
} from "react-router-dom";
import "./styles.css";

const About = () => {
  const { path, url } = useRouteMatch();
  return (
    <Router>
      <div className="About">
        <h1> About Page </h1>
        <hr />
        <p>Informaion about your app or who you are would go here</p>
      </div>
      <hr />
      <Link to={`${url}`}>About Home</Link>
      &nbsp;
      <Link to={`${url}/contact`}>Contact</Link>
      &nbsp;
      <Link to={`${url}/bio`}>Bio</Link>
      <hr />
      <Switch>
        <Route path={`${path}/contact`}>
          <Contact />
        </Route>
        <Route path={`${path}/bio`}>
          <Bio />
        </Route>
      </Switch>
    </Router>
  );
};

const Bio = () => (
  <div className="Bio">
    <h2> Bio </h2>
    <hr />
    <p> I'm a pretty cool person</p>
  </div>
);

const Contact = () => (
  <div className="Contact">
    <h2>Contact me</h2>
    <hr />
    <p>Send me an email plassss.</p>
  </div>
);

const Homepage = () => (
  <div className="HomepageAbout">
    <h1> Homepage </h1>
    <hr />
    <p>This is our Home Page</p>
  </div>
);

const Search = (props) => {
  const query = new URLSearchParams(useLocation().search);
  const term = query.get("q");
  const returned = DoSearch(term);
  return (
    <div>
      <h1>Search Page </h1>
      <hr />
      Found items for: {term}:
      <ul>
        {returned.map((t) => {
          return <li key={t}>{t}</li>;
        })}
      </ul>
    </div>
  );
};

const items = [
  "Lorem Ipsum",
  "Ipsum Dipsum",
  "Foo Bar",
  "A little black cat",
  "A lazy Fox",
  "A jumping dog"
];
const DoSearch = (term) => {
  if (!term) {
    return items;
  }
  return items.filter(
    (item) => item.toLowerCase().indexOf(term.toLowerCase()) !== -1
  );
};

const Navbar = () => (
  <div className="Navbar">
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/about">About</Link>
    &nbsp;
    <Link to="/search">Search</Link>
    &nbsp;
  </div>
);

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="*">
        <h1>Page Not Found </h1>
        <a href="/">Return Home </a>
      </Route>
    </Switch>
  </Router>
);
export default App;
