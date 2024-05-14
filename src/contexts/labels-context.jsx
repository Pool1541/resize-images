import useLocalStorage from '@/hooks/useLocalStorage';
import { createContext } from 'react';

export const LabelsContext = createContext(null);

const LOCALSTORAGE_LABEL_KEY = 'labels';
const MAX_LABELS_ALLOWED = 6;

export default function LabelsContextProvider({ children }) {
  const {
    storedValue: labels,
    setValue,
    removeValue,
  } = useLocalStorage(LOCALSTORAGE_LABEL_KEY, []);

  function saveLabel(label) {
    if (labels.includes(label) || !label) return;

    const labelsClone = structuredClone(labels);

    if (labelsClone.length < MAX_LABELS_ALLOWED) labelsClone.unshift(label);
    else {
      labelsClone.pop();
      labelsClone.unshift(label);
    }

    setValue(labelsClone);
  }

  function reorder(label) {
    if (!labels.includes(label) || labels.length < 2 || !label) return;
    const labelsClone = structuredClone(labels);
    const filteredLabels = labelsClone.filter((el) => el !== label);
    filteredLabels.unshift(label);

    setValue(filteredLabels);
  }

  function removeLabel(labelToRemove) {
    if (!labels.includes(labelToRemove)) {
      return;
    }

    const newLabels = labels.filter((label) => label !== labelToRemove);
    setValue(newLabels);
  }

  function removeAll() {
    removeValue(LOCALSTORAGE_LABEL_KEY);
  }

  return (
    <LabelsContext.Provider value={{ labels, saveLabel, removeLabel, reorder, removeAll }}>
      {children}
    </LabelsContext.Provider>
  );
}
