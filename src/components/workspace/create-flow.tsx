"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  countWords,
  styles,
  templateFor,
  type BlueprintSection,
  type SummaryStyle,
} from "@/lib/blueprint";

type Stage = 1 | 2 | 3;

const MAX_CHARACTERS = 80000;
const MAX_FILE_BYTES = 1024 * 1024;

const stageLabels = [
  { number: 1, title: "Tu material", description: "Traé lo que querés estudiar" },
  { number: 2, title: "Tu estilo", description: "Elegí cómo organizarlo" },
  { number: 3, title: "Tu plantilla", description: "Prepará tu hoja de trabajo" },
] as const;

function StyleMiniPreview({ style }: { style: SummaryStyle }) {
  if (style === "bullets") {
    return (
      <div aria-hidden="true" className="space-y-2">
        <div className="h-2 w-21 rounded-full bg-[#f0dca7]" />
        <div className="ml-2 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#c3b4eb]" /><span className="h-1.5 w-24 rounded-full bg-[#dfdbe8]" /></div>
        <div className="ml-2 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#c3b4eb]" /><span className="h-1.5 w-18 rounded-full bg-[#dfdbe8]" /></div>
        <div className="ml-7 h-1.5 w-20 rounded-full bg-[#eae6ef]" />
      </div>
    );
  }
  if (style === "arrows") {
    return (
      <div aria-hidden="true" className="flex items-center justify-center gap-1 py-4 text-[10px] font-bold text-[#7b7193]">
        <span className="rounded-md bg-[#e6f3ed] px-2 py-2">Idea</span><span>→</span>
        <span className="rounded-md bg-[#f3effb] px-2 py-2">Proceso</span><span>→</span>
        <span className="rounded-md bg-[#fff0d2] px-2 py-2">Efecto</span>
      </div>
    );
  }
  if (style === "free") {
    return (
      <div aria-hidden="true" className="space-y-4 py-1">
        <div className="h-2 w-24 rounded-full bg-[#e8cfe1]" />
        <div className="h-1.5 w-full rounded-full bg-[#eae6ef]" />
        <div className="h-1.5 w-2/3 rounded-full bg-[#eae6ef]" />
      </div>
    );
  }
  return (
    <div aria-hidden="true" className="space-y-2">
      <div className="h-2 w-24 rounded-full bg-[#e5d9ff]" />
      <div className="h-1.5 w-full rounded-full bg-[#eae6ef]" />
      <div className="h-1.5 w-4/5 rounded-full bg-[#eae6ef]" />
      <div className="ml-2 flex gap-2 pt-1">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c6b0f7]" />
        <span className="h-1.5 w-24 rounded-full bg-[#eae6ef]" />
      </div>
    </div>
  );
}

