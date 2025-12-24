import React from 'react'
import '../Styles/footer.css'
import img01 from "../icon/01.png"
import img02 from "../icon/02.png"
import img03 from "../icon/03.png"
import img04 from "../icon/04.png"
import img05 from "../icon/05.png"
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="top">
                    <p>ToyStore</p>
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/Catalog'><li>Catalog</li></Link>
                        <Link to='/Delivery'><li>Delivery</li></Link>
                        <Link to='/About'><li>About</li></Link>
                        <Link to='/Contacts'><li>Contacts</li></Link>
                    </ul>
                    <div className="tright">
                        <img src={img01} alt="" />
                        <img src={img02} alt="" />
                        <img src={img03} alt="" />
                        <img src={img04} alt="" />
                        <img src={img05} alt="" />
                    </div>
                </div>
                <div className="bottom">
                    <p>Created with love by Toystore</p>
                    <p>Powered by <span>Toystore</span></p>
                </div>
            </div>
        </div>
    )
}
