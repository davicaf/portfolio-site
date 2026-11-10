export type Language = 'pt' | 'en';

export type LocalizedText = {
  pt: string;
  en: string;
};

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email';
}

export type ProjectStatus = 'completed' | 'in-progress' | 'archived';

export interface ArchitectureComponent {
  component: string;
  role: LocalizedText;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: LocalizedText;
  description: LocalizedText;
  detailedDescription?: LocalizedText[];
  academicContext?: LocalizedText;
  problemSolution?: LocalizedText;
  technicalHighlights?: LocalizedText[];
  architecture?: ArchitectureComponent[];
  category: LocalizedText;
  categoryId: string; // e.g. 'systems-concurrency', 'data-analysis', 'database', 'systems-programming', 'web-development'
  technologies: string[];
  status: ProjectStatus;
  isFeatured: boolean;
  order: number;
  image?: string | null;
  githubUrl?: string | null;
  demoUrl?: string | null;
}

export interface IndustrialProject {
  title: LocalizedText;
  technology: string;
  scope?: LocalizedText;
  description: LocalizedText[];
  highlights: LocalizedText[];
  futureImpactNote?: LocalizedText;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedText;
  company: string;
  companyUrl?: string;
  location: string;
  period: LocalizedText;
  type: LocalizedText;
  overview: LocalizedText;
  keyProjects?: IndustrialProject[];
  otherActivities?: LocalizedText[];
  qualitativeResults?: LocalizedText[];
  skills: string[];
  isFeatured?: boolean;
}

export interface AcademicCourse {
  name: LocalizedText;
  code?: string;
}

export interface AcademicCourseGroup {
  category: LocalizedText;
  courses: AcademicCourse[];
}

export interface AcademicSemester {
  semesterLabel: LocalizedText;
  statusLabel: LocalizedText;
  courses: AcademicCourse[];
}

export interface EducationItem {
  id: string;
  degree: LocalizedText;
  institution: LocalizedText;
  department: LocalizedText;
  location: string;
  period: LocalizedText;
  status: LocalizedText;
  description: LocalizedText[];
  completedCourses: AcademicCourseGroup[];
  ongoingSemester: AcademicSemester;
}

export interface SkillCategory {
  id: string;
  category: LocalizedText;
  skills: {
    name: string;
    description?: LocalizedText;
  }[];
}

export interface CareerInterest {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface Profile {
  name: string;
  preferredName: string;
  title: LocalizedText;
  headline: LocalizedText;
  status: LocalizedText;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  socialLinks: SocialLink[];
  bio: LocalizedText[];
  positioning: LocalizedText;
  resumeUrl: {
    pt: string;
    en: string;
  };
}
