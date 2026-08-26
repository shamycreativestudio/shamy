"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useTranslation } from "./TranslationProvider";

export default function ProjectFilmstrip() {
  const { t } = useTranslation();

  // Dos filas con anchos variables para ritmo visual (--card-w se consume en globals.css)
  const row1 = [
    { project: projects[0], cardWidth: 380 },
    { project: projects[1], cardWidth: 200 },
    { project: projects[2], cardWidth: 260 },
    { project: projects[3], cardWidth: 320 },
    { project: projects[4], cardWidth: 190 },
    { project: projects[5], cardWidth: 400 },
  ];

  const row2 = [
    { project: projects[6] || projects[0], cardWidth: 330 },
    { project: projects[7] || projects[1], cardWidth: 240 },
    { project: projects[8] || projects[2], cardWidth: 370 },
    { project: projects[9] || projects[3], cardWidth: 210 },
    { project: projects[10] || projects[4], cardWidth: 340 },
    { project: projects[0], cardWidth: 390 },
  ];

  // Duplicado para loop infinito continuo
  const fullRow1 = [...row1, ...row1];
  const fullRow2 = [...row2, ...row2];

  return (
    <section className="filmstrip-container" aria-label="Galería interactiva de proyectos">
      {/* Row 1: Leftward Infinite Scroll */}
      <div className="filmstrip-track-wrapper">
        <div className="filmstrip-track filmstrip-left">
          {fullRow1.map((item, idx) => (
            <Link
              key={`r1-${item.project.id}-${idx}`}
              href={`/projects/${item.project.id}`}
              className="filmstrip-card"
              style={{ "--card-w": `${item.cardWidth}px` } as React.CSSProperties}
              tabIndex={idx >= row1.length ? -1 : undefined}
              aria-hidden={idx >= row1.length ? true : undefined}
            >
              <div className="filmstrip-media">
                <Image
                  src={`/${item.project.coverImage}`}
                  alt={t(item.project.titleKey)}
                  fill
                  sizes="(max-width: 768px) 300px, 500px"
                  className="filmstrip-img"
                />
                <div className="filmstrip-overlay">
                  <h3 className="filmstrip-title">{t(item.project.titleKey)}</h3>
                  <span className="filmstrip-cat">{item.project.category} · {item.project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Infinite Scroll */}
      <div className="filmstrip-track-wrapper" style={{ marginTop: "6px" }}>
        <div className="filmstrip-track filmstrip-right">
          {fullRow2.map((item, idx) => (
            <Link
              key={`r2-${item.project.id}-${idx}`}
              href={`/projects/${item.project.id}`}
              className="filmstrip-card"
              style={{ "--card-w": `${item.cardWidth}px` } as React.CSSProperties}
              tabIndex={idx >= row2.length ? -1 : undefined}
              aria-hidden={idx >= row2.length ? true : undefined}
            >
              <div className="filmstrip-media">
                <Image
                  src={`/${item.project.coverImage}`}
                  alt={t(item.project.titleKey)}
                  fill
                  sizes="(max-width: 768px) 300px, 500px"
                  className="filmstrip-img"
                />
                <div className="filmstrip-overlay">
                  <h3 className="filmstrip-title">{t(item.project.titleKey)}</h3>
                  <span className="filmstrip-cat">{item.project.category} · {item.project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
