import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function btns({txt, link}) {
  // const gh = 'https://github.com/tahsinzidane';
  return (
    <div>
        <a href={link}>
        <button className='btn btn-primary'>{txt} </button>
        </a>
    </div>
  )
}

export default btns