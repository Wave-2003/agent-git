"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.navContainer} container`}>
        <Link href="/" className={styles.logo}>
          AI<span className="gradient-text">SETUP</span>
        </Link>

        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>Solutions</a>
          <a href="#" className={styles.navLink}>Process</a>
          <a href="#" className={styles.navLink}>Enterprise</a>
          <a href="#" className={styles.navLink}>Docs</a>
        </div>

        <div className={styles.navActions}>
          <Link href="/login" className="btn btn-outline" style={{ textDecoration: 'none' }}>
            Sign In
          </Link>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
