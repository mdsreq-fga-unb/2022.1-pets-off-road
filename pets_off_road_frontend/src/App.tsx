import Authprovider from './context/AuthContext'
import Routes from './Routes'


function App() {
  
  return (
    <div>
      <Authprovider>
        <Routes />
      </Authprovider>
    </div>
  )
}

export default App
