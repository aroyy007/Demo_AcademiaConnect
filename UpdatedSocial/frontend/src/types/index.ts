export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'admin';
  status: 'pending' | 'approved' | 'rejected';
  profileImage?: string;
  department: string;
  semester: number;
  section: string;
  createdAt: Date;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  images?: string[];
  userId: string;
  likes: string[];
  comments: Comment[];
  createdAt: Date;
  editHistory?: EditHistory[];
  deletedAt?: Date;
}

export interface EditHistory {
  timestamp: Date;
  previousContent: string;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
}

export interface Notification {
  id: string;
  type: 'social' | 'university';
  title: string;
  content: string;
  createdAt: Date;
  read: boolean;
}

export interface Routine {
  id: string;
  semester: number;
  section: string;
  department: string;
  schedule: ScheduleItem[];
}

export interface ScheduleItem {
  day: string;
  time: string;
  subject: string;
  teacher: string;
  room: string;
}