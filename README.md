# Portafolio

Portafolio personal de una sola página, bilingüe (español / inglés), construido con React, Vite y Tailwind CSS v4, con animaciones en GSAP.

## Stack

| Área             | Tecnología                            |
| ---------------- | ------------------------------------- |
| Framework        | React + Vite                          |
| Estilos          | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Rutas            | React Router (`createBrowserRouter`)  |
| Animaciones      | GSAP + `@gsap/react` (ScrollTrigger)  |
| Iconos           | `lucide-react`                        |
| HTML desde texto | `html-react-parser` + `dompurify`     |

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
```

---

## Arquitectura

El proyecto sigue una **arquitectura por capas orientada a features**, con una regla central en cada componente: **la vista y la lógica viven en archivos separados**.

```
             main.jsx
                │
           app/index.jsx        StrictMode + Providers + RouterProvider
                │
          app/router            "/" → "/es" | "/en"   ·   errores → RouteError
                │
           pages/home           Única página: une las features
                │
     ┌──────────┼──────────┐
 features/   components/   contexts/      ← consumen lib/ y mocks/
```

Las dependencias van **siempre hacia abajo**: una capa puede importar de las capas inferiores, nunca de las superiores ni de capas hermanas del mismo nivel.

| Capa             | Puede importar de                            |
| ---------------- | -------------------------------------------- |
| `app/`           | todo                                         |
| `pages/`         | `features/`, `components/`, `contexts/`      |
| `features/`      | `components/`, `contexts/`, `lib/`, `mocks/` |
| `components/`    | `contexts/`, `lib/`                          |
| `contexts/`      | `mocks/`                                     |
| `lib/`, `mocks/` | nada del proyecto                            |

> Una feature **no** importa otra feature. Si dos features necesitan lo mismo, eso se mueve a `components/` o `lib/`.

---

## Estructura

```
src/
├── base.css                 Entrada de Tailwind + tema global
├── main.jsx                 Monta <App /> en el DOM
│
├── app/
│   ├── index.jsx            Raíz: StrictMode, LanguageProvider, RouterProvider
│   └── router/
│       └── index.js         Definición de rutas (sin JSX)
│
├── pages/
│   └── home/                Única página del sitio
│       ├── hook.js          Sincroniza /es · /en con el contexto de idioma
│       └── index.jsx        Lista de secciones (features)
│
├── features/                Secciones del portafolio
│   ├── AboutMe/
│   ├── Education/
│   ├── Technologies/
│   ├── Projects/
│   └── SocialMedia/
│
├── components/
│   ├── index.js             Barrel: re-exporta todos los componentes
│   ├── ui/                  Piezas visuales reutilizables
│   │   ├── HtmlContent/     Renderiza strings HTML como React
│   │   ├── LanguageToggle/  Botón ES / EN
│   │   ├── RenderIcon/      Icono de Lucide desde un string + tooltip
│   │   └── Reveal/          Animación de entrada genérica (GSAP)
│   └── errors/              Manejo de errores y estados vacíos
│       ├── RouteError/      Error de ruta: decide entre 404 y fallo
│       ├── NotFound/        Página 404
│       ├── ErrorBoundary/   Aísla el fallo de un componente
│       ├── ErrorFallback/   UI que se muestra cuando algo falla
│       └── EmptyState/      Sin datos (no es un error)
│
├── contexts/
│   └── Language/            Idioma actual, t() y pick()
│
├── lib/
│   └── gsap/
│       ├── index.js         Registro único de plugins de GSAP
│       └── animations.js    Diccionario de animaciones reutilizables
│
└── mocks/
    └── index.js             Datos y textos (TechnologiesData, Languages)
