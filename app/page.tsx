"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Varsity.com</h1>
          <p>The platform for student-athletes, coaches, and families</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h2>Choose your path</h2>
        <p>Select your sport and type of participation</p>
      </section>

      {/* Sport Grid */}
      <section className={styles.grid}>
        {/* School Cheer */}
        <Link href="/school-cheer" className={styles.card}>
          <div className={styles.cardContent}>
            <h3>School Cheer</h3>
            <p>Competitions, camps, and news for school cheerleading</p>
          </div>
        </Link>

        {/* All Star Cheer */}
        <Link href="/allstar-cheer" className={styles.card}>
          <div className={styles.cardContent}>
            <h3>All Star Cheer</h3>
            <p>The circuit, summits, and competitive all-star cheer</p>
          </div>
        </Link>

        {/* School Dance */}
        <Link href="/school-dance" className={styles.card}>
          <div className={styles.cardContent}>
            <h3>School Dance</h3>
            <p>Competitions and camps for school dance teams</p>
          </div>
        </Link>

        {/* All Star Dance */}
        <Link href="/allstar-dance" className={styles.card}>
          <div className={styles.cardContent}>
            <h3>All Star Dance</h3>
            <p>All-star dance competitions and circuit events</p>
          </div>
        </Link>

        {/* Yearbook */}
        <Link href="/yearbook" className={styles.card}>
          <div className={styles.cardContent}>
            <h3>Yearbook</h3>
            <p>Yearbook services and school memories</p>
          </div>
        </Link>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2026 Varsity Spirit. All rights reserved.</p>
      </footer>
    </main>
  );
}