"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { useTranslation } from "./TranslationProvider";

export default function ProjectFilmstrip() {
  const { t } = useTranslation();

  // Create two distinct sets of projects with varying aspect ratios for visual rhythm
  const row1 = [
    { project: projects[0], ratio: "aspect-[16/10]", width: "w-[320px] md:w-[420px]" },
    { project: projects[1], ratio: "aspect-[3/4]", width: "w-[180px] md:w-[240px]" },
    { project: projects[2], ratio: "aspect-[1/1]", width: "w-[220px] md:w-[280px]" },
    { project: projects[3], ratio: "aspect-[4/3]", width: "w-[280px] md:w-[360px]" },
    { project: projects[4], ratio: "aspect-[2/3]", width: "w-[170px] md:w-[220px]" },
    { project: projects[5], ratio: "aspect-[16/9]", width: "w-[320px] md:w-[440px]" },
  ];

  const row2 = [
    { project: projects[6] || projects[0], ratio: "aspect-[4/3]", width: "w-[260px] md:w-[350px]" },
    { project: projects[7] || projects[1], ratio: "aspect-[1/1]", width: "w-[200px] md:w-[260px]" },
    { project: projects[8] || projects[2], ratio: "aspect-[16/10]", width: "w-[300px] md:w-[400px]" },
    { project: projects[9] || projects[3], ratio: "aspect-[3/4]", width: "w-[180px] md:w-[230px]" },
    { project: projects[10] || projects[4], ratio: "aspect-[4/3]", width: "w-[270px] md:w-[360px]" },
    { project: projects[0], ratio: "aspect-[16/9]", width: "w-[310px] md:w-[420px]" },
  ];

  // Duplicate for seamless infinite loop
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
              style={{
                width: item.width.includes("420px") ? "380px" : item.width.includes("360px") ? "320px" : item.width.includes("280px") ? "260px" : "220px",
                height: "220px",
              }}
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
              style={{
                width: item.width.includes("420px") ? "390px" : item.width.includes("360px") ? "330px" : item.width.includes("260px") ? "250px" : "210px",
                height: "220px",
              }}
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
