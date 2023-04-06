import { Language } from "./Language"
import english from "./en.json"
import portuguese from "./ptBR.json"

export default function locales(lang: string = "ptBR", field: any) {
  const language: Language = lang === "ptBR" ? portuguese : english

  // @ts-ignore: Unreachable code error
  return language[field]
}
