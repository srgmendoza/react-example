import './App.css';
import ContainerPage from '../pages/container/container-page';
import LogoMarvel from '../components/headerLogo/logo-marvel';

const App = () => {

  return(
    <div className="App">
    <header className="App-header">
      <LogoMarvel />
      <h1>
        Marvel Heroes Compare
      </h1>
    </header>
    <ContainerPage />
  </div>
  )
}


export default App
