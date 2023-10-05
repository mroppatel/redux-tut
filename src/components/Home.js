import React from 'react'

function Home() {
  return (
    <div>
        <div className='add-to-card'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ3d7Sc3tD6BcMix1wSYrsi91jgF1A-9Yug&usqp=CAU'/>
        </div>
        <h1>Home component</h1>
        <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrzwgNEO1FfZsR2cnuKWkaV352tRgSDvusg&usqp=CAU'/>
            </div>
            <div className='text-wraper item'>
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000.00
                </span>
            </div>
            <div className='btn-wrapper item'>
                <button>Add To Card</button>
            </div>
        </div>
    </div>
  )
}

export default Home