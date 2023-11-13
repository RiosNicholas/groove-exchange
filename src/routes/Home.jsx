import { Route } from 'react-router-dom';
import FeedFilter from '../components/FeedFilter.jsx';
import NavBar from '../components/NavBar.jsx';
import PostFeed from '../components/PostFeed.jsx';

const Layout = () => {
  return (
    <div>
      <NavBar />
        <Route path="/" exact>
          <FeedFilter />
          <PostFeed />
        </Route>
    </div>
  );
};

export default Layout;