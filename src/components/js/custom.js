import React, { useEffect, useRef } from 'react';

const Navbar = () => {
  const navLinks = [
    { href: '#section1', label: 'Section 1' },
    { href: '#section2', label: 'Section 2' },
    { href: '#section3', label: 'Section 3' },
    { href: '#section4', label: 'Section 4' },
  ];

  // Refs for nav links
  const navLinkRefs = useRef([]);
  navLinkRefs.current = [];

  // Refs for sections
  const sectionRefs = useRef({});
  
  // Ref for navbar
  const navbarRef = useRef(null);

  // Helper to add refs to navLinkRefs
  const addToNavLinkRefs = (el) => {
    if (el && !navLinkRefs.current.includes(el)) {
      navLinkRefs.current.push(el);
    }
  };

  // Initialize sectionRefs
  navLinks.forEach(link => {
    const id = link.href.replace('#', '');
    sectionRefs.current[id] = React.createRef();
  });

  useEffect(() => {
    const handleLinkClick = (event, link) => {
      event.preventDefault();

      // Remove 'active' class from all links
      navLinkRefs.current.forEach(l => l.classList.remove('active'));

      // Add 'active' class to clicked link
      link.classList.add('active');

      // Smooth scroll to the section using refs
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = sectionRefs.current[targetId]?.current;

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Attach click event listeners to all nav links
    navLinkRefs.current.forEach(link => {
      link.addEventListener('click', (event) => handleLinkClick(event, link));
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Update navbar classes based on scroll position
      if (scrollPosition > 100) {
        navbarRef.current.classList.add('fixed-top', 'trans-bg');
        navbarRef.current.classList.remove('navbar-not');
      } else {
        navbarRef.current.classList.remove('fixed-top', 'trans-bg');
        navbarRef.current.classList.add('navbar-not');
      }

      // Determine which section is in view
      let sectionInView = null;

      navLinks.forEach(link => {
        const targetId = link.href.replace('#', '');
        const section = sectionRefs.current[targetId]?.current;

        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (offsetTop <= scrollPosition + 100 && offsetTop + offsetHeight > scrollPosition + 100) {
            sectionInView = link;
          }
        }
      });

      // Remove 'active' class from all links
      navLinkRefs.current.forEach(link => link.classList.remove('active'));

      // Add 'active' class to the link corresponding to the section in view
      if (sectionInView) {
        sectionInView.classList.add('active');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial call to set the correct state
    handleScroll();

    return () => {
      // Cleanup event listeners when the component unmounts
      navLinkRefs.current.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navLinks]);

  return (
    <>
      <nav id="navbar-sticky" ref={navbarRef} className="navbar navbar-not">
        <ul className="navbar-nav">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <a
                href={link.href}
                className="nav-link"
                ref={addToNavLinkRefs}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Example sections */}
      {navLinks.map((link, index) => (
        <section
          id={link.href.replace('#', '')}
          key={index}
          ref={sectionRefs.current[link.href.replace('#', '')]}
          style={{ height: '100vh', padding: '20px' }}
        >
          <h2>{link.label}</h2>
          <p>Content for {link.label}</p>
        </section>
      ))}
    </>
  );
};

export default Navbar;
