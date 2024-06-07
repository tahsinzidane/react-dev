import React from 'react'

function footer({ name }) {
    return (
        <>
            <div className="container-flued bg-dark text-white mt-5">
                <div className="container">
                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-12 mt-5'>
                            deigned by {name}
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 mt-5'>
                            2024 {name} all right resarved
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default footer