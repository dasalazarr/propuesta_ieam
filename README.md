IEAM · Premium Editorial Design System
======================================

Visión
------
- Referencia estética: Institut Montaigne (con ecos de The Economist, FT, Monocle y Chatham House).
- Objetivo: lectura rigurosa y serena, con tipografía protagonista, espacio generoso y hairlines en lugar de cajas y sombras.
- Alcance: Home, Investigación, Eventos y Actualidad, Nosotros y Diálogo Mediterráneo.

Cómo ejecutar
-------------
- `npm install`
- `npm run dev` → entorno local en Vite
- `npm run build` → build listo para producción

Tokens y helpers clave
----------------------
- Colores (`:root` en `src/index.css`): navy `#0A2540`, mediterranean `#006994`, acento rojo `#D4212A`, terracota `#C45831`, fondos paper/paper-warm, textos secundarios `#64748B`, bordes sutiles `#E2E8F0`.
- Tipografía: Playfair Display (`--font-serif`) para titulares, Inter (`--font-sans`) para cuerpo; line-height cuerpo `1.625`, tracking tight en titulares.
- Escalas: tamaños 5xl–7xl para H1, lectura óptima `--container-reading: 680px`.
- Espaciado: secciones `--section-padding-y: 6rem`, versión amplia `--section-padding-y-lg: 8rem`.
- Efectos: sin sombras gruesas; `--shadow-editorial` para casos puntuales, transiciones suaves `200ms`.
- Helpers (`@layer components` en `src/index.css`):
  - `page-shell`: ancho máximo 1280px con padding horizontal uniforme.
  - `section-shell` / `section-shell-lg`: padding vertical consistente.
  - `reading-width`: columna de lectura estrecha (artículos/lead).
  - `eyebrow`: etiqueta editorial en mayúsculas con punto de color.
  - `hairline`: usa el color de borde sutil del sistema.

Pautas de uso en componentes
----------------------------
- Navegación: sticky, altura 72px, CTA con acento navy y tracking amplio; sin dropdowns.
- Hero Home: título 5xl–6xl serif, tags contextuales, CTAs en mayúsculas con tracking editorial.
- Cards (`Card` en `components/ui/UnifiedCard.tsx`): bordes hairline, sin sombras pesadas, hover con leve lift; badges con gamas tonales.
- Secciones: alternar fondos `paper`/`paper-warm`, separar con hairlines; usar `page-shell` y `section-shell` para evitar clases repetidas.
- Listas/temas: chips pequeños (`text-[11px]`), uppercase solo donde aporte jerarquía.

Categorización de contenidos
----------------------------
- Tipos editoriales (campo `type`): Informe, Análisis, Policy Brief, Infografía, Reseña de evento, Entrevista, Nota de prensa.
- Taxonomía operativa (campo `contentKind`): `policy`, `analisis`, `infografia`, `reseña-evento`, `entrevista`, `nota-prensa` (útil para filtros y navegación).
- Material descargable: en artículos que correspondan, usar `materialUrl` + `materialLabel` para mostrar botón de descarga.
- Eventos: se gestionan en `src/data/events.ts` con `agenda` y `speakers`; se renderizan en `/eventos/:slug`.

Estado de las páginas
---------------------
- Home: hero premium, estrategia, análisis destacados, agenda y CTA de newsletter alineados al sistema.
- Investigación: hero navy, grid de pilares y lista de publicaciones con cards editoriales.
- Eventos y Actualidad: hero inmersivo, último lanzamiento, grids de artículos y eventos.
- Eventos (CMS-lite): ruta dinámica `/eventos/:slug` renderiza cada evento definido en `src/data/events.ts` (ejemplos: `foro-dialogo-mediterraneo-2025`, `sahel-seguridad-2025`), enlazados desde la grid de eventos.
- Nosotros: hero inmersivo, misión/visión, equipo y fellows con bios, CTA de talento, partners.
- Diálogo Mediterráneo: hero degradado, bloques de foco, eventos realizados y recursos.
- Artículos dinámicos (CMS-lite): ruta ` /analisis/:slug ` renderiza cualquier entrada definida en `src/data/articles.ts` usando un único componente (`src/pages/ArticlePage.tsx`). Ejemplos listos:
  - `movilidad-africa-europa`
  - `seguridad-sahel-2025`

Próximos pasos sugeridos
------------------------
1) Plantilla de Eventos avanzada (Phase 2): hero con fecha, agenda modular, speakers y CTA de registro.  
2) Añadir barra de progreso de lectura opcional al artículo y estados de foco AA en CTAs clave.  
3) Optimizar imágenes (WebP + `loading="lazy"`) y perf de datos para artículos extensos.  
4) Si se añaden nuevas secciones, reutilizar `page-shell`/`section-shell` y la escala tipográfica actual.
