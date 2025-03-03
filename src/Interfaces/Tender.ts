export interface TenderResponse {
  statusMsg: string; // Status of the response
  message: string;   // Message about the operation
  data: ITender[];   // Array of project data
}

export interface ITender {
  Id: number;          // Unique identifier for the project
  Name: {
    ar: string;         // Name of the project in Arabic
    en: string;         // Name of the project in English
  };
  StartDate: string;   // Start date in ISO 8601 format
  EndDate: string;     // End date in ISO 8601 format
  Description: {
    ar: string;         // Description of the project in Arabic
    en: string;         // Description of the project in English
  };
  FilePath: string | null; // File path for the project or null
}
