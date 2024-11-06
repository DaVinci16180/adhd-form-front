import { FormContext } from "@/app/form/context";
import { useContext, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { toast } from "react-toastify";
import BinarySelector from "./binary-selector";

const mock = {
    "name": "Davi Guimaraes",
    "document": "123.456.789-00",
    "dateOfBirth": "2001-08-07",
    "A1a": 2
}

export default function AditionalInfo() {

    const {
        criterionB, setCriterionB,
        criterionC, setCriterionC,
        criterionD, setCriterionD,
        criterionE, setCriterionE,
        setPage, handleSubmitForm
    } = useContext(FormContext);

    const handleSubmit = () => {
        if (criterionB === undefined ||
            criterionC === undefined ||
            criterionD === undefined ||
            criterionE === undefined
        ) {
            toast.error("Preencha todos os campos corretamente!")
            return;
        }

        handleSubmitForm();
    }

    return (
        <div className="flex flex-col w-2/3 gap-4 border-gray-200 border-2 bg-white">
            <div className="flex flex-col p-5 py-8 border-b-2" style={{ backgroundColor: "var(--sand)" }}>
                <h1>Questionário</h1>
                <p>Para cada uma das afirmações a seguir, selecione o quanto você se identifica com elas, onde 1 significa "não me identifico" e 7 significa "me identifico totalmente".</p>
            </div>

            <div className="grid grid-cols-10 border-b-2 p-8">
                <div className="col-span-8 flex items-center">
                    <p className="text-xl">
                        Vários sintomas de desatenção ou hiperatividade-impulsividade estavam presentes antes dos 12 anos de idade?
                    </p>
                </div>
                <div className="col-span-2 flex justify-center items-center">
                    <BinarySelector state={criterionB} setState={setCriterionB} />
                </div>
            </div>

            <div className="grid grid-cols-10 border-b-2 p-8">
                <div className="col-span-8 flex items-center">
                    <p className="text-xl">
                        Vários sintomas de desatenção ou hiperatividade-impulsividade estão presentes em dois ou mais ambientes? (p. ex., em casa, na escola, no trabalho; com amigos ou parentes; em outras atividades).
                    </p>
                </div>
                <div className="col-span-2 flex justify-center items-center">
                    <BinarySelector state={criterionC} setState={setCriterionC} />
                </div>
            </div>

            <div className="grid grid-cols-10 border-b-2 p-8">
                <div className="col-span-8 flex items-center">
                    <p className="text-xl">
                        Há evidências claras de que os sintomas interferem no funcionamento social, acadêmico ou profissional ou de que reduzem sua qualidade?
                    </p>
                </div>
                <div className="col-span-2 flex justify-center items-center">
                    <BinarySelector state={criterionD} setState={setCriterionD} />
                </div>
            </div>

            <div className="grid grid-cols-10 border-b-2 p-8">
                <div className="col-span-8 flex items-center">
                    <p className="text-xl">
                        Os sintomas não ocorrem exclusivamente durante o curso de esquizofrenia ou outro transtorno psicótico e não são mais bem explicados por outro transtorno mental? (p. ex., transtorno do humor, transtorno de ansiedade, transtorno dissociativo, transtorno da personalidade, intoxicação ou abstinência de substância).
                    </p>
                </div>
                <div className="col-span-2 flex justify-center items-center">
                    <BinarySelector state={criterionE} setState={setCriterionE} />
                </div>
            </div>

            <div className="flex justify-between pb-5 px-8">
                <button className="btn secondary-btn flex gap-2 items-center" onClick={() => setPage(2)}>
                    <FaAngleLeft />
                    <span>Voltar</span>
                </button>
                <button className="btn primary-btn flex gap-2 items-center" onClick={handleSubmit}>
                    <span>Enviar</span>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    )
}