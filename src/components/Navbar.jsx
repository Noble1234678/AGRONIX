import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [tractorPos, setTractorPos] = useState(0);
  const [tractorVisible, setTractorVisible] = useState(false);

  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const el = document.getElementById(id);

    if (el) {
      const offset = 80;
      const elementPosition = el.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  const handleMouseMove = (e) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setTractorPos(x);
    }
  };

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Events", id: "events" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">

          {/* LOGO */}
          <Link to="/" className="nav-logo">
            <Leaf size={20} />
            AGRONIX 2K26
          </Link>

          {/* DESKTOP NAV */}
          <div
            className="nav-links nav-path-container"
            ref={navRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setTractorVisible(true)}
            onMouseLeave={() => setTractorVisible(false)}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.id);
                }}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}

            <div className="nav-path-line"></div>

            {tractorVisible && (
              <div
                className="nav-tractor"
                style={{ left: `${tractorPos}px` }}
              >
                🚜
              </div>
            )}

            <button
              onClick={() => scrollTo("register")}
              className="register-btn"
            >
              Register <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE RADIAL MENU */}

      <div className={`mobile-radial ${isOpen ? "open" : ""}`}>
        {links.map((link, i) => (
          <button
            key={link.id}
            className={`radial-item item-${i}`}
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </button>
        ))}

        <button
          className="radial-item item-4 register"
          onClick={() => scrollTo("register")}
        >
          Register
        </button>
      </div>

      {/* FLOATING BUTTON */}

      <button
        className={`fab ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Leaf size={22} />}
      </button>

      {/* STYLES */}

      <style>{`

.navbar{
position:fixed;
top:0;
width:100%;
z-index:1000;
padding:16px 0;
background:rgba(10,20,15,0.6);
backdrop-filter:blur(10px);
}

.nav-inner{
display:flex;
justify-content:space-between;
align-items:center;
}

.nav-logo{
display:flex;
align-items:center;
gap:10px;
font-weight:800;
color:#4ade80;
text-decoration:none;
}

.nav-links{
display:flex;
align-items:center;
position:relative;
}

.nav-link{
margin:0 18px;
font-weight:600;
color:white;
text-decoration:none;
position:relative;
}

.nav-link:hover{
color:#4ade80;
}

.nav-path-line{
position:absolute;
bottom:-5px;
width:100%;
height:2px;
background:linear-gradient(to right,transparent,#4ade80,transparent);
opacity:0.4;
}

.nav-tractor{
position:absolute;
bottom:-14px;
font-size:20px;
transition:left .2s linear;
}

.register-btn{
margin-left:20px;
background:#4ade80;
border:none;
padding:8px 16px;
border-radius:10px;
font-weight:700;
cursor:pointer;
display:flex;
gap:6px;
align-items:center;
}

/* MOBILE */

@media (max-width:992px){

.nav-links{
display:none;
}

}

/* FAB */

.fab{
position:fixed;
bottom:25px;
right:25px;
width:65px;
height:65px;
border-radius:50%;
background:#4ade80;
border:none;
display:flex;
align-items:center;
justify-content:center;
z-index:1001;
box-shadow:0 10px 30px rgba(0,0,0,0.3);
cursor:pointer;
transition:0.3s;
}

.fab.active{
transform:rotate(90deg);
background:white;
color:black;
}

/* RADIAL MENU */

.mobile-radial{
position:fixed;
bottom:60px;
right:60px;
pointer-events:none;
}

.mobile-radial.open{
pointer-events:auto;
}

.radial-item{
position:absolute;
background:#0a1f14;
color:white;
border:none;
padding:10px 14px;
border-radius:12px;
font-weight:700;
cursor:pointer;
opacity:0;
transform:scale(0);
transition:0.4s;
}

.mobile-radial.open .radial-item{
opacity:1;
transform:scale(1);
}

.item-0{transform:translate(-90px,-40px);}
.item-1{transform:translate(-140px,-90px);}
.item-2{transform:translate(-120px,-150px);}
.item-3{transform:translate(-60px,-200px);}
.item-4{transform:translate(0px,-240px);}

.radial-item:hover{
background:#4ade80;
color:black;
}

`}</style>
    </>
  );
};

export default Navbar;