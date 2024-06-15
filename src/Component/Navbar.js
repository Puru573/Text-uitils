import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

function Navbar() {
    const { toggleMode, theme } = useContext(Context);
    console.log("theme", theme);
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class={`container-fluid  fixed-top p-1 bg-${theme ? "light" : "dark"}`}>
                    <a class={`navbar-brand text-${theme ? "dark" : "white"}`} to="/">Navbar</a>
                    <button class="navbar-toggler btncolor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class={`nav-link active text-${theme ? "dark" : "white"}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class={`nav-link text-${theme ? "dark" : "white"}`} to="/aboutus">About</Link>
                            </li>
                        </ul>
                        <div class={`form-check form-switch text-${theme ? "dark" : "white"}`}>
                            <input class="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckChecked" />
                            <label class="form-check-label" htmlFor="flexSwitchCheckChecked">Checked for Dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
