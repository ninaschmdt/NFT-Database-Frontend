import logo from './logo.svg';
import './scss/appcontainer.scss';
import './scss/collections.scss'
import './scss/wallets.scss';
import CollectionsTable from './Components/Collections/CollectionsTable';
import Wallets from './Components/Wallets/AllWallets';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header/>
      <div className='content'>
      <CollectionsTable/>
      <Wallets/>
      </div>
    </div>
  );
}

export default App;
