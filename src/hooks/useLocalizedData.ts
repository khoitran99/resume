import { useTranslation } from "react-i18next";
import { projects } from "../data/experiences";
import { projectsVi } from "../data/experiencesVi";
import { certifications } from "../data/certifications";
import { certificationsVi } from "../data/certificationsVi";
import type { ProjectEntry } from "../data/experiences";
import type { Certification } from "../data/certifications";

export function useLocalizedProjects(): ProjectEntry[] {
  const { i18n } = useTranslation();
  return i18n.language === "vi" ? projectsVi : projects;
}

export function useLocalizedCertifications(): Certification[] {
  const { i18n } = useTranslation();
  return i18n.language === "vi" ? certificationsVi : certifications;
}