function PaperSection({
  section,
  position,
  style,
  onTitleChange,
  onGuidanceChange,
  onDelete,
  canDelete,
}: {
  section: BlueprintSection;
  position: number;
  style: SummaryStyle;
  onTitleChange: (value: string) => void;
  onGuidanceChange: (value: string) => void;
  onDelete: () => void;
  canDelete: boolean;
}) {
  return (
    <section className="group relative mb-10 break-inside-avoid" aria-label={"Apartado " + (position + 1)}>
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#f3effa] text-xs font-black text-[#775ccf]">
          {String(position + 1).padStart(2, "0")}
        </span>
        <input
          aria-label={"Título del apartado " + (position + 1)}
          value={section.title}
          onChange={(event) => onTitleChange(event.target.value)}
          maxLength={90}
          placeholder="Título del apartado"
          className="min-w-0 flex-1 rounded-lg border border-transparent bg-transparent px-2 py-1 text-base font-bold tracking-[-0.015em] text-[#352d49] placeholder:text-[#9b94ab] hover:border-[#e5deef] focus:border-[#9277e0] focus:bg-white focus:outline-none"
        />
        {canDelete && (
          <button
            type="button"
            onClick={onDelete}
            aria-label={"Eliminar apartado " + (position + 1)}
            title="Eliminar apartado"
            className="no-print rounded-lg px-2 py-1 text-sm text-[#aea4bd] hover:bg-[#fff0f3] hover:text-[#ac456c]"
          >
            ✕
          </button>
        )}
      </div>

      <div className="mt-2 pl-9">
        <textarea
          aria-label={"Guía del apartado " + (position + 1)}
          value={section.guidance}
          onChange={(event) => onGuidanceChange(event.target.value)}
          maxLength={250}
          rows={2}
          placeholder="Agregá una pista para completar esta sección..."
          className="w-full resize-y rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm leading-6 text-[#8d839a] placeholder:text-[#b1a9b9] hover:border-[#eee8f4] focus:border-[#9277e0] focus:bg-white focus:outline-none"
        />

        {style === "arrows" ? (
          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#a19aab]">
            <span className="min-w-0 flex-1 rounded-xl border border-dashed border-[#d8d1e2] bg-[#fcfbfd] py-5 text-center">Idea</span>
            <span className="text-lg text-[#b8a6ee]">→</span>
            <span className="min-w-0 flex-1 rounded-xl border border-dashed border-[#d8d1e2] bg-[#fcfbfd] py-5 text-center">Relación</span>
            <span className="text-lg text-[#b8a6ee]">→</span>
            <span className="min-w-0 flex-1 rounded-xl border border-dashed border-[#d8d1e2] bg-[#fcfbfd] py-5 text-center">Resultado</span>
          </div>
        ) : style === "bullets" ? (
          <div className="mt-4 space-y-4 text-sm text-[#b8b0c0]">
            <p>• ____________________________________________________</p>
            <p>• ____________________________________________________</p>
            <p className="pl-4">◦ _________________________________________</p>
          </div>
        ) : (
          <div className="mt-4 space-y-5">
            <div className="border-b border-[#e9e5ec]" />
            <div className="border-b border-[#e9e5ec]" />
            <div className="border-b border-[#e9e5ec]" />
          </div>
        )}
      </div>
    </section>
  );
}

