"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function SchoolDanceHome() {
  const sections = [
    {
      id: "overview",
      title: "Overview",
      description: "Learn about school dance competitions and programs",
      icon: "📚",
    },
    {
      id: "competitions",
      title: "Competitions",
      description: "UCA and NCA dance championships",
      icon: "🎭",
    },
    {
      id: "camps",
      title: "Dance Camps",
      description: "Training camps and choreography workshops",
      icon: "🎬",
    },
    {
      id: "costumes",
      title: "Costumes & Attire",
      description: "Dance costumes, shoes, and accessories",
      icon: "👗",
    },
    {
      id: "team-shops",
      title: "Team Merchandise",
      description: "Custom team wear and spirit gear",
      icon: "🛍️",
    },
  ];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back to Home</Link>
        <div className={styles.headerContent}>
          <h1>School Dance</h1>
          <p>Performance and competition for school dancers</p>
        </div>
      </header>

      <section className={styles.intro}>
        <h2>Welcome to School Dance</h2>
        <p>
          School dance programs bring performers together for competitions, camps, and performances. 
          Compete in UCA and NCA dance championships, learn from industry-leading choreographers, 
          and connect with dancers across the nation.
        </p>
      </section>

      <section className={styles.contentGrid}>
        {sections.map((section) => (
          <Link key={section.id} href={`/school-dance/${section.id}`} className={styles.card}>
            <div className={styles.icon}>{section.icon}</div>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </Link>
        ))}
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2026 Varsity Spirit. All rights reserved.</p>
      </footer>
    </main>
  );
}