"use client"

import { useEffect, useState } from "react"
import { PatientType, ReportType } from "../types/types"
import { fetchCondition, getPatients } from "../api/requests"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

export default function Reports() {

    const [patients, setPatients] = useState<PatientType[]>([])
    const [report, setReport] = useState<ReportType | undefined>(undefined)

    const fetchData = async () => {
        const response = await getPatients();
        setPatients(response.data);
    }

    useEffect(() => {
        fetchData();
    }, [])
    
    const handleSelect = async (iri: string) => {
        const response = await fetchCondition(iri);
        setReport(response.data);
    }

    return (
        <div className="wrapper">
            <div className="grid grid-cols-3 w-2/3 border-gray-200 border-2">
                <div className="col-span-1 flex flex-col gap-2 border-r-2 p-5 bg-slate-100">
                    { patients.map(row => (
                        <div onClick={() => handleSelect(row.iri)} className="cursor-pointer flex gap-2 items-center">
                            <FaAngleRight />
                            {row.name}
                        </div>
                    ))}
                </div>

                <div className="col-span-2 bg-white p-5 flex flex-col gap-2" style={{height: '45rem'}}>
                    { report && <>
                        <div><span className="font-bold">Nome:</span> {report.name}</div>
                        <div><span className="font-bold">Documento:</span> {report.document}</div>
                        <div><span className="font-bold">Sexo Biológico:</span> {report.birthSex}</div>
                        <div><span className="font-bold">Condição Médica:</span> {report.condition}</div>
                        { report.type && 
                            <div><span className="font-bold">Variação:</span> {report.type}</div>
                        }
                        <div><span className="font-bold">Gravidade:</span> {report.severity}</div>
                    </>}
                </div>
            </div>
        </div>
    )
}