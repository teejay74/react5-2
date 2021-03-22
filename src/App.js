import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Search from './components/Search/Search';
import Banner from './components/Banner/Banner';
import Topics from './components/Topics/Topics';

function App() {

  const adsImg = 'http://placehold.it/1000x100';
  const adsLink = 'http://yandex.ru';


  return (
    <div className="App">
      <Header />
      <Services />
      <Search />
      <Banner img={adsImg} link={adsLink}/>
      <Topics />
    </div>
  );
}

export default App;