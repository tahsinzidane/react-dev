import React from 'react';

function Header() {
  return (
    <>
      <section id='header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#hero">Home</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" href="#about">About</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active fst-italic fw-bold" href="#header">React Dev</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" href="#project">Projects</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" href="#contact-form">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;
