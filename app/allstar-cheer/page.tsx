"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function AllStarCheerHome() {
  const sections = [
    {
      id: "overview",
      title: "Overview",
      description: "Learn about the all-star cheer circuit and competitive gyms",
      icon: "📚",
    },
    {
      id: "competitions",
      title: "Major Competitions",
      description: "Summit, Worlds, U.S. Finals, and regional events",
      icon: "🌍",
    },
    {
      id: "gyms",
      title: "Find a Gym",
      description: "Locate all-star cheer gyms near you",
      icon: "🏢",
    },
    {
      id: "apparel",
      title: "Apparel",
      description: "Shop cheer wear, shells, and accessories",
      icon: "👟",
    },
    {
      id: "results",
      title: "Results & Rankings",
      description: "Scores, placements, and team rankings",
      icon: "📊",
    },
  ];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back to Home</Link>
        <div className={styles.headerContent}>
          <h1>All Star Cheer</h1>
          <p>Competitive cheer at its finest</p>
        </div>
      </header>

      <section className={styles.intro}>
        <h2>Welcome to All Star Cheer</h2>
        <p>
          All-star cheerleading is year-round competitive cheer through independent gyms. 
          Compete at the highest levels including Summit, Worlds, and U.S. Finals. 
          Train with elite coaches and compete against the best teams in the nation.
        </p>
      </section>

      <section className={styles.contentGrid}>
        {sections.map((section) => (
          <Link key={section.id} href={`/allstar-cheer/${section.id}`} className={styles.card}>
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