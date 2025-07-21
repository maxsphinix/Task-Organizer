export interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export type ThemeMode = 'light' | 'dark';