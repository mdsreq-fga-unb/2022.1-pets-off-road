import { Rts } from './Routes/Auth.routes'
import Authprovider from './context/AuthContext'


function App() {
  
  return (
    <div>
      <Authprovider>
        <Rts />
      </Authprovider>
    </div>
  )
}

export default App
