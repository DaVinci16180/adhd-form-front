"use client"
import BasicInfo from "@/components/basic-info";
import Questionaire from "@/components/questionaire";
import React, { useCallback, useMemo, useState } from "react";
import { FormContext } from "./context";
import AditionalInfo from "@/components/aditional-info";
import { postForm } from "../api/requests";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'

export default function Form() {
    const router = useRouter();

    const [page, setPage] = useState(1);

    const [name, setName] = useState('');
    const [document, setDocument] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);
    const [birthSex, setBirthSex] = useState('');

    const [A1a, setA1a] = useState<number | undefined>(undefined);
    const [A1b, setA1b] = useState<number | undefined>(undefined);
    const [A1c, setA1c] = useState<number | undefined>(undefined);
    const [A1d, setA1d] = useState<number | undefined>(undefined);
    const [A1e, setA1e] = useState<number | undefined>(undefined);
    const [A1f, setA1f] = useState<number | undefined>(undefined);
    const [A1g, setA1g] = useState<number | undefined>(undefined);
    const [A1h, setA1h] = useState<number | undefined>(undefined);
    const [A1i, setA1i] = useState<number | undefined>(undefined);
    const [A2a, setA2a] = useState<number | undefined>(undefined);
    const [A2b, setA2b] = useState<number | undefined>(undefined);
    const [A2c, setA2c] = useState<number | undefined>(undefined);
    const [A2d, setA2d] = useState<number | undefined>(undefined);
    const [A2e, setA2e] = useState<number | undefined>(undefined);
    const [A2f, setA2f] = useState<number | undefined>(undefined);
    const [A2g, setA2g] = useState<number | undefined>(undefined);
    const [A2h, setA2h] = useState<number | undefined>(undefined);
    const [A2i, setA2i] = useState<number | undefined>(undefined);
    
    const [criterionB, setCriterionB] = useState<boolean | undefined>(undefined);
    const [criterionC, setCriterionC] = useState<boolean | undefined>(undefined);
    const [criterionD, setCriterionD] = useState<boolean | undefined>(undefined);
    const [criterionE, setCriterionE] = useState<boolean | undefined>(undefined);

    const handleSubmitForm = useCallback(async () => {
        toast.promise(postForm({
            name,
            document,
            dateOfBirth: dateOfBirth!.toISOString().substring(0,10),
            birthSex,
            A1a: A1a!,
            A1b: A1b!,
            A1c: A1c!,
            A1d: A1d!,
            A1e: A1e!,
            A1f: A1f!,
            A1g: A1g!,
            A1h: A1h!,
            A1i: A1i!,
            A2a: A2a!,
            A2b: A2b!,
            A2c: A2c!,
            A2d: A2d!,
            A2e: A2e!,
            A2f: A2f!,
            A2g: A2g!,
            A2h: A2h!,
            A2i: A2i!,
            criterionB: criterionB!,
            criterionC: criterionC!,
            criterionD: criterionD!,
            criterionE: criterionE!,
        }), {
            pending: 'Submetendo respostas.',
            success: 'Formlário registrado com sucesso.',
            error: 'Falha no envio do formulário.'
        })

        // router.push('/reports')
    }, [
        name, document, dateOfBirth, birthSex,
        A1a, A1b, A1c, A1d, A1e, A1f, A1g, A1h, A1i,
        A2a, A2b, A2c, A2d, A2e, A2f, A2g, A2h, A2i,
        criterionB, criterionC, criterionD, criterionE
    ])

    const value = useMemo(() => ({
        page, setPage,
        name, setName,
        document, setDocument,
        dateOfBirth, setDateOfBirth,
        birthSex, setBirthSex,
        A1a, setA1a,
        A1b, setA1b,
        A1c, setA1c,
        A1d, setA1d,
        A1e, setA1e,
        A1f, setA1f,
        A1g, setA1g,
        A1h, setA1h,
        A1i, setA1i,
        A2a, setA2a,
        A2b, setA2b,
        A2c, setA2c,
        A2d, setA2d,
        A2e, setA2e,
        A2f, setA2f,
        A2g, setA2g,
        A2h, setA2h,
        A2i, setA2i,
        criterionB, setCriterionB,
        criterionC, setCriterionC,
        criterionD, setCriterionD,
        criterionE, setCriterionE,
        handleSubmitForm
    }), [
        page, setPage,
        name, setName,
        document, setDocument,
        dateOfBirth, setDateOfBirth,
        birthSex, setBirthSex,
        A1a, setA1a,
        A1b, setA1b,
        A1c, setA1c,
        A1d, setA1d,
        A1e, setA1e,
        A1f, setA1f,
        A1g, setA1g,
        A1h, setA1h,
        A1i, setA1i,
        A2a, setA2a,
        A2b, setA2b,
        A2c, setA2c,
        A2d, setA2d,
        A2e, setA2e,
        A2f, setA2f,
        A2g, setA2g,
        A2h, setA2h,
        A2i, setA2i,
        criterionB, setCriterionB,
        criterionC, setCriterionC,
        criterionD, setCriterionD,
        criterionE, setCriterionE,
        handleSubmitForm
    ]);
    
    return (
        <div className="wrapper">
            <FormContext.Provider value={value}>
                { page === 1 && <BasicInfo /> }
                { page === 2 && <Questionaire /> }
                { page === 3 && <AditionalInfo /> }
            </FormContext.Provider>
        </div>
    )
}