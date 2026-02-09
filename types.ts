
export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Sports' | 'Classroom' | 'Arts';
  image: string;
}

export interface AdmissionFormData {
  studentName: string;
  gradeApplying: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
  previousSchool: string;
  interest: string;
}
