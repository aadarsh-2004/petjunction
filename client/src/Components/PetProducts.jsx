import React from 'react'

const PetProducts = () => {
  return (
    <div className='bg-white'>
    {/* heading  */}
    <div className=' text-center mb-4 z-10'>
        <h1 className='text-4xl pt-6  text-gray-800 font-serif'>Pocket Friendly Deals</h1>
        <h2 className='pt-2 text-xl text-gray-500 font-serif'>Buy Budget Friendly Products for you Loving  Pets</h2>
    </div>

    <div className='flex  justify-center  z-20 '>

        {/* comming Soon */}
        {/* <div className='absolute top-80 z-140'>
            <h1 className='text-lg bg-gray-50 border-none shadow-2xl p-2 rounded-lg font-serif'>Comming Soon</h1>
        </div> */}


        <div className='flex-col space-y-4 mt-4 blur-xs w-fit  px-2 '>
            <div className='img1 '>
                <img className='w-64 h-54  shadow-xl border-none rounded-lg' src="https://headsupfortails.com/cdn/shop/files/HUFT-Cat-Litter-_Natural-_-Clumping_---Lavender-Scented---10-kg.jpg?v=1686811084&width=533" alt="" />
            </div>
            <div className='img2 '>
                <img className='w-64 h-54 mb-0 shadow-xl border-none rounded-lg' src="https://m.media-amazon.com/images/I/811QqACja8L.jpg" alt="" />
            </div>
        </div>
        <div>
        {/* top-1 */}
            <div className='flex space-y-10 my-4 blur-xs  items-center gap-2 ml-6   '>
                <div className='img1   mb-0'>
                    <img className='w-40  h-54 shadow-xl border-none  rounded-lg' src="https://www.orangepet.in/cdn/shop/files/StarterPuppy_f64b071b-598c-495e-95e0-e9937a5805ca.jpg?v=1707221875" alt="" />
                </div>
                <div className='img2 mb-0'>
                    <img className='w-75 h-54  shadow-xl border-none rounded-lg' src="https://www.all4pets.in/wp-content/uploads/2024/01/dry-dog-food.jpg" alt="" />
                </div>
                <div className='img3'>
                    <img className='w-40 h-54 shadow-xl border-none  rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCU2vpSlaomKzb_1nWZO5am3p4vMtjYosthQ&s" alt="" />
                </div>
            </div>
            {/* top-2 */}
            <div className='flex space-y-10  gap-2 blur-xs  ml-6 items-center '>
                <div className='img1 mb-0'>
                    <img className='w-40 h-54 shadow-xl border-none   rounded-lg' src="https://www.petterati.com/cdn/shop/files/Image18902979012379.jpg?v=1711696548" alt="" />
                </div>
                
                <div className='img2 mb-0'>
                    <img className='w-40 h-54 shadow-xl border-none  rounded-lg' src="https://m.media-amazon.com/images/I/41RtpTh6PpL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                </div>

                <div className='img2 mb-0'>
                    <img className='w-75 h-54 shadow-xl border-none rounded-lg' src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/18d44c28-d854-47fb-adbb-0c13a25776ee.__CR0,0,970,600_PT0_SX970_V1___.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PetProducts
