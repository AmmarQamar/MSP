// import Navbar from "./components/navbar/navbar"
// import UserLayout from "./layouts/UserLayout"
import Routes from './routes'
import { Provider } from 'react-redux';
import store from './redux/Store';
function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
