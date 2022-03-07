import './App.css';
import CollectionCard from './components/CollectionCard';
import Header  from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [punkListData, setPunkListData] = useState([])
  
  useEffect(() => {
    const getMyNFTs = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xD2B02a26eb2102f38e8Deaaf7433f257a50C1D42&order_direction=asc')
    console.log(openseaData.data.assets)
    }

    return getMyNFTs()
  }, [])


  return (
  <div className="app">
  <Header />
  <CollectionCard 
    id={0} 
    name={'Coolio Punk'} 
    traits={[{'value': 7}]}
    image={'https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'}/>
    
  </div>)
}

export default App;
