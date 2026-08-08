import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main id="page-content">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title animate-on-scroll">
            <span className="line">Eleva</span>
            <span className="line">tu marca al</span>
            <span className="line">siguiente nivel</span>
          </h1>
          <p className="hero-subtitle animate-on-scroll delay-100">
            Especialistas en Branding estratégico, Diseño Editorial y experiencias UX/UI.
          </p>
          <div className="hero-cta-group animate-on-scroll delay-200">
            <Link href="/projects" className="btn-primary hero-cta">
              Explorar Proyectos
            </Link>
          </div>
        </div>
      </header>

      {/* Featured Projects Section */}
      <section className="container py-20">
        <div className="section-header text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-muted">Una pequeña selección de nuestro mejor trabajo.</p>
        </div>
        
        <div className="grid">
          {/* Mock Featured Project 1 */}
          <article className="project-card animate-on-scroll">
            <div className="project-image-wrapper">
              <Image 
                src="/assets/img/portafolio/sinergia/sinergia.jpg" 
                alt="Sinergia - Identidad de Marca"
                width={800}
                height={600}
                className="project-image"
              />
              <div className="project-overlay">
                <span className="project-category">Branding</span>
                <h3 className="project-title">Sinergia</h3>
              </div>
            </div>
            <Link href="/projects/sinergia" className="project-link" aria-label="Ver proyecto Sinergia" />
          </article>
          
          {/* Mock Featured Project 2 */}
          <article className="project-card animate-on-scroll delay-100">
            <div className="project-image-wrapper">
              <Image 
                src="/assets/img/portafolio/acmi/acmi.jpg" 
                alt="Acta Médica Colombiana"
                width={800}
                height={600}
                className="project-image"
              />
              <div className="project-overlay">
                <span className="project-category">Diseño Editorial</span>
                <h3 className="project-title">Acta Médica Colombiana</h3>
              </div>
            </div>
            <Link href="/projects/acmi" className="project-link" aria-label="Ver proyecto Acta Médica" />
          </article>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/projects" className="btn-secondary">
            Ver portafolio completo
          </Link>
        </div>
      </section>
    </main>
  );
}
