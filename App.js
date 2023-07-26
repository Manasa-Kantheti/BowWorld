import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <div className='d-flex flex-direction overflow-hidden'>
      <BrowserRouter>
        <Header />
        <Layout />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
