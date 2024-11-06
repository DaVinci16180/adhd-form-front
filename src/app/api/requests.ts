import { FormType, PatientType, ReportType } from "../types/types";
import { api } from "./api";

export const postForm = async (form: FormType) => {
    return await api.post('/form/submit', form);
}

export const getPatients = async () => {
    return await api.get<PatientType[]>('/reports/patients');
}

export const fetchCondition = async (iri: string) => {
    return await api.post<ReportType>('/reports/report', { iri });
}
