import Link from "next/link";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      <div className={`${styles.loginCard} glass animate-fade`}>
        <div className={styles.logo}>
          AI<span className="gradient-text">SETUP</span>
        </div>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Enter your credentials to access your dashboard</p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <input 
              type="email" 
              className={styles.input} 
              placeholder="name@company.com" 
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <input 
              type="password" 
              className={styles.input} 
              placeholder="••••••••" 
              required 
            />
          </div>

          <button type="submit" className={`${styles.submitBtn} btn btn-primary`}>
            Sign In to Hub
          </button>
        </form>

        <div className={styles.footerLinks}>
          <a href="#" className={styles.link}>Forgot your password?</a>
          <div style={{ color: 'rgba(255,255,255,0.2)' }}>
            Don't have an account? <Link href="#" className={styles.link} style={{ color: 'var(--primary)' }}>Create one</Link>
          </div>
        </div>

        <div className={styles.socialLogin}>
          <span className={styles.socialTitle}>Or continue with</span>
          <div className={styles.socialBtns}>
            <button className={styles.socialBtn} title="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </button>
            <button className={styles.socialBtn} title="Google">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.288 1.288-3.268 2.696-6.624 2.696-5.388 0-9.612-4.364-9.612-9.752 0-5.388 4.224-9.752 9.612-9.752 2.928 0 5.12 1.148 6.852 2.776l2.328-2.328c-1.976-1.872-4.536-3.296-9.18-3.296-8.284 0-15 6.716-15 15s6.716 15 15 15c4.464 0 7.84-1.472 10.512-4.24 2.768-2.768 3.632-6.672 3.632-9.92 0-.968-.08-1.896-.224-2.768h-10.212z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
