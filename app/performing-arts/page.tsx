"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function PerformingArts() {
  return (
    <>
      <Link href="/" className={styles.backLink}>
        ← Back to Home
      </Link>

      <div className={styles.container}>
        <section className={styles.intro}>
          <h2>Varsity Performing Arts</h2>
          <p>
            Bringing together the sights and sounds of schools, Varsity Performing Arts fuels the passion and spirit found in every high school across America.
          </p>
        </section>

        <section className={styles.contentGrid}>
          {/* Catalog */}
          <div className={styles.card}>
            <h3>Performing Arts Catalog</h3>
            <p>Explore 2026 styles and uniforms for your ensemble</p>
          </div>

          {/* Band Wear */}
          <div className={styles.card}>
            <h3>Varsity Band Wear</h3>
            <p>Powered by Stanbury - innovative styles for marching bands</p>
          </div>

          {/* Color Guard */}
          <div className={styles.card}>
            <h3>Color Guard</h3>
            <p>Uniforms and accessories for color guard programs</p>
          </div>

          {/* Competitions */}
          <div className={styles.card}>
            <h3>Competitions</h3>
            <p>Pep Band Division and National School Band Championship</p>
          </div>

          {/* Special Events */}
          <div className={styles.card}>
            <h3>Special Events</h3>
            <p>Celebration of Bands at Walt Disney World Resort</p>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>© 2026 Varsity Spirit. All rights reserved.</footer>
    </>
  );
}