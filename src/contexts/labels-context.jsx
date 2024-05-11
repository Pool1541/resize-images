import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext } from "react";

export const LabelsContext = createContext(null);

export default function LabelsContextProvider({ children }) {
  const {
    storedValue: labels,
    setValue,
    removeValue,
  } = useLocalStorage("labels", []);

  function saveLabel(label) {

    if (labels.includes(label)) {
      return;
    }

    const labelsClone = structuredClone(labels);
    labelsClone.push(label);

    setValue(labelsClone);
  }

  function removeLabel(labelToRemove) {
    if (!labels.includes(labelToRemove)) {
      return
    }

    const newLabels = labels.filter(label => label !== labelToRemove);
    setValue(newLabels);
  }

  function removeAll() {
    removeValue("labels");
  }

  return (
    <LabelsContext.Provider
      value={{ labels, saveLabel, removeLabel, removeAll }}
    >
      {children}
    </LabelsContext.Provider>
  );
}
