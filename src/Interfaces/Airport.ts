export interface Image {
    Id: number;
    ImagePath: string;
    FlagTypeName: {
        ar: string | null;
        en: string | null;
    };
    FlagTypeId: number;
    MasterId: number;
}

export interface IAirport {
    Id: number;
    Name: {
        ar: string;
        en: string;
    };
    Code: string;
    AirportTypeName: {
        ar: string;
        en: string;
    };
    AirportTypeId: number;
    Capacity: string;
    RunWayLength: string;
    ParkingSize: string;
    AirportURL: string;
    AirportLocation: string;
    Images: Image[];
}

export interface AirportResponse {
    statusMsg: string;
    message: string;
    data: IAirport[];
}
