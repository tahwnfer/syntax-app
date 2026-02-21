import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';
import { Categories } from './components/Categories';
import { Gallery } from './components/Gallery';
import { Overlay } from './components/Overlay';

function App() {
    return(
        <>
      <Header/>
      <main className="py-10">
      <Hero/>
      <Categories/>
      <Gallery/>
      <Overlay/>
      </main>
        </>
    )
 }
 export default App;