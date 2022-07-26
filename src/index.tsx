import ReactDOM from 'react-dom'
import {App} from './App'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import store from './config/redux/Store'
import './config/assets/css/index.css'
import { BrowserRouter } from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
