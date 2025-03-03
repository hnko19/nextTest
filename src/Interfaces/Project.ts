export interface ProjectResponse {
    statusMsg: string;
    message: string;
    data: IProject[];
  }
  
export interface IProject {
  Id: number;
  Title: {
      ar: string;
      en: string | null; // قد يكون `null` حسب البيانات القادمة
  };
  StartDate: string; // بصيغة ISO
  EndDate?: string | null;
  Description: {
      ar: string;
      en: string | null; // قد يكون `null`
  };
  CoverImage: string;
  ExecutorAr?: string | null;
  ExecutorEng?: string | null;
  CreatedBy?: string | null;
  CreationDate?: string | null;
  Status?: string | null;
  ProjectImages: string[]; // Define a more specific type if needed
  }
  
 