export enum CourseCategory {
  BEGINNER = 'BEGINNER',
  ADVANCED = 'ADVANCED',
  INTERMEDIATE = 'INTERMEDIATE',
}

export interface Course {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
  category: CourseCategory;
  seqNo: number;
  price: number;
}
