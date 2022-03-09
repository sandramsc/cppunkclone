import './App.css';
//import CollectionCard from './components/CollectionCard';
import Header  from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  
  useEffect(() => {
    const getMyNFTs = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x0F6BB300008a38D35dF4d547ED1ecA9C24cF29bC&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    
    return getMyNFTs()
  }, [])


  return (
    <div className="app">
      <Header />
      <Main />
     {/* <CollectionCard 
        id={0} 
        name={'Coolio Punk'} 
        traits={[{value: 7}]}
        image='https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'
      /> */}
        
      <PunkList punkListData={punkListData} />
    </div>
  )
}

export default App;
