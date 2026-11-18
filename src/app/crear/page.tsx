import type { Metadata } from "next";
import CreateFlow from "@/components/workspace/create-flow";

export const metadata: Metadata = {
  title: "Crear resumen — Resúmere",
  description: "Cargá un texto, elegí tu estilo y armá una plantilla para estudiar.",
};

export default function CreatePage() {
  return <CreateFlow />;
}
