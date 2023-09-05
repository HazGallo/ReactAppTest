export interface CreateSectionProps {
  id: string | null;
  title: string;
}

export interface Section {
  uid: string;
  title: string;
  createdAt: string;
  updatedAt: null | string;
}

export interface CreateSectionResponse {
  success: boolean;
  message: string;
  section: Section;
}
