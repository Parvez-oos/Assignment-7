import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { AppProvider } from './context/AppProvider';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import FriendDetails from './pages/FriendDetails';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';


function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          
          <Navbar />

          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/friend/:id" element={<FriendDetails />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/stats" element={<Stats />} />
              
             
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          
          <Footer />
        </div>

       
        <Toaster 
          position="bottom-right" 
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }} 
        />
      </Router>
    </AppProvider>
  );
}

export default App;