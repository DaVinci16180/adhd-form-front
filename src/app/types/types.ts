export type FormType = {
    name        : string;
    document    : string;
    dateOfBirth : string;
    birthSex    : string;
    A1a         : number;
    A1b         : number;
    A1c         : number;
    A1d         : number;
    A1e         : number;
    A1f         : number;
    A1g         : number;
    A1h         : number;
    A1i         : number;
    A2a         : number;
    A2b         : number;
    A2c         : number;
    A2d         : number;
    A2e         : number;
    A2f         : number;
    A2g         : number;
    A2h         : number;
    A2i         : number;
    criterionB  : boolean;
    criterionC  : boolean;
    criterionD  : boolean;
    criterionE  : boolean;
}

export type PatientType = {
    name: string;
    iri: string;
}

export type ReportType = {
    name: string;
    document: string;
    birthSex: string;
    condition: string;
    type: string;
    severity: string;
}