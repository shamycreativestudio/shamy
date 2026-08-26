import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="page-content"
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "560px" }}>
        <p style={{ fontSize: "0.85rem", letterSpacing: "2px", color: "var(--muted)", textTransform: "uppercase", marginBottom: "1rem" }}>
          Error 404
        </p>
        <h1 className="hero-headline" style={{ marginBottom: "1.25rem" }}>
          Página no encontrada
        </h1>
        <p className="hero-desc" style={{ marginBottom: "2.5rem" }}>
          La página que buscas no existe o fue movida.
        </p>
        <Link href="/" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
