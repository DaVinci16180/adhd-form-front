import { FormContext } from "@/app/form/context";
import Link from "next/link";
import { useContext } from "react";
import { FaAngleRight } from "react-icons/fa";
import { toast } from "react-toastify";

export default function BasicInfo() {

    const {
        name, setName,
        document, setDocument,
        dateOfBirth, setDateOfBirth,
        birthSex, setBirthSex,
        setPage
    } = useContext(FormContext);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const name = e.target['name'].value;
        const document = e.target['document'].value;
        const dateOfBirth = e.target['date-of-birth'].value;
        const birthSex = e.target['birth-sex'].value;

        if (!name || !document || !dateOfBirth || !birthSex) {
            toast.error("Preencha todos os campos corretamente!");
            return;
        }
        
        setName(name);
        setDocument(document);
        setDateOfBirth(new Date(dateOfBirth));
        setBirthSex(birthSex);

        setPage(2);
    }

    return (
        <div className="flex flex-col w-1/2 gap-4 border-gray-200 border-2 bg-white">
            <div className="flex flex-col p-5 py-8 border-b-2" style={{backgroundColor: "var(--sand)"}}>
                <h1>Formulário de cadastro de paciente</h1>
                <p>Preencha os campos abaixo com os dados do paciente</p>
            </div>
            <form onSubmit={ handleSubmit }>
                <div className="flex flex-col gap-6 p-5">
                    <div className="form-row flex flex-col">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" defaultValue={name} />
                    </div>

                    <div className="form-row flex flex-col">
                        <label htmlFor="document">Documento:</label>
                        <input type="text" id="document" name="document" defaultValue={document} />
                    </div>

                    <div className="form-row flex flex-col">
                        <label htmlFor="date-of-birth">Data de Nascimento:</label>
                        <input type="date" id="date-of-birth" name="date-of-birth" defaultValue={dateOfBirth && dateOfBirth.toISOString().substring(0,10)} />
                    </div>

                    <div className="form-row flex flex-col">
                        <label htmlFor="birth-sex">Sexo Biológico:</label>
                        <select name="birth-sex" id="birth-sex" defaultValue={birthSex} >
                            <option value="">-</option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end p-5 pt-0">
                    <button className="btn primary-btn flex gap-2 items-center">
                        <span>Próximo</span>
                        <FaAngleRight />
                    </button>
                </div>
            </form>
        </div>
    )
}