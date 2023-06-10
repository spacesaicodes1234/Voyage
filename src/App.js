import Navbar from './Components/navbar';
import Home from './Components/home';
import { BrowserRouter as RouterProvider, Route, Routes} from 'react-router-dom';
import Team from './Components/About';
import NotFound from './Components/NotFound';
import Download from './Components/Download';

function App() {
  return (
    <RouterProvider>
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<Team />} />
          <Route path='/Download' element={<Download />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        </div>
      </div>
    </RouterProvider>
  );
}

export default App;

