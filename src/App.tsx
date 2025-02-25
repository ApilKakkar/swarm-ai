import { Canvas} from '@react-three/fiber'
import './App.css'
import PlayArea from './components/PlayArea'

function App() {
  return (
    <>
      <Canvas>
        <PlayArea />
      </Canvas>
    </>
  )
}

export default App
