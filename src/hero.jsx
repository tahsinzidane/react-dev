import React from 'react'
import Btns from './btns.jsx'

function hero({ img, name }) {
    return (
        <>
            <div id='hero' className='container-flued'>
                <div className='container'>
                    <div className="row mt-5">
                        <div className="col-xl-6 col-lg-6 col-sm-12 mt-5 ">
                            <h3 className='mt-5'>{name}</h3>
                            <h1 className='text-primary fw-bold mt-3'>
                                FRONT END <br /> WEB DEVELOPER
                            </h1>
                            <Btns txt='download CV'/> {/* todo: later */}
                        </div>

                        <div className='col-xl-6 col-lg-6 col-sm-12  text-center'>
                            <img src={img} className="img-thumbnail mt-5  p-5" alt="profile pic" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default hero