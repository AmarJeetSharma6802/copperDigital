import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import storeItem from './Pages/reducer/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={storeItem}>
    <App />
</Provider>
  </StrictMode>,
)
