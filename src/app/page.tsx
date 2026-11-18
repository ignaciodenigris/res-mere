import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Traé tu material",
    description:
      "Partí de la fuente que necesitás estudiar: un texto, apunte o documento.",
  },
  {
    number: "02",
    title: "Armá tu resumen",
    description:
      "Elegí un estilo de apuntes y completá un blueprint con tus propias palabras.",
  },
  {
    number: "03",
    title: "Revisá y aprendé",
    description:
      "Recibí pistas sobre errores y omisiones para mejorar lo que escribiste.",
  },
];

const styles = [
  {
    name: "Mixto",
    label: "Para combinar ideas",
    mark: "✦",
    color: "bg-[#ebe4ff] text-[#4d399a]",
    sample: "Subtítulos + conceptos + ejemplos",
  },
  {
    name: "Bullet points",
    label: "Para sintetizar",
    mark: "≡",
    color: "bg-[#fff0ce] text-[#946720]",
    sample: "Ideas clave, claras y jerarquizadas",
  },
  {
    name: "Flechas",
    label: "Para conectar",
    mark: "→",
    color: "bg-[#ddf2ec] text-[#257f68]",
    sample: "Causa → proceso → resultado",
  },
];

export default function Home() {
  return (
    <main>
      <header className="border-b border-[#ebe8e5] bg-[#f8f7f4]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link
            href="/"
            className="text-2xl font-black tracking-[-0.06em] text-[#242437]"
            aria-label="Resúmere, inicio"
          >
            resúmere<span className="text-[#8568e9]">.</span>
          </Link>
          <nav aria-label="Navegación principal" className="flex items-center gap-4 text-sm font-semibold text-[#57546d] sm:gap-8">
            <Link className="transition-colors hover:text-[#6f56d9]" href="#metodo">
              Cómo funciona
            </Link>
            <Link className="hidden transition-colors hover:text-[#6f56d9] sm:inline" href="#estilos">
              Estilos
            </Link>
            <Link className="rounded-full border border-[#dcd7eb] px-4 py-2 transition-colors hover:border-[#6f56d9] hover:text-[#6f56d9]" href="/dashboard">
              Mi espacio
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div aria-hidden="true" className="soft-glow pointer-events-none absolute -right-40 -top-28 h-[640px] w-[640px] opacity-75" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-[#e3def1] bg-white px-4 py-2 text-xs font-bold tracking-[0.13em] text-[#6f56d9] uppercase">
              Estudiar también se aprende
            </p>
            <h1 className="max-w-2xl text-[clamp(3.2rem,6vw,5.7rem)] leading-[1.06] font-bold tracking-[-0.065em] text-[#242437]">
              El resumen lo hacés <span className="text-[#8064e3]">vos.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#656579]">
              Una forma más clara y personal de estudiar. La inteligencia artificial
              te ayuda a organizar tus ideas, pero el conocimiento lo construís vos.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/crear"
                className="rounded-2xl bg-[#6f56d9] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(111,86,217,0.22)] transition-colors hover:bg-[#5840c5]"
              >
                Crear mi resumen <span aria-hidden="true">→</span>
              </Link>
              <Link href="#estilos" className="px-2 py-4 text-sm font-bold text-[#4e4768] underline decoration-[#c6b9ed] underline-offset-8 hover:text-[#6f56d9]">
                Explorá los estilos
              </Link>
            </div>
            <p className="mt-8 text-sm text-[#79758c]">
              Primera etapa del proyecto · Funciones de estudio en desarrollo
            </p>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute -left-5 -top-7 h-24 w-24 rounded-3xl bg-[#eedfff] blur-2xl" />
            <div className="relative rotate-[1.3deg] rounded-[30px] border border-[#e2dce7] bg-white p-3 shadow-[0_36px_80px_rgba(57,48,105,0.14)] sm:p-5">
              <div className="flex items-center justify-between border-b border-[#eeebf0] px-3 pb-4 pt-1 text-xs font-medium text-[#878197]">
                <span>Mi resumen</span>
                <span className="rounded-lg bg-[#f5f2ff] px-3 py-1.5 text-[#7359c9]">Vista conceptual</span>
              </div>
              <div className="paper-grid mt-4 min-h-[390px] rounded-xl border border-[#eeeaf1] p-5 sm:min-h-[430px] sm:p-8">
                <h2 className="text-center text-xl font-black tracking-[-0.04em] text-[#29233e]">
                  ISLAS DE CALOR URBANAS
                </h2>
                <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#bca4fa]" />
                <div className="mt-10 inline-block rounded-md bg-[#f9dbed] px-3 py-1 font-bold text-[#7a4265]">
                  ¿Qué son?
                </div>
                <p className="mt-3 text-sm leading-8 text-[#9d94a8]">
                  Explicá la idea central con tus palabras...
                </p>
                <div className="mt-8 inline-block rounded-md bg-[#fff0c7] px-3 py-1 font-bold text-[#816321]">
                  Factores principales
                </div>
                <div className="mt-4 space-y-2 text-sm leading-7 text-[#9990a4]">
                  <p>• Primer factor: _____________</p>
                  <p>• Segundo factor: __________</p>
                </div>
                <div className="mt-8 flex items-center justify-center gap-2 text-xs font-bold text-[#6e6991]">
                  <span className="rounded-lg border border-[#ddd7e8] bg-white px-3 py-2">Causa</span>
                  <span aria-hidden="true" className="text-[#8064e3]">→</span>
                  <span className="rounded-lg border border-[#ddd7e8] bg-white px-3 py-2">Proceso</span>
                  <span aria-hidden="true" className="text-[#8064e3]">→</span>
                  <span className="rounded-lg border border-[#ddd7e8] bg-white px-3 py-2">Efecto</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 pt-4 text-xs text-[#938c9e]">
                <span>Hecho por vos, guiado por IA</span>
                <span>01 / 01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="border-y border-[#eee9e7] bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-black tracking-[0.17em] text-[#765bd7] uppercase">El método</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
              Aprender no es copiar respuestas.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#666277]">
              La idea es acompañarte desde el material original hasta un resumen
              que entiendas, puedas corregir y sientas propio.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} className="rounded-[28px] border border-[#ede9f1] bg-[#fcfbff] p-7">
                <span className="text-3xl font-black tracking-[-0.06em] text-[#b5a5ee]">{step.number}</span>
                <h3 className="mt-7 text-xl font-bold tracking-[-0.025em]">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#696579]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="estilos" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-black tracking-[0.17em] text-[#765bd7] uppercase">Tu manera de estudiar</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
              No existe un único resumen ideal.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#666277]">
              Algunas personas prefieren bullets; otras, flechas o explicaciones
              completas. El objetivo es que puedas elegir y combinar formatos.
            </p>
          </div>
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {styles.map((style) => (
              <article key={style.name} className="rounded-[28px] border border-[#e8e4e6] bg-white p-7">
                <div className={"flex h-12 w-12 items-center justify-center rounded-2xl text-3xl font-bold " + style.color} aria-hidden="true">
                  {style.mark}
                </div>
                <h3 className="mt-7 text-xl font-bold">{style.name}</h3>
                <p className="mt-2 text-sm text-[#736e83]">{style.label}</p>
                <div className="mt-7 rounded-xl border border-dashed border-[#e1dde8] bg-[#fbfafc] p-4 text-sm leading-7 text-[#676277]">
                  {style.sample}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proyecto" className="px-5 pb-20 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 rounded-[32px] bg-[#28243e] p-9 text-white sm:p-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.16em] text-[#c6b7ff] uppercase">Resúmere está naciendo</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
              La IA guía. Vos aprendés.
            </h2>
            <p className="mt-4 leading-8 text-[#e2ddec]">
              Estamos construyendo un editor de resúmenes flexible, con
              blueprints personalizados y correcciones que ayudan a pensar,
              no que hacen el trabajo por vos.
            </p>
          </div>
          <Link href="#metodo" className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-bold text-[#332950] hover:bg-[#f2edff]">
            Volver al método <span aria-hidden="true" className="ml-2">↑</span>
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#e8e4e2] px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 text-sm text-[#7b7686] sm:flex-row">
          <span className="font-bold text-[#4c445d]">resúmere.</span>
          <span>Un espacio para aprender a estudiar mejor.</span>
        </div>
      </footer>
    </main>
  );
}
