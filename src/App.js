import './App.css';
import Header from './Component/Header';
import Title from './Component/Title';
import About from './Component/About';
import Project from './Component/Project';
import Contact from './Component/Contacts';
import Footer from './Component/Footer';

function App() {

  let scroll = window.requestAnimationFrame ||
    function(callback){ window.setTimeout(callback, 1000/60)}; 

  function loop() {
    let elementsToShow = document.querySelectorAll('.sectionTransition');
    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
    scroll(loop);
  }

  loop();

  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <Title/>
        <About/>
        <Project/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
