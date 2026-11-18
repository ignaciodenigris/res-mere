import Link from "next/link";

export const metadata = {
  title: "Mi espacio — Resúmere",
  description: "Creá un resumen propio a partir de tu material de estudio.",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f4]">
      <header className="border-b border-[#eae6ed] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="text-2xl font-black tracking-[-0.06em]" aria-label="Resúmere, inicio">
            resúmere<span className="text-[#8064e3]">.</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-[#6e6682] hover:text-[#6f56d9]">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center rounded-full bg-[#ece6ff] px-4 py-2 text-xs font-bold tracking-[0.12em] text-[#7151cb] uppercase">
              Mi espacio de estudio
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-[-0.055em] sm:text-5xl">
              Cada buen resumen <br className="hidden sm:block" /> empieza con una idea.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#736e83]">
              Traé tu material, elegí cómo querés organizarlo y construí tu propio camino para aprender.
            </p>
          </div>
          <Link href="/crear" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#6f56d9] px-6 py-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(111,86,217,0.18)] transition-colors hover:bg-[#5840c5]">
            + Nuevo resumen
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="flex min-h-[340px] flex-col items-center justify-center rounded-[30px] border border-dashed border-[#d8d0e7] bg-white p-10 text-center">
            <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-[#f3efff] text-4xl text-[#7256d8]" aria-hidden="true">✎</div>
            <h2 className="mt-7 text-2xl font-bold tracking-[-0.04em]">Todavía no hay documentos guardados</h2>
            <p className="mt-4 max-w-md leading-7 text-[#777184]">
              En esta versión podés crear y preparar una plantilla. El guardado de tus resúmenes llegará en una etapa posterior.
            </p>
            <Link href="/crear" className="mt-7 rounded-xl border border-[#dcd3f0] px-5 py-3 text-sm font-bold text-[#694dc7] hover:bg-[#f6f2ff]">
              Crear mi primera plantilla →
            </Link>
          </div>

          <aside className="rounded-[30px] bg-[#302940] p-8 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#51466d] text-2xl" aria-hidden="true">✦</div>
            <h2 className="mt-7 text-2xl font-bold tracking-[-0.03em]">Tu resumen, tus reglas.</h2>
            <p className="mt-4 leading-8 text-[#dfd8e9]">
              No hay una única forma de estudiar. Probá distintos estilos y quedate con el que mejor te ayude a entender.
            </p>
            <p className="mt-9 text-xs leading-6 font-semibold tracking-wide text-[#bcb0d1]">
              ETAPA 2 · SIN CUENTA NI ALMACENAMIENTO EN LA NUBE
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
