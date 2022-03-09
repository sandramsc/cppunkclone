import React from 'react'

const Main = () => {
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img className='selectedPunk' 
                    scr={activePunk.image_url} 
                    alt="" />
                </div>
            </div>
            <div className='punkDetails' style={{ color: '#fff'}}>
            <div className='title'>
            {activePunk.name}
            </div>
            </div>  
        </div>
    </div>
  )
}

export default Main