export default function CreateFlow() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [stage, setStage] = useState<Stage>(1);
  const [source, setSource] = useState("");
  const [sourceName, setSourceName] = useState("");
  const [fileError, setFileError] = useState("");
  const [style, setStyle] = useState<SummaryStyle>("mixed");
  const [documentTitle, setDocumentTitle] = useState("Mi resumen");
  const [sections, setSections] = useState<BlueprintSection[]>([]);
  const [lastTemplateStyle, setLastTemplateStyle] = useState<SummaryStyle | null>(null);
  const [copyMessage, setCopyMessage] = useState("");

  const words = countWords(source);
  const sourceValid = source.trim().length >= 40 && source.length <= MAX_CHARACTERS;

  function advanceToStyle() {
    if (!sourceValid) {
      setFileError("Escribí al menos 40 caracteres (máximo 80.000) para continuar.");
      return;
    }
    setFileError("");
    setStage(2);
  }

  async function readFile(file?: File) {
    if (!file) return;
    if (!/\.(txt|md)$/i.test(file.name) || file.size > MAX_FILE_BYTES) {
      setFileError("Por ahora admitimos archivos .txt o .md de hasta 1 MB. Los PDF llegarán más adelante.");
      return;
    }
    try {
      const text = await file.text();
      if (!text.trim() || text.length > MAX_CHARACTERS) {
        setFileError("El archivo está vacío o supera los 80.000 caracteres.");
        return;
      }
      setSource(text);
      setSourceName(file.name);
      setFileError("");
      const firstLine = text.split(/\r?\n/u).map((line) => line.trim()).find(Boolean);
      if (firstLine && firstLine.length <= 65) {
        setDocumentTitle(firstLine.replace(/^#+\s*/u, ""));
      }
    } catch {
      setFileError("No pudimos leer el archivo. Probá pegando el texto.");
    }
  }

  function openTemplate() {
    if (style !== lastTemplateStyle || sections.length === 0) {
      setSections(templateFor(style));
      setLastTemplateStyle(style);
    }
    setStage(3);
  }

  function updateSection(id: number, field: "title" | "guidance", value: string) {
    setSections((current) => current.map((section) => (
      section.id === id ? { ...section, [field]: value } : section
    )));
  }

  function addSection() {
    setSections((current) => [
      ...current,
      { id: Math.max(0, ...current.map((item) => item.id)) + 1, title: "Nuevo apartado", guidance: "¿Qué te gustaría explicar acá?" },
    ]);
  }

  async function copyOutline() {
    const outline = [
      documentTitle,
      "",
      ...sections.flatMap((section) => [
        section.title,
        "Pista: " + section.guidance,
        "",
        "",
      ]),
    ].join("\n");
    try {
      await navigator.clipboard.writeText(outline);
      setCopyMessage("Estructura copiada");
    } catch {
      setCopyMessage("No se pudo copiar. Probá imprimir la plantilla.");
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f7f4] print:bg-white">
      <header className="no-print border-b border-[#e9e5ec] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="text-2xl font-black tracking-[-0.06em]" aria-label="Resúmere, inicio">
            resúmere<span className="text-[#8064e3]">.</span>
          </Link>
          <Link href="/dashboard" className="text-sm font-semibold text-[#6f6882] hover:text-[#6f56d9]">
            ← Mi espacio
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12 lg:py-14">
        <aside className="no-print lg:sticky lg:top-10 lg:self-start">
          <p className="text-xs font-black tracking-[0.16em] text-[#8064e3] uppercase">Nuevo resumen</p>
          <h1 className="mt-3 text-3xl font-bold tracking-[-0.055em]">Armá tu espacio.</h1>
          <p className="mt-3 text-sm leading-7 text-[#777084]">Una estructura para empezar. El contenido lo construís vos.</p>
          <nav aria-label="Etapas de creación" className="mt-9 flex gap-2 lg:flex-col lg:gap-3">
            {stageLabels.map((item) => (
              <div key={item.number} aria-current={stage === item.number ? "step" : undefined} className={"flex min-w-0 flex-1 items-center gap-3 rounded-2xl p-2.5 lg:px-3 lg:py-4 " + (stage === item.number ? "bg-white shadow-[0_8px_24px_rgba(61,47,100,0.07)]" : "")}>
                <span className={"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black " + (stage === item.number ? "bg-[#755bd9] text-white" : stage > item.number ? "bg-[#e9e3fa] text-[#7154cc]" : "bg-[#eeeaf0] text-[#a6a0ae]")}>
                  {stage > item.number ? "✓" : item.number}
                </span>
                <span className="hidden lg:block">
                  <span className="block text-sm font-bold">{item.title}</span>
                  <span className="mt-0.5 block text-xs text-[#8b8394]">{item.description}</span>
                </span>
                <span className="sr-only lg:hidden">{item.title}</span>
              </div>
            ))}
          </nav>
          <div className="mt-9 rounded-2xl border border-[#e2dbea] bg-[#f1edfa] p-5 text-sm leading-7 text-[#6c607e]">
            <p className="font-bold text-[#4d3b7b]">✦ Primera versión</p>
            <p className="mt-1">La estructura es una plantilla local: todavía no analiza tu fuente con IA ni guarda documentos en la nube.</p>
          </div>
        </aside>

        <div className="min-w-0">
          {stage === 1 && (
            <section className="no-print rounded-[30px] border border-[#ece6ee] bg-white p-6 shadow-[0_18px_52px_rgba(70,56,95,0.04)] sm:p-10" aria-labelledby="source-title">
              <div className="inline-flex rounded-full bg-[#f1ecff] px-3 py-1.5 text-xs font-bold text-[#7555cc]">PASO 01 / 03</div>
              <h2 id="source-title" className="mt-5 text-3xl font-bold tracking-[-0.045em]">¿Qué vas a estudiar?</h2>
              <p className="mt-3 max-w-xl leading-7 text-[#797184]">Pegá tu fuente de estudio o seleccioná un archivo de texto. A partir de ella vas a preparar tu plantilla.</p>

              <div className="mt-8 rounded-2xl border border-dashed border-[#cfc4e8] bg-[#fcfbff] p-6 text-center">
                <div aria-hidden="true" className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ede7fc] text-2xl text-[#7456ce]">↑</div>
                <p className="mt-3 font-bold">Seleccioná un archivo</p>
                <p className="mt-1 text-sm text-[#898297]">.txt o .md · máximo 1 MB</p>
                <input
                  type="file"
                  ref={fileRef}
                  accept=".txt,.md,text/plain,text/markdown"
                  className="sr-only"
                  aria-label="Elegir archivo de texto"
                  onChange={(event) => {
                    void readFile(event.target.files?.[0]);
                    event.target.value = "";
                  }}
                />
                <button type="button" onClick={() => fileRef.current?.click()} className="mt-5 rounded-xl border border-[#dbd1ef] bg-white px-5 py-3 text-sm font-bold text-[#654bc1] transition-colors hover:bg-[#f6f2ff]">
                  Explorar archivos
                </button>
                {sourceName && <p className="mt-3 text-xs font-semibold text-[#6f56d9]">Cargado: {sourceName}</p>}
              </div>

              <div className="my-7 flex items-center gap-4 text-xs font-bold tracking-[0.14em] text-[#a69fae]">
                <span className="h-px flex-1 bg-[#ebe6ee]" />O PEGÁ TU TEXTO<span className="h-px flex-1 bg-[#ebe6ee]" />
              </div>

              <label htmlFor="source-text" className="text-sm font-bold text-[#494057]">Material original</label>
              <textarea
                id="source-text"
                value={source}
                onChange={(event) => {
                  setSource(event.target.value);
                  setSourceName("");
                  setFileError("");
                }}
                className="mt-3 min-h-[255px] w-full resize-y rounded-2xl border border-[#e4dfe9] bg-[#fdfcff] p-5 text-sm leading-7 outline-none placeholder:text-[#aca3b7] focus:border-[#9b82e7] focus:ring-4 focus:ring-[#f0eaff]"
                placeholder="Pegá acá el texto que querés estudiar..."
                maxLength={MAX_CHARACTERS + 1}
              />
              <div className="mt-2 flex flex-wrap justify-between gap-2 text-xs text-[#8d8499]">
                <span>{words} palabras</span>
                <span>{source.length.toLocaleString("es-AR")} / {MAX_CHARACTERS.toLocaleString("es-AR")} caracteres</span>
              </div>
              {fileError && <p role="alert" className="mt-3 rounded-xl bg-[#fff0f0] px-4 py-3 text-sm font-semibold text-[#a03949]">{fileError}</p>}
              <p className="mt-4 text-xs leading-6 text-[#91899a]">🔒 En esta etapa el texto permanece en esta pestaña: no se envía a una IA ni se guarda en servidores.</p>

              <div className="mt-9 flex justify-end">
                <button type="button" onClick={advanceToStyle} disabled={!sourceValid} className="rounded-xl bg-[#6f56d9] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#5942c4] disabled:cursor-not-allowed disabled:bg-[#c6bddc]">
                  Continuar a estilos →
                </button>
              </div>
            </section>
          )}

          {stage === 2 && (
            <section className="no-print rounded-[30px] border border-[#ece6ee] bg-white p-6 shadow-[0_18px_52px_rgba(70,56,95,0.04)] sm:p-10" aria-labelledby="style-title">
              <div className="inline-flex rounded-full bg-[#f1ecff] px-3 py-1.5 text-xs font-bold text-[#7555cc]">PASO 02 / 03</div>
              <h2 id="style-title" className="mt-5 text-3xl font-bold tracking-[-0.045em]">Elegí cómo organizar tus ideas.</h2>
              <p className="mt-3 max-w-xl leading-7 text-[#797184]">No existe una sola forma de resumir. Elegí la que más te ayude a entender tu material.</p>

              <fieldset className="mt-8">
                <legend className="sr-only">Formato del resumen</legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  {styles.map((option) => (
                    <label key={option.id} className={"relative block cursor-pointer rounded-2xl border-2 p-5 transition-colors " + (style === option.id ? "border-[#8a6de3] bg-[#fcfaff]" : "border-[#ebe7ef] hover:border-[#cbbcf0]")}>
                      <input
                        type="radio"
                        className="sr-only"
                        name="summary-style"
                        value={option.id}
                        checked={style === option.id}
                        onChange={() => setStyle(option.id)}
                      />
                      <div className="flex items-start justify-between">
                        <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0ebfb] text-xl font-bold text-[#6e51c3]">{option.symbol}</span>
                        <span aria-hidden="true" className={"flex h-5 w-5 items-center justify-center rounded-full border-2 " + (style === option.id ? "border-[#7859d7] bg-[#7859d7] text-xs text-white" : "border-[#d0c8db]")}>
                          {style === option.id ? "✓" : ""}
                        </span>
                      </div>
                      <div className="mt-5 h-24 rounded-xl border border-[#eeebf0] bg-white p-4">
                        <StyleMiniPreview style={option.id} />
                      </div>
                      <span className="mt-4 block font-bold">{option.name}</span>
                      <span className="mt-1 block text-sm leading-6 text-[#7b7486]">{option.description}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-9 flex flex-wrap justify-between gap-3">
                <button type="button" onClick={() => setStage(1)} className="rounded-xl border border-[#e3ddeb] px-6 py-3.5 text-sm font-bold text-[#665a79] hover:bg-[#faf8fc]">
                  ← Volver
                </button>
                <button type="button" onClick={openTemplate} className="rounded-xl bg-[#6f56d9] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#5942c4]">
                  Preparar plantilla →
                </button>
              </div>
            </section>
          )}

          {stage === 3 && (
            <section aria-labelledby="template-title">
              <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="inline-flex rounded-full bg-[#f1ecff] px-3 py-1.5 text-xs font-bold text-[#7555cc]">PASO 03 / 03</div>
                  <h2 id="template-title" className="mt-3 text-3xl font-bold tracking-[-0.045em]">Tu hoja de estudio.</h2>
                  <p className="mt-2 text-sm leading-7 text-[#7a7286]">Modificá el título y los apartados como quieras. Esta es una plantilla, no un resumen generado automáticamente.</p>
                </div>
                <button type="button" onClick={() => setStage(2)} className="rounded-xl border border-[#ddd5e7] bg-white px-5 py-3 text-sm font-bold text-[#685c7a] hover:bg-[#fcfbff]">
                  ← Cambiar estilo
                </button>
              </div>

              <div className="no-print mb-5 flex flex-wrap items-center gap-3 rounded-2xl border border-[#e8e3ed] bg-white p-3">
                <button type="button" onClick={addSection} className="rounded-xl bg-[#f1edfc] px-4 py-2.5 text-sm font-bold text-[#684bc1] hover:bg-[#e7defb]">
                  + Agregar apartado
                </button>
                <button type="button" onClick={() => window.print()} className="rounded-xl bg-[#6f56d9] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#5942c4]">
                  Imprimir / Guardar PDF
                </button>
                <button type="button" onClick={() => void copyOutline()} className="rounded-xl border border-[#e0d9e9] px-4 py-2.5 text-sm font-bold text-[#5c506c] hover:bg-[#f9f7fc]">
                  Copiar estructura
                </button>
                {copyMessage && <span role="status" className="text-xs font-semibold text-[#6b57af]">{copyMessage}</span>}
              </div>

              <article className="print-sheet mx-auto min-h-[900px] max-w-[790px] rounded-2xl border border-[#e4dfe8] bg-white p-7 shadow-[0_30px_70px_rgba(60,48,83,0.09)] sm:p-12 lg:p-16" aria-label="Vista previa de tu plantilla">
                <p className="mb-6 text-center text-[10px] font-bold tracking-[0.18em] text-[#a69db1] uppercase">Resúmere · Mi hoja de estudio</p>
                <input
                  aria-label="Título de la hoja de estudio"
                  value={documentTitle}
                  onChange={(event) => setDocumentTitle(event.target.value)}
                  maxLength={90}
                  placeholder="Título del resumen"
                  className="mx-auto block w-full rounded-xl border border-transparent bg-transparent px-2 py-2 text-center text-2xl font-black tracking-[-0.05em] text-[#332b43] placeholder:text-[#a99eae] hover:border-[#eee7f3] focus:border-[#947be0] focus:outline-none sm:text-3xl"
                />
                <div className="mx-auto mb-12 mt-3 h-1 w-20 rounded-full bg-[#bcaaef]" />
                {sections.map((section, position) => (
                  <PaperSection
                    key={section.id}
                    section={section}
                    position={position}
                    style={style}
                    onTitleChange={(value) => updateSection(section.id, "title", value)}
                    onGuidanceChange={(value) => updateSection(section.id, "guidance", value)}
                    canDelete={sections.length > 1}
                    onDelete={() => setSections((current) => current.filter((item) => item.id !== section.id))}
                  />
                ))}
                <div className="mt-12 border-t border-[#ede8f0] pt-4 text-right text-xs text-[#a19aa9]">Una idea a la vez ✦</div>
              </article>
              <p className="no-print mt-6 text-center text-xs leading-6 text-[#8a8193]">
                Esta versión no guarda tu plantilla en la nube. Podés imprimirla o guardarla como PDF desde el navegador.
              </p>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
