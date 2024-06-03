import React from 'react'

const Product = () => {
  return (
    <div className='product-page text-black bg-white'>
        <section className='hero flexCenter h-screen text-black text-center relative'
        style={{
            backgroundColor: 'f5f5f7',
            padding :'20px'
        }}
        >
            <div className='max-container'>
                <h1 className='h1 text-black' >TechWave XR</h1>
                <img src="https://www.apple.com/v/apple-vision-pro/c/images/specs/hero__cvgr5aj1ttsi_large.jpg" alt="TechWave XR" 
                className='mx-auto'
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    marginTop: '20px'
                }}  
                />
            </div>
        </section>
        <section className='specs-section py-20'>
            <div className='max-container px-6 lg:px-20'> 
                <h2 className='h2 text-center mb-12'>Specifications</h2>
                <div className='specs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='spec-item'>
                <h3 className='h3'>Display</h3>
                <p className='regular-16'>Two micro-OLED displays, each with a resolution of 23 million pixels per eye.</p>
            </div>
            <div className='spec-item'>
                <h3 className='h3'>Chip</h3>
                <p className='regular-16'>Dual-chip design with Apple M2 and new R1 chips.</p>
            </div>
            <div className='spec-item'>
                <h3 className='h3'>Audio</h3>
                <p className='regular-16'>Spatial audio system with custom-designed audio pods.</p>
            </div>
            <div className='spec-item'>
                <h3 className='h3'>Cameras</h3>
                <p className='regular-16'>12 cameras for capturing images and video.</p>
            </div>
            <div className='spec-item'>
                <h3 className='h3'>Sensors</h3>
                <p className='regular-16'>5 sensors including LiDAR Scanner for real-time environment mapping.</p>
            </div>
            <div className='spec-item'>
                <h3 className='h3'>Connectivity</h3>
                <p className='regular-16'>Wi-Fi 6E and Bluetooth 5.3 for seamless wireless connectivity.</p>
            </div>
                </div>
            </div>
        </section>
        <section className="features-section py-20 bg-gray-100">
        <div className="max-container px-6 lg:px-20">
          <h2 className="h2 text-black text-center mb-12">Key Features</h2>
            <div className='features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='feature-item'>
                <h3 className='h3'>Immersive Display</h3>
                <p className='regular-16'>Enjoy ultra-high resolution with two micro-OLED displays providing 23 million pixels.</p>
            </div>
            <div className='feature-item'>
                <h3 className='h3'>Powerful Performance</h3>
                <p className='regular-16'>Experience seamless performance with the dual Apple M2 and R1 chips.</p>
            </div>
            <div className='feature-item'>
                <h3 className='h3'>Spatial Audio</h3>
                <p className='regular-16'>Immerse yourself in sound with a spatial audio system and custom audio pods.</p>
            </div>
            <div className='feature-item'>
                <h3 className='h3'>Advanced Cameras</h3>
                <p className='regular-16'>Capture detailed images and video with 12 high-performance cameras.</p>
            </div>
            <div className='feature-item'>
                <h3 className='h3'>Real-Time Mapping</h3>
                <p className='regular-16'>Map your environment in real-time with advanced sensors, including a LiDAR Scanner.</p>
            </div>
            <div className='feature-item'>
                <h3 className='h3'>Seamless Connectivity</h3>
                <p className='regular-16'>Stay connected with Wi-Fi 6E and Bluetooth 5.3 technology.</p>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Product