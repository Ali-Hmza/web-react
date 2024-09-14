// src/components/LandingPage.js
import React from 'react';
import styles from '../styles/LandingPage.module.css';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <section className={styles.heroSection} id="home">
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Welcome to TechBrand</h1>
          <p>Your one-stop solution for all things tech.</p>
          <button className={styles.ctaButton}>Learn More</button>
        </motion.div>
        
        <div className={styles.heroImageContainer}>
          <motion.img
            src="
https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D            "
            alt="Tech"
            className={styles.heroImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </section>

      <section className={styles.servicesSection} id="services">
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>Web Development</div>
          <div className={styles.serviceCard}>App Development</div>
          <div className={styles.serviceCard}>Cloud Solutions</div>
          <div className={styles.serviceCard}>Cybersecurity</div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
