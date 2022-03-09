import React, {useState, useEffect } from 'react';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreLogo from '../assets/owner/more.png';
import './Main.css';


const Main = ({ selectedPunk, punkListData }) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])
   
    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

    return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                  <img 
                        className='selectedPunk'
                        src={activePunk.image_url}
                        alt=''
                    />
                </div>
            </div>
            <div className='punkDetails' style={{ color: '#fff'}}>
                <div className='title'>
                    {activePunk.name}
                </div>
                <span className='itemNumber'>•#{activePunk.token_id}</span>
            </div>
            <div className='owner'>
                <div className='ownerImageContainer'>
                <img className='selectedPunk' 
                    src={activePunk.owner.profile_img_url} 
                    alt=""
                />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div>0x0F6BB300008a38D35dF4d547ED1ecA9C24cF29bC</div>
                        <div className='ownerHandle'>@sajustsmile</div>
                    </div>
                    <div className='ownerLink'>
                        <img src={instagramLogo} alt='' />
                    </div>
                    <div className='ownerLink'>
                        <img src={twitterLogo} alt='' />
                    </div>
                    <div className='ownerLink'>
                        <img src={moreLogo} alt='' />
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Main