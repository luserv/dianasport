// ⚠️  REEMPLAZAR antes de publicar:
const WA_NUMBER = "5939991780351"; // Código país + número, sin + ni espacios
const WA_MSG = encodeURIComponent(
  "Hola DIANISPORT! Me interesa cotizar uniformes deportivos personalizados. ¿Pueden ayudarme?"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

function IconWA({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const productos = [
  {
    deporte: "Fútbol",
    emoji: "⚽",
    descripcion:
      "Camiseta, short y medias en polyester/lycra transpirable. Tallas XS–XXL para toda la plantilla.",
    tecnicas: ["Sublimación", "Bordado", "Estampado"],
    precio: "$25 – $38",
  },
  {
    deporte: "Básquet",
    emoji: "🏀",
    descripcion:
      "Jersey y pantaloneta con corte atlético. Numeración completa y escudo o nombre del equipo.",
    tecnicas: ["Sublimación", "Bordado"],
    precio: "$28 – $40",
  },
  {
    deporte: "Vóley",
    emoji: "🏐",
    descripcion:
      "Camiseta y short de vóley. Diseño exclusivo con los colores e identidad visual del equipo.",
    tecnicas: ["Sublimación", "Bordado"],
    precio: "$25 – $38",
  },
  {
    deporte: "Atletismo",
    emoji: "🏃",
    descripcion:
      "Licra y camiseta de competencia en tela de alta elasticidad. Comodidad y rendimiento en pista.",
    tecnicas: ["Sublimación", "Estampado"],
    precio: "$28 – $42",
  },
  {
    deporte: "Corporativo",
    emoji: "🏢",
    descripcion:
      "Uniformes institucionales con logo empresarial. Ideal para ligas, empresas y eventos oficiales.",
    tecnicas: ["Bordado computarizado", "Sublimación"],
    precio: "$35 – $45",
  },
];

const ventajas = [
  {
    numero: "01",
    titulo: "Personalización total",
    descripcion:
      "Cada uniforme diseñado a medida, reflejando la identidad de tu equipo o institución.",
  },
  {
    numero: "02",
    titulo: "Calidad artesanal",
    descripcion:
      "Supervisión en cada etapa: corte, costura, acabados y revisión final antes de la entrega.",
  },
  {
    numero: "03",
    titulo: "Asesoría en diseño",
    descripcion:
      "Orientación en colores, tipografías y escudos incluida sin ningún costo adicional.",
  },
  {
    numero: "04",
    titulo: "Tiempos ágiles",
    descripcion:
      "Plazos de entrega competitivos con aprobación digital del diseño antes de producir.",
  },
  {
    numero: "05",
    titulo: "Precios accesibles",
    descripcion:
      "Desde $25 por uniforme. Descuentos por volumen a partir de 10 unidades del mismo diseño.",
  },
  {
    numero: "06",
    titulo: "Certificación JNDA",
    descripcion:
      "Maestro Artesano calificado. Factura electrónica con tarifa IVA 0% para artesanos.",
  },
];

export default function Home() {
  return (
    <div className="bg-canvas font-sans">

      {/* ── NAVEGACIÓN ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-canvas-dark/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#inicio"
            className="font-display text-xl font-bold tracking-tight text-ink-light"
          >
            DIANI<span className="text-brand">SPORT</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-dim">
            <a href="#nosotros" className="hover:text-ink-light transition-colors duration-150">
              Nosotros
            </a>
            <a href="#catalogo" className="hover:text-ink-light transition-colors duration-150">
              Catálogo
            </a>
            <a href="#ventajas" className="hover:text-ink-light transition-colors duration-150">
              Ventajas
            </a>
          </nav>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-wa hover:bg-wa-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-150"
          >
            <IconWA size={16} />
            Cotizar
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        id="inicio"
        className="min-h-screen bg-canvas-dark flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center"
      >
        <div className="max-w-4xl mx-auto w-full">

          {/* Overline */}
          <p className="font-display text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-brand mb-8">
            Macas, Ecuador &nbsp;·&nbsp; Maestro Artesano JNDA
          </p>

          {/* Wordmark */}
          <div className="mb-8">
            <h1
              className="font-display font-bold leading-none select-none"
              aria-label="DIANISPORT"
            >
              <span className="block text-[4.5rem] sm:text-[6.5rem] md:text-[9rem] lg:text-[11rem] text-ink-light tracking-tight">
                DIANI
              </span>
              <span
                aria-hidden="true"
                className="block mx-auto my-1 sm:my-2 rounded-full bg-brand"
                style={{ width: "clamp(5rem, 12vw, 11rem)", height: "3px" }}
              />
              <span className="block text-[4.5rem] sm:text-[6.5rem] md:text-[9rem] lg:text-[11rem] text-brand tracking-tight">
                SPORT
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-ink-light/70 uppercase tracking-[0.15em] mb-5">
            Uniformes que dan identidad
          </p>

          {/* Descripción */}
          <p className="text-ink-dim text-sm sm:text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Confección artesanal de uniformes deportivos personalizados para equipos barriales,
            instituciones educativas y empresas en Macas y Morona Santiago.
          </p>

          {/* CTA principal */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wa hover:bg-wa-dark text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-full transition-colors duration-150"
          >
            <IconWA size={22} />
            Pedir cotización por WhatsApp
          </a>

          {/* Nota de confianza */}
          <p className="mt-5 text-ink-dim text-xs sm:text-sm">
            50% anticipo al confirmar &nbsp;·&nbsp; Factura electrónica &nbsp;·&nbsp; IVA 0%
          </p>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-brand py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
            {[
              { valor: "$25 – $45", etiqueta: "precio por uniforme" },
              { valor: "5 deportes", etiqueta: "en catálogo" },
              { valor: "100%", etiqueta: "personalizado" },
              { valor: "Desc. 10+", etiqueta: "unidades por lote" },
            ].map((s) => (
              <div key={s.etiqueta} className="flex flex-col gap-1">
                <span className="font-display text-3xl sm:text-4xl font-bold text-white leading-none">
                  {s.valor}
                </span>
                <span className="text-white/70 text-xs uppercase tracking-wider font-medium">
                  {s.etiqueta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISIÓN Y VISIÓN ── */}
      <section id="nosotros" className="bg-canvas py-20 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-display text-xs font-bold tracking-[0.3em] uppercase text-brand">
              Quiénes somos
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink uppercase mt-2 leading-tight">
              Propósito y Visión
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            <div className="bg-canvas-alt rounded-2xl p-8 lg:p-10">
              <div className="w-12 h-[3px] bg-brand rounded-full mb-6" />
              <h3 className="font-display text-2xl font-bold text-ink uppercase tracking-wide mb-4">
                Nuestra Misión
              </h3>
              <p className="text-ink/65 leading-relaxed text-sm sm:text-base">
                DIANISPORT confecciona uniformes deportivos de calidad, combinando técnica artesanal
                y materiales de alto rendimiento, para satisfacer las necesidades de equipos
                deportivos, instituciones educativas y empresas, ofreciendo productos personalizados
                que fortalecen la identidad y el espíritu de equipo de nuestros clientes.
              </p>
            </div>

            <div className="bg-canvas-alt rounded-2xl p-8 lg:p-10">
              <div className="w-12 h-[3px] bg-brand rounded-full mb-6" />
              <h3 className="font-display text-2xl font-bold text-ink uppercase tracking-wide mb-4">
                Nuestra Visión
              </h3>
              <p className="text-ink/65 leading-relaxed text-sm sm:text-base">
                Para el año 2030, DIANISPORT será reconocida como la empresa artesanal de confección
                deportiva de mayor confianza en Macas, distinguida por la calidad de sus productos,
                la puntualidad en sus entregas y la capacidad de innovar en diseño, expandiendo su
                presencia a nivel nacional y convirtiéndose en referente del emprendimiento artesanal
                ecuatoriano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATÁLOGO ── */}
      <section id="catalogo" className="bg-canvas-alt py-20 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-display text-xs font-bold tracking-[0.3em] uppercase text-brand">
              Productos y servicios
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink uppercase mt-2 leading-tight">
              Catálogo
            </h2>
            <p className="mt-4 text-ink/55 text-sm sm:text-base max-w-md mx-auto">
              Todos los uniformes incluyen asesoría en diseño sin costo adicional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {productos.map((p) => (
              <article
                key={p.deporte}
                className="bg-canvas rounded-2xl p-6 sm:p-8 flex flex-col gap-5 border border-ink/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-4xl mb-3 block" aria-hidden="true">
                      {p.emoji}
                    </span>
                    <h3 className="font-display text-3xl font-bold text-ink uppercase leading-none">
                      {p.deporte}
                    </h3>
                    <div className="w-8 h-[2px] bg-brand mt-2 rounded-full" />
                  </div>
                  <div className="shrink-0 text-right mt-1">
                    <span className="font-display text-2xl font-bold text-brand block leading-none">
                      {p.precio}
                    </span>
                    <span className="text-ink-dim text-xs mt-1 block">por uniforme</span>
                  </div>
                </div>

                <p className="text-ink/60 text-sm leading-relaxed flex-1">{p.descripcion}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tecnicas.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold border border-brand/30 text-brand/75 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                    `Hola DIANISPORT! Me interesa cotizar uniformes de ${p.deporte}. ¿Pueden ayudarme?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-wa hover:text-wa-dark transition-colors duration-150 mt-1"
                >
                  <IconWA size={16} />
                  Cotizar {p.deporte}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIRNOS ── */}
      <section id="ventajas" className="bg-canvas-dark py-20 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-display text-xs font-bold tracking-[0.3em] uppercase text-brand">
              Diferenciadores
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink-light uppercase mt-2 leading-tight">
              Por qué elegirnos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {ventajas.map((v) => (
              <div key={v.numero} className="flex gap-4">
                <span
                  className="font-display text-5xl font-bold leading-none shrink-0 select-none"
                  style={{ color: "oklch(0.62 0.19 42 / 0.22)" }}
                  aria-hidden="true"
                >
                  {v.numero}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-bold text-ink-light uppercase tracking-wide mb-2">
                    {v.titulo}
                  </h3>
                  <p className="text-ink-dim text-sm leading-relaxed">{v.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section id="contacto" className="bg-brand py-20 px-6 text-center scroll-mt-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase leading-tight mb-4">
            ¿Listo para cotizar?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            Tu uniforme personalizado está a un mensaje de distancia. Escríbenos y recibe tu
            cotización sin compromiso.
          </p>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-canvas-alt text-brand font-bold text-base sm:text-lg px-10 py-5 rounded-full transition-colors duration-150"
          >
            <IconWA size={24} />
            Escribir por WhatsApp
          </a>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/70 text-sm">
            <span>📍 Macas, Morona Santiago</span>
            <span>🕐 Lun–Sáb &nbsp; 8h00 – 17h00</span>
            <span>📄 Factura electrónica IVA 0%</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-canvas-dark border-t border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span className="font-display text-xl font-bold text-ink-light">
            DIANI<span className="text-brand">SPORT</span>
          </span>
          <p className="text-ink-dim text-sm">
            Confección artesanal de uniformes deportivos · Macas, Ecuador
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-dim hover:text-wa transition-colors duration-150 text-sm font-medium"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </footer>

      {/* ── BOTÓN FLOTANTE WHATSAPP (móvil) ── */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-wa hover:bg-wa-dark text-white rounded-full shadow-xl transition-all duration-150 hover:scale-105 md:hidden"
      >
        <IconWA size={26} />
      </a>
    </div>
  );
}
