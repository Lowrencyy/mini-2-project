import Pages from './pages/Pages'
import Category from './components/Category'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
     <Search/>
      <Category/>
      <Pages/>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App;