```

### Qué va en cada carpeta

- **`app/`**: configuración global. Aquí no hay UI propia, solo se conectan providers y rutas.
- **`pages/`**: una página compone features. No contiene lógica de negocio ni estilos complejos.
- **`features/`**: cada sección del portafolio. Son específicas de este proyecto y no se reutilizan fuera de su página.
- **`components/ui/`**: piezas genéricas que no saben en qué sección están. Si un componente menciona "Projects" o "Education", no pertenece aquí.
- **`components/errors/`**: todo lo que se muestra cuando algo sale mal o no hay datos.
- **`contexts/`**: estado global compartido (hoy solo el idioma).
- **`lib/`**: configuración y helpers de librerías externas. Si mañana se cambia GSAP por otra librería, solo se toca esta carpeta.
- **`mocks/`**: datos estáticos. Cuando exista el backend en Django, estos datos se reemplazan por llamadas a la API sin cambiar los componentes.

---

## Convención de componentes: `index.jsx` + `hook.js`

Cada componente es una carpeta con dos archivos:

```
MiComponente/
├── index.jsx   → QUÉ se ve    (JSX, clases de Tailwind, diccionarios de vistas)
└── hook.js     → CÓMO funciona (estado, efectos, GSAP, datos, validaciones)
```

### Reglas

1. **`hook.js` no contiene JSX.** Por eso es `.js` y no `.jsx`. Si necesitas JSX, va en `index.jsx`.
2. **`index.jsx` no contiene lógica.** Solo llama al hook, recibe valores y pinta.
3. El hook se llama `use<Nombre>Hook` y retorna un objeto: `const { ref, onEnter } = useTechnologiesHook()`.
4. Todo componente exporta por `default` desde `index.jsx`, así se importa por carpeta: `import Reveal from "@/components/ui/Reveal"`.
5. Si un componente no tiene lógica (como `LanguageToggle`), no lleva `hook.js`.
6. **Excepción:** `ErrorBoundary` es un componente de clase, porque React no ofrece un hook para atrapar errores de render.

### Patrón de diccionario

Cuando la vista depende de un tipo o una prop, se usa un objeto en vez de `if` encadenados. El hook decide **qué** es, el diccionario en `index.jsx` decide **cómo** se ve:

```jsx
// hook.js
const getNodeType = (node) => (node.name === "img" ? "image" : null);

// index.jsx
const RENDERERS = {
  image: (node) => <img src={node.attribs.src} loading="lazy" />,
};

const render = RENDERERS[getNodeType(node)];
```

Se usa en `HtmlContent` (tipos de nodo) y en `lib/gsap/animations.js` (tipos de animación).

---

## Rutas e idioma

El sitio es una sola página; la URL solo define el idioma.

| URL            | Resultado                                                                   |
| -------------- | --------------------------------------------------------------------------- |
| `/`            | Redirige a `/es` o `/en` (idioma guardado → idioma del navegador → español) |
| `/es`, `/en`   | Página principal en ese idioma                                              |
| Cualquier otra | 404 (`NotFound`)                                                            |

- El **router valida** el idioma en el `loader` de `:lang` antes de renderizar.
- `pages/home/hook.js` copia el idioma de la URL al contexto.
- `LanguageToggle` cambia de idioma **cambiando la URL** (y conserva el `#hash` de la sección).
- La elección se guarda en `localStorage` y se aplica a `<html lang="">`.

### Usar textos traducidos

```jsx
import { useLanguage } from "@/contexts/Language";

const { lang, t, pick } = useLanguage();

t("AboutMe"); // texto de Languages[lang]
pick({ es: "Ciberseguridad", en: "Cybersecurity" }); // elige del objeto
pick("React"); // strings normales pasan igual
```

- **Textos de interfaz y párrafos** → `Languages` en `mocks/index.js`, se leen con `t()`.
- **Datos que cambian por idioma** (nombres de categorías, etc.) → objetos `{ es, en }` dentro del dato, se leen con `pick()`.
- **Datos iguales en ambos idiomas** (React, Python) → string normal.
- Los textos con formato (`<b>`, `<br />`, listas) se renderizan con `HtmlContent`.

Para agregar un idioma: añadir el código a `SUPPORTED_LANGUAGES` en `contexts/Language/hook.js` y su bloque en `Languages`.

---

## Manejo de errores

Hay tres niveles, cada uno con su componente:

| Situación                          | Causa                           | Lo maneja                         |
| ---------------------------------- | ------------------------------- | --------------------------------- |
| Ruta inexistente o idioma inválido | `/fr`, `/algo`                  | `RouteError` → `NotFound`         |
| Una sección se rompe al renderizar | Error de JS en una feature      | `ErrorBoundary` → `ErrorFallback` |
| No hay datos                       | Array vacío, API sin resultados | `EmptyState`                      |

Cada feature se envuelve en su propio `ErrorBoundary` (lo hace `pages/home` automáticamente), así si una sección falla el resto del portafolio sigue funcionando.

---

## Animaciones (GSAP)

- Los plugins se registran **una sola vez** en `lib/gsap/index.js`. Siempre se importa desde ahí:
  ```js
  import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
  ```
- Toda animación va en el `hook.js` del componente, con `useGSAP` (nunca `useEffect`) y un `scope`:
  ```js
  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(".item", { y: 40, opacity: 0, stagger: 0.1 });
    },
    { scope: containerRef },
  );
  ```
- Animaciones disparadas por eventos (hover, click) se envuelven en `contextSafe`.
- Para entradas comunes se usa `<Reveal type="fadeUp">` con los presets de `lib/gsap/animations.js`.
- Las `key` de listas animadas deben ser estables entre idiomas (`tech.icon`, `category.Name.en`), si no las animaciones se repiten al cambiar de idioma.

