"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function YearbookHome() {
  const sections = [
    {
      id: "overview",
      title: "Overview",
      description: "Create lasting memories with professional yearbook services",
      icon: "📖",
    },
    {
      id: "browse",
      title: "Browse Yearbooks",
      description: "Explore yearbooks from schools across the nation",
      icon: "🔍",
    },
    {
      id: "order",
      title: "Order Yearbooks",
      description: "Order your school's yearbook or reprints",
      icon: "📚",
    },
    {
      id: "photos",
      title: "Photo Gallery",
      description: "View and share photos from events and activities",
      icon: "📸",
    },
    {
      id: "customize",
      title: "Customize",
      description: "Design custom pages and add your memories",
      icon: "✏️",
    },
  ];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back to Home</Link>
        <div className={styles.headerContent}>
          <h1>Yearbook</h1>
          <p>Preserve your school memories</p>
        </div>
      </header>

      <section className={styles.intro}>
        <h2>Welcome to Varsity Yearbook</h2>
        <p>
          Create beautiful yearbooks that capture the spirit and memories of your school. 
          From sports to clubs to school spirit, Varsity Yearbook helps you tell your school's story. 
          Order copies, design custom pages, and preserve memories that last a lifetime.
        </p>
      </section>

      <section className={styles.contentGrid}>
        {sections.map((section) => (
          <Link key={section.id} href={`/yearbook/${section.id}`} className={styles.card}>
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