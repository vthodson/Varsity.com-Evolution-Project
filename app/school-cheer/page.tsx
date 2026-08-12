"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function SchoolCheerHome() {
  const sections = [
    {
      id: "overview",
      title: "Overview",
      description: "Learn about school cheerleading, UCA, NCA, and how to get started",
      icon: "📚",
    },
    {
      id: "camps",
      title: "Camps",
      description: "Training camps and workshops for school cheer teams",
      icon: "🏕️",
    },
    {
      id: "competitions",
      title: "Competitions",
      description: "UCA and NCA competitions, schedules, and results",
      icon: "🏆",
    },
    {
      id: "uniforms",
      title: "Uniforms",
      description: "Shop custom uniforms, shells, and apparel",
      icon: "👕",
    },
    {
      id: "team-shops",
      title: "Team Shops",
      description: "Create custom team merchandise and spirit wear",
      icon: "🛍️",
    },
  ];

  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back to Home</Link>
        <div className={styles.headerContent}>
          <h1>School Cheer</h1>
          <p>Everything for school cheerleading teams</p>
        </div>
      </header>

      {/* Intro Section */}
      <section className={styles.intro}>
        <h2>Welcome to School Cheer</h2>
        <p>
          School cheerleading is a competitive sport for high school and middle school teams. 
          Compete in UCA and NCA championships, train at camps, and connect with cheerleaders 
          across the school circuit.
        </p>
      </section>

      {/* Content Sections Grid */}
      <section className={styles.contentGrid}>
        {sections.map((section) => (
          <Link key={section.id} href={`/school-cheer/${section.id}`} className={styles.card}>
            <div className={styles.icon}>{section.icon}</div>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2026 Varsity Spirit. All rights reserved.</p>
      </footer>
    </main>
  );
}