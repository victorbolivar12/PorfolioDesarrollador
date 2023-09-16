import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div className="w-full px-10 py-14 bg-slate-50 md:px-24 lg:px-52">
          <Header/>
          <Main/>
          <Projects/>
      </div>
    </>
  )
}

export default App
