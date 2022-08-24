import React from 'react'

function CoaLogo() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flip-card '>
            <div className='flip-card-inner '>
                <div className='flip-card-front flex justify-center items-center'>
                    <img className='w-32' src="./coal.png"/>
                </div>
                <div className="flip-card-back flex justify-center items-center">
                    <img className='w-32' src="./diamond.png"/>
                </div>
            </div>
            
        </div>
        <div className='flex flex-col space-y-1 justify-center items-center'>
           
            <h4 className='l font-bold text-6xl shine'>COAL</h4>
            <h5 className='r text-xl'>with enough hope, every coal can become diamond.</h5>
        </div>
    </div>
  )
}

export default CoaLogo