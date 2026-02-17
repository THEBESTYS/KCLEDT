
export interface CurriculumWeek {
  week: number;
  title: string;
  details: string[];
  method: string;
}

export interface Module {
  id: number;
  name: string;
  range: string;
  description: string;
  weeks: CurriculumWeek[];
}

export interface Applicant {
  id: string;
  name: string;
  email: string;
  phone: string;
  motivation: string;
  status: 'pending' | 'accepted' | 'rejected';
  appliedAt: string;
}