---

## Tailwind CSS

Se usa **Tailwind v4** con el plugin de Vite; no hay `tailwind.config.js`. La configuración vive en CSS.

### 1. Archivo global: `base.css`

Es la única entrada de Tailwind. Aquí se importan las capas y se define el tema del proyecto:

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", system-ui, sans-serif;
  --color-brand: #4f46e5;
}
```

Todo lo definido en `@theme` genera clases automáticamente (`bg-brand`, `text-brand`, `font-sans`).

### 2. Regla principal: utilidades en el JSX

Por defecto, los estilos se escriben **como clases directamente en `index.jsx`**:

```jsx
<section className="mx-auto max-w-5xl px-4 py-16">
```

Esto mantiene el estilo junto al markup y evita archivos CSS que crecen sin control.

### 3. Excepción: CSS propio del componente

Se crea un `base.css` dentro de la carpeta del componente **solo** cuando:

- La misma combinación de clases se repite en varios elementos del componente.
- Hay selectores que Tailwind no expresa bien en JSX (relaciones padre-hijo, estados de un grupo).
- El componente se reutiliza mucho y conviene un nombre semántico (`.icon-container`, `.tooltip`).

Ese archivo debe empezar con `@reference` para poder usar `@apply` sin duplicar Tailwind en el bundle:

```css
/* components/ui/RenderIcon/base.css */
@reference "tailwindcss";

@layer components {
  .icon-container {
    @apply group relative inline-flex;
  }
}
```

> Si el componente usa colores o fuentes de `@theme`, referencia el archivo global (`@reference "../../../base.css";`) en lugar de `"tailwindcss"`.

### 4. Colores dinámicos desde datos

Cuando el color viene de los datos (como el color de marca de cada tecnología), se pasa como **variable CSS** y Tailwind la lee con la sintaxis `(--variable)`:

```jsx
<div style={{ "--ChangeColor": tech.color }} className="hover:text-(--ChangeColor)">
```

No se construyen clases con strings dinámicos (`` `text-[${color}]` ``): Tailwind solo genera las clases que encuentra escritas completas en el código.

### 5. Contenido HTML

Los textos renderizados con `HtmlContent` usan el plugin `@tailwindcss/typography` (clase `prose`) para dar estilo automático a párrafos, listas y negritas:

```css
/* base.css */
@plugin "@tailwindcss/typography";
```

```jsx
<HtmlContent html={t("Education")} className="prose dark:prose-invert" />
```

### 6. Tailwind y GSAP no se mezclan en la misma propiedad

| Efecto                       | Se hace con                                         |
| ---------------------------- | --------------------------------------------------- |
| Hover simple, colores, foco  | Tailwind (`hover:`, `focus-visible:`, `transition`) |
| Entradas, secuencias, scroll | GSAP                                                |

Si un elemento tiene `hover:scale-125` en Tailwind, GSAP no debe animar `scale` en ese mismo elemento, porque ambos compiten y la animación salta.

### 7. Orden de clases

Se recomienda `prettier-plugin-tailwindcss` para ordenar las clases automáticamente al guardar.

---

## Alias de imports

`@` apunta a `src/` (configurado en `vite.config.js` y `jsconfig.json`). Se usa siempre en lugar de rutas relativas largas:

```js
import RenderIcon from "@/components/ui/RenderIcon"; // ✅
import RenderIcon from "../../../components/ui/RenderIcon"; // ❌
```

Las rutas distinguen mayúsculas y minúsculas en Linux (y en los servidores de despliegue): las carpetas de capa van en minúscula (`components`, `features`) y las de componente en PascalCase (`RenderIcon`, `AboutMe`).

---

## Agregar una nueva sección

1. Crear `src/features/NuevaSeccion/index.jsx` y `hook.js`.
2. Agregar sus textos en `Languages.es` y `Languages.en` (`mocks/index.js`).
3. Usar `t()` / `pick()` para textos y `<Reveal>` o `useGSAP` para animarla.
4. Registrarla en el array `SECTIONS` de `pages/home/index.jsx`.

No hace falta tocar el router ni envolverla en `ErrorBoundary`: la página lo hace sola.

---

## Despliegue

Como el idioma va en la URL (`/es`, `/en`), el hosting debe servir `index.html` para cualquier ruta; si no, recargar en `/en` da un 404 del servidor.

- **Vercel** → `vercel.json`:
  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
  ```
- **Netlify** → `public/_redirects`:
  ```
  /*  /index.html  200
  ```
