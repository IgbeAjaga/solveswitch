import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineMail  } from "react-icons/ai"
import { FiPhone } from "react-icons/fi"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='Switch' caption='Solve' className='logobg' />
              <br />
              <span>
                Questions? <br/><br/> Reach us <br /> <br/> <br/> 24/7
              </span>
              <br />
              <br />
              <h3>
  <Link href="tel:+2349122553157" legacyBehavior>
    <a style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}>
      <FiPhone size={20} style={{ marginRight: "8px" }} />
      +234 912 255 3157
    </a>
  </Link>
</h3>
              <br />
              <Link href="/contact">
    <button className="button-primary">Request for a Quote</button>
  </Link>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/about'>About Us</Link>
              </li>
              <li>
                <Link href='/services'>Services</Link>
              </li>          
              
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/services'>Software & Applications</Link>
              </li>
              <li>
                <Link href='/services'>Project Management</Link>
              </li>
              <li>
                <Link href='/services'>Professional Trainings</Link>
              </li>
              <li>
                <Link href='/services'>Creativity & Branding</Link>
              </li>
              <li>
                <Link href='/services'>Cybersecurity</Link>
              </li>
              <li>
                <Link href='/services'>Technical Support</Link>
              </li>
              <li>
                <Link href='/services'>IT Product Sales</Link>
              </li>
              <li>
                <Link href='/services'>IT Consultation</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
              <li>
                  <a href="mailto:info@solveswitch.com">
                    <AiOutlineMail size={25} />
                  </a>
                </li>              
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillTwitterCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/solve_switch/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2025 SOLVESWITCH. ALL RIGHTS RESERVED.</span>
            </div>
            {/* 
            <div className='connect'>
              <span>TECH COMPANY</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
            */}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
