import React from 'react'


function about({ name, img }) {
    return (
        <>
            <div id='about' className="container mt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>ABOUT ME</h1>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-xl-6 col-lg-6 col-md-12 border-top">
                        <h4 className='text-center'>{name}</h4>
                        
                        <h5 className='text-center mt-2'>
                            1 of working experience as a web designer & developer
                        </h5>
                        <p className='m-2 mt-3'>
                            Hi, I'm an 18-year-old web development enthusiast currently pursuing my education in this dynamic field. I have a strong passion for coding and creating innovative web solutions. From crafting visually appealing user interfaces to diving into the intricacies of backend development, I thrive on the challenges that web development offers. <br /> <br />
                            Beyond coding, I appreciate the collaborative nature of web development and value continuous learning as an integral part of my journey. I'm excited about the endless possibilities in the world of web development and look forward to contributing my skills to create meaningful digital experiences.
                        </p>
                    </div>

                    <div className='className="col-xl-6 col-lg-6 col-md-12"'>
                        <img src={img} alt="" srcset="" className='img-thumbnail  p-5'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default about