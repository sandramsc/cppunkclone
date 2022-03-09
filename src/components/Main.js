import React from 'react'

const Main = () => {
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img className='selectedPunk' 
                    src={'https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'} 
                    alt="" />
                </div>
            </div>
            <div className='punkDetails' style={{ color: '#fff'}}>
                <div className='title'>Coolio Punk</div>
                <span className='itemNumber'>•#3</span>
            </div>
            <div className='owner'>
                <div className='ownerImageContainer'>
                <img className='selectedPunk' 
                    src={'https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'} 
                    alt=""
                />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div>0x0F6BB300008a38D35dF4d547ED1ecA9C24cF29bC</div>
                        <div className='ownerHandle'>@sajustsmile</div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Main