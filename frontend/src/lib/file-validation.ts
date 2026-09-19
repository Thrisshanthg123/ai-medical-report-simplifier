/**
 * Medical report file upload validation rules and utilities for H2.
 * Enforces supported document formats (PDF, JPG, JPEG, PNG) and 25 MB size limits.
 */

export const MAX_FILE_SIZE_BYTES = 25 * 1024 * 1024; // 25 MB

export const SUPPORTED_MIME_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
] as const;

export const SUPPORTED_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png"] as const;

export interface FileValidationResult {
  isValid: boolean;
  error?: string;
  fileCategory?: "pdf" | "image";
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function validateMedicalReportFile(file: {
  name: string;
  size: number;
  type?: string;
}): FileValidationResult {
  if (!file) {
    return {
      isValid: false,
      error: "No file selected. Please choose a medical report to upload.",
    };
  }

  if (file.size === 0) {
    return {
      isValid: false,
      error: "The selected file is empty (0 bytes). Please upload a valid medical report.",
    };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      isValid: false,
      error: "File is too large. Maximum supported size is 25 MB.",
    };
  }

  const lowerName = file.name.toLowerCase();
  const lowerType = (file.type || "").toLowerCase();

  const isPdf =
    lowerName.endsWith(".pdf") || lowerType === "application/pdf";
  const isJpg =
    lowerName.endsWith(".jpg") ||
    lowerName.endsWith(".jpeg") ||
    lowerType === "image/jpeg" ||
    lowerType === "image/jpg";
  const isPng =
    lowerName.endsWith(".png") || lowerType === "image/png";

  if (!isPdf && !isJpg && !isPng) {
    return {
      isValid: false,
      error:
        "Unsupported file type. Please upload a PDF, JPG, JPEG, or PNG medical report.",
    };
  }

  return {
    isValid: true,
    fileCategory: isPdf ? "pdf" : "image",
  };
}
