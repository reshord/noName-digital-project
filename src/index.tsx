import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store, { RootState } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ProdInfo from './components/ProdInfo/ProdInfo';
import AuthModal from './components/auth/AuthPage';
import './styles/index.css'
import ProfileUser from './components/Profile/Profile';


var rootStyle = document.querySelector('body') as HTMLElement
  rootStyle.style.margin = '0'
  rootStyle.style.overflowX = 'hidden'
  rootStyle.style.background = 'linear-gradient(360deg, #211F20 0%, #44403F 100%)'





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  
);
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/auth' element={<AuthModal />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/infoProduct/:id' element={<ProdInfo />}/>
          <Route path='/profile' element={<ProfileUser />} />
        </Routes>
      </Provider>
    </BrowserRouter>
);

reportWebVitals();
