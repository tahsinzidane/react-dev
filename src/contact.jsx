import React from 'react'
import Btns from './btns.jsx'



function contact({ number, email }) {



    return (
        <>
            <div id='contact-form' className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='text-center'>contact me</h1>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-sm-12 border-top mt-4">
                            <h4 className='mt-3'><i class="ri-smartphone-line"></i> : {number}</h4>
                            <h4><i class="ri-mail-send-line"></i> : {email}</h4>
                            <ul>
                                <li onClick={() => window.location.href = 'https://facebook.com/tahsinzidane'}>
                                    <i class="ri-facebook-circle-line"></i>
                                </li>

                                <li onClick={() => window.location.href = 'https://instagram.com/tahsinzidane'}>
                                    <i class="ri-instagram-line"></i>
                                </li>

                                <li onClick={() => window.location.href = 'https://www.linkedin.com/in/tahsin-zidane-0577852a7/'}>
                                    <i class="ri-linkedin-box-line"></i>
                                </li>

                                <li onClick={() => window.location.href = 'https://github.com/tahsinzidane'}>
                                    <i class="ri-github-line"></i>
                                </li>
                            </ul>
                        </div>

                        <div className='col-xl-6 col-lg-6 col-sm-12 border-top mt-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">your name</label>
                                <input type="text" className='form-control' id='exampleFormControlInput1' placeholder='john deo' />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" className='form-control' id='exampleFormControlInput1' placeholder='johndeo@gmail.com' />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">write your important msg here</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                                <div className='mt-3'>
                                    <Btns txt='submit' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contact