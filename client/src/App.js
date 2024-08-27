import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch, Routes } from 'react-router-dom';
import JobList from './Components/JobList';
import JobDetails from './Components/Jobdetails';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
        
        <div className="App bg-gray-100 min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
              <Route exact path="/" element={<JobList />}/>
              <Route path="/job/:id" element={<JobDetails />}/>
            </Routes>
          </main>
          <Footer />
        </div>

      </div>
  );
}

export default App;
