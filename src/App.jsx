import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Index';
//import './App.css'

function App() {
  return (
    <div className=' h-screen  '>
      <RouterProvider
        router={router}
      />
    </div>
  )
}

export default App
