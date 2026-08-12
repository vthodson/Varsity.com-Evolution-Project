"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function AllStarDanceHome() {
  const sections = [
    {
      id: "overview",
      title: "Overview",
      description: "Discover the all-star dance circuit and competitions",
      icon: "📚",
    },
    {
      id: "competitions",
      title: "Circuit Events",
      description: "Competitions and showcases across the all-star circuit",
      icon: "🌟",
    },
    {
      id: "studios",
      title: "Find a Studio",
      description: "Locate all-star dance studios in your area",
      icon: "🏛️",
    },
    {
      id: "costumes",
      title: "Dance Wear",
      description: "Costumes, shoes, and performance attire",
      icon: "✨",
    },
    {
      id: "videos",
      title: "Performances",
      description: "Watch performances and highlights from events",
      icon: "🎥",
    },
  ];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back to Home</Link>
        <div className={styles.headerContent}>
          <h1>All Star Dance</h1>
          <p>Elite dance competition and training</p>
        </div>
      </header>

      <section className={styles.intro}>
        <h2>Welcome to All Star Dance</h2>
        <p>
          All-star dance is competitive dance through independent studios with year-round seasons. 
          Compete at premium events, learn from top choreographers, and perform at national competitions. 
          Join thousands of elite dancers pursuing their passion.
        </p>
      </section>

      <section className={styles.contentGrid}>
        {sections.map((section) => (
          <Link key={section.id} href={`/allstar-dance/${section.id}`} className={styles.card}>
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