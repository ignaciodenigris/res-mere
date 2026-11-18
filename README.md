# Resúmere 📚

**Estudiar también se aprende.**

Resúmere es una aplicación web educativa en desarrollo. Su objetivo es ayudar a los estudiantes a **crear sus propios resúmenes**: la IA propone un *blueprint* de apuntes, el estudiante lo completa y luego recibe comentarios para mejorar. No buscamos que la IA escriba el resumen por él.

## Estado del proyecto

**Etapa 2 — Creación guiada (sin IA todavía)**: landing page responsive, dashboard, carga local de texto y archivos `.txt`/`.md`, elección de estilo y vista previa de plantilla imprimible. Next.js App Router, TypeScript y Tailwind CSS.

En esta etapa se pueden pegar textos, leer archivos de texto y preparar hojas editables de estructura. **Todavía no hay procesamiento de PDF, editor para redactar el resumen completo, generación de blueprints con IA, cuentas, guardado persistente ni evaluación.** El contenido no se envía a servidores al usar el flujo de creación.

### Plan de desarrollo

1. ✅ Base de Next.js, TypeScript, Tailwind y página de bienvenida.
2. ✅ Interfaz para cargar fuentes de texto, seleccionar estilos y preparar una plantilla.
3. ⬜ Editor de resúmenes flexible.
4. ⬜ IA generadora de blueprints.
5. ⬜ Evaluación del resumen con pistas y revisión.
6. ⬜ Cuentas, documentos e historial.
7. ⬜ Pruebas de accesibilidad, seguridad y beta.
8. ⬜ Flashcards, quizzes y herramientas adicionales.

## Requisitos

- Node.js **22** recomendado (mínimo 20.9).
- npm.
- Git.

## Ejecutar localmente

Cloná el repositorio y seleccioná la rama de desarrollo:

    git clone https://github.com/ignaciodenigris/res-mere.git
    cd res-mere
    git switch feature/etapa-2-workspace
    npm install
    npm run dev

Una vez integrada esta etapa a la rama principal, no necesitarás cambiar de rama.

Abrí **http://localhost:3000**.

Para verificar el proyecto:

    npm run lint
    npm run build

> Nota: el primer `npm install` genera `package-lock.json`. Conviene incorporarlo al repositorio una vez verificado para asegurar instalaciones reproducibles.

## Tecnologías

- **Next.js** (App Router) y **React**: interfaz y servidor web.
- **TypeScript**: tipado estricto.
- **Tailwind CSS 4**: estilos y componentes responsivos.
- **ESLint**: reglas de calidad.

Más adelante se evaluará integrar **Tiptap** (editor), **Supabase** (datos y usuarios) y una API de IA para el blueprint y la evaluación. Esas integraciones **no son necesarias para iniciar esta etapa**.


## Probar la etapa 2

- Abrí \`/dashboard\` para comenzar un nuevo resumen.
- Entrá en \`/crear\` para pegar una fuente (al menos 40 caracteres) o abrir un archivo \`.txt\` o \`.md\` (máximo 1 MB, hasta 80.000 caracteres).
- Elegí entre los estilos **mixto**, **bullet points**, **flechas** o **libre**.
- Modificá títulos y pistas, agregá o quitá apartados y utilizá **Imprimir / Guardar PDF**.
- Opcionalmente, copiá la estructura para reutilizarla en tu documento.

**Limitaciones actuales**: no existe análisis inteligente de la fuente; las estructuras son plantillas locales genéricas. El contenido se conserva solo en memoria mientras la pestaña esté abierta, por lo que se pierde al recargar. Evitá pegar información sensible en un equipo compartido y guardá la hoja como PDF si querés conservarla.

La edición del **contenido completo del resumen** llegará en la siguiente etapa.

## Principios de producto

- **Autoría del estudiante**: la herramienta acompaña, no reemplaza.
- **Flexibilidad**: resúmenes mixtos, con bullet points, flechas o formatos libres.
- **Retroalimentación útil**: errores y omisiones respaldados por la fuente original.
- **Accesibilidad**: distintas formas de leer, escribir y organizar el contenido.
- **Privacidad**: los materiales y documentos del usuario se tratarán con controles adecuados antes de un lanzamiento público.

## Contribución y flujo Git

Los cambios se desarrollan en ramas `feature/...` y se integran mediante pull requests. La rama principal debe permanecer estable.

Proyecto en etapa inicial; todavía no es un producto educativo listo para estudiantes.
