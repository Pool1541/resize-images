import { LabelsContext } from "@/contexts/labels-context"
import { useContext } from "react"


export default function useLabels() {
  const { labels, saveLabel, removeLabel, removeAll} = useContext(LabelsContext)

  return { labels, saveLabel, removeLabel, removeAll}
}