import React from 'react'
import ProjectCard from './projectCard.jsx'
import Ppreview from './assets/preview of restuarent project.jpg'
import Btns from './btns.jsx'


function project(props) {


    return (
        <>
            <div id='project' className='container mt-5'>
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>MY ALL PROJECT</h1>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className='col-xl-6 col-lg-6 col-md-12 card'>
                        <ProjectCard
                            pName='restaurant web page design'
                            preview={Ppreview}
                            desc='restaurant web page design ,this is my first demo website design' />
                        <div className='mt-3 m-1' onClick={() => window.location.href = 'https://github.com/tahsinzidane/restaurant-web-page'}>
                            <Btns txt='fork repo' />
                        </div>
                    </div>

                    <div className='col-xl-6 col-lg-6 col-md-12  card'>
                        <ProjectCard
                            pName='restaurant web page design'
                            preview={Ppreview}
                            desc='restaurant web page design ,this is my first demo website design' />
                        <div className='mt-3 m-1'>
                            <Btns txt='fork repo' />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default project