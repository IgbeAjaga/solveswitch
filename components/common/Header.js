import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <header>
        <div className="container">
          {/* SolveSwitch Logo */}
          <div className="logo">
            <Link href="/">
              <img src="../images/solveswitch-logo.png" alt="SolveSwitch Logo" className="solveswitch-logo" />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(false)}>
            <Link href="/" className={activeLink == "/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href="/services" className={activeLink == "/services" ? "activeLink" : "none"}>
              Services
            </Link>
            <Link href="/about" className={activeLink == "/about" ? "activeLink" : "none"}>
              About Us
            </Link>
            <Link href="/contact" className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact Us
            </Link>
          </nav>

          {/* Consultation Button */}
          <div>
          <Link href="/contact">
            <button className="button-primary">Book a Consultation</button>
            </Link>
          </div>

          {/* Hamburger Menu - Visible only on Mobile */}
          <div className="mobile-menu">
            <button onClick={() => setOpen(!open)}>
              {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
            </button>
          </div>
        </div>
      </header>

      {/* CSS for Responsive Menu */}
      <style jsx>{`
        .solveswitch-logo {
          width: 150px;  /* Adjust size as needed */
          height: auto;
        }
        .mobile-menu {
          display: none;
        }
        @media (max-width: 768px) {
          .mobile-menu {
            display: block;
          }
          nav {
            display: ${open ? "block" : "none"};
            padding: 5px 0;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
