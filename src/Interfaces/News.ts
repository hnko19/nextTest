export interface NewsResponse {
  statusMsg: string; // Status of the response
  message: string;   // Message about the operation
  data: INews[];   // Array of project data
}

export interface INews {
  Id: number;                 // Unique identifier for the news
  Title: {
    ar: string;               // Title in Arabic
    en: string;               // Title in English
  };
  NewsDate: string;           // News date (previously StartDate)
  Description: {
    ar: string;               // Description in Arabic
    en: string;               // Description in English (ensure it's properly formatted)
  };
  ExecutorAr: string | null;  // Executor in Arabic (or null if not specified)
  ExecutorEng?: string | null; // Executor in English (not present in data)
  CreationDate?: string | null; // Creation date (optional, since it's missing in data)
  NewsImages: string[];       // Array of image URLs related to the news
  CoverImage: string;         // URL of the cover image for the news
}
