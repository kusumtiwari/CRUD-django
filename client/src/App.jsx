
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import PostDetail from './components/PostDetail';

function App() {
  
  return (
    <Router>
   <Routes>
  
     <Route exact path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetail />} />
 
    </Routes>
    </Router>
  );
}

export default App;
