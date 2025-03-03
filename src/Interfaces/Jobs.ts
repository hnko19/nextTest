export interface JobImage {
  Id: number;
  ImagePath: string;
  FlagTypeName: {
    ar: string | null;
    en: string | null;
  };
  FlagTypeId: number;
  MasterId: number;
}

export interface IJob {
  Id: number;
  Title: {
    ar: string,
    en: string,
  };
  StartDate: string; // يمكن تحويلها إلى `Date` إذا كنت تستخدم مكتبة لتحليل التواريخ
  EndDate: string;
  Description: {
    ar: string,
    en: string
  };
  JopTypeName: {
    ar: string | null,
    en: string | null
  }; // تغيير الاسم إلى JobTypeName
  JobTypeId: number;
  CreationDate: string | null; // يمكن تحويلها إلى `Date` إذا لزم الأمر
  IsActive: boolean;
  JobImages: JobImage[];
}

export interface JobResponse {
  statusMsg: string;
  message: string;
  data: IJob[];
}
