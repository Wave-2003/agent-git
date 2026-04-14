import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />

      {/* Hero Section */}
      <section className={`${styles.hero} container animate-fade`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Unleash the Power of <br />
            <span className="gradient-text">Autonomous AI</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Experience the next generation of AI infrastructure. Setup, deploy, and scale your intelligent agents in minutes with our autonomous configuration engine.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" className="btn btn-primary">
              Start Setup Now 
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </a>
            <a href="#" className="btn btn-outline">Explore Core</a>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/ai_hero.png"
            alt="AI Core Hero"
            width={600}
            height={600}
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className={`${styles.features} container`}>
        <div className={`${styles.featureCard} glass animate-fade`}>
          <span className={styles.featureIcon}>⚡</span>
          <h3 className={styles.featureTitle}>Instant Deployment</h3>
          <p className={styles.featureText}>
            Zero-configuration setup protocols that get your AI models running at light speed.
          </p>
        </div>
        <div className={`${styles.featureCard} glass animate-fade`} style={{ animationDelay: '0.2s' }}>
          <span className={styles.featureIcon}>🛡️</span>
          <h3 className={styles.featureTitle}>Neural Security</h3>
          <p className={styles.featureText}>
            End-to-end encrypted data streams and multi-layered authentication for your peace of mind.
          </p>
        </div>
        <div className={`${styles.featureCard} glass animate-fade`} style={{ animationDelay: '0.4s' }}>
          <span className={styles.featureIcon}>🌐</span>
          <h3 className={styles.featureTitle}>Global Scale</h3>
          <p className={styles.featureText}>
            Distribute your AI workload across a global decentralized network with ease.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container" style={{ padding: '4rem 2rem', borderTop: '1px solid var(--glass-border)', marginTop: 'auto', textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
        <p>&copy; 2026 AI SETUP Hub. Powered by Autonomous Engineering.</p>
      </footer>
    </div>
  );
}
