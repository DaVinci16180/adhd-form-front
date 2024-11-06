import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Scale from "./scale";
import { useContext } from "react";
import { FormContext } from "@/app/form/context";
import { toast } from "react-toastify";

export default function Questionaire() {

    const {
        setPage,
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
        A2i, setA2i
    } = useContext(FormContext);

    const handleSubmit = () => {
        if (!A1a || !A1b || !A1c || !A1d || !A1e || !A1f || !A1g || !A1h || !A1i ||
            !A2a || !A2b || !A2c || !A2d || !A2e || !A2f || !A2g || !A2h || !A2i) {
            toast.error("Responda a todas as afirmações antes de continuar!");
            return;
        }

        setPage(3);
    }

    return (
        <div className="flex flex-col w-2/3 gap-4 border-gray-200 border-2 bg-white">
            <div className="flex flex-col p-5 py-8 border-b-2" style={{backgroundColor: "var(--sand)"}}>
                <h1>Questionário</h1>
                <p>Para cada uma das afirmações a seguir, selecione o quanto você se identifica com elas, onde 1 significa "não me identifico" e 7 significa "me identifico totalmente".</p>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente não presto atenção em detalhes ou cometo erros por descuido em tarefas escolares, no trabalho ou durante outras atividades, resultando em negligência ou desempenho ruim.</p>
                <Scale state={A1a} setState={setA1a} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente tenho dificuldade em manter o foco durante aulas, conversas ou leituras prolongadas.</p>
                <Scale state={A1b} setState={setA1b} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente não escuto quando alguém me dirige a palavra diretamente, mesmo na ausência de qualquer distração óbvia.</p>
                <Scale state={A1c} setState={setA1c} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente não sigo instruções até o fim e não consigo terminar trabalhos escolares, tarefas ou deveres no local de trabalho, rapidamente perdendo o foco e facilmente perde o rumo.</p>
                <Scale state={A1d} setState={setA1d} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente tenho dificuldade para organizar tarefas e atividades, como manter materiais e objetos pessoais em ordem e cumprir prazos.</p>
                <Scale state={A1e} setState={setA1e} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente evito, não gosto ou reluto em me envolver em tarefas que exijam esforço mental prolongado, como trabalhos escolares ou preparo de relatórios.</p>
                <Scale state={A1f} setState={setA1f} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente perco coisas necessárias para tarefas ou atividades, como lápis, livros, instrumentos, carteiras, chaves, documentos, óculos ou celular.</p>
                <Scale state={A1g} setState={setA1g} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Com frequência sou facilmente distraído por estímulos externos, como sons, coisas que vejo ou pensamentos não relacionados ao que estou fazendo.</p>
                <Scale state={A1h} setState={setA1h} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Com frequência sou esquecido em relação a atividades cotidianas, como realizar tarefas e obrigações, retornar ligações, pagar contas, manter horários agendados.</p>
                <Scale state={A1i} setState={setA1i} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente remexo ou batuco as mãos ou os pés ou me contorço na cadeira.</p>
                <Scale state={A2a} setState={setA2a} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente levanto da cadeira em situações em que deveria permanecer sentado, como sair do meu lugar em sala de aula ou no meu local de trabalho.</p>
                <Scale state={A2b} setState={setA2b} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente corro ou subo nas coisas em situações em que isso é inapropriado. (Nota: Em adolescentes ou adultos, pode se limitar a sensações de inquietude.)</p>
                <Scale state={A2c} setState={setA2c} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Com frequência sou incapaz de me envolver em atividades de lazer calmamente, como em jogos ou brincadeiras.</p>
                <Scale state={A2d} setState={setA2d} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Com frequência “não paro”, agindo como se estivesse “com o motor ligado”, e não consigo ficar parado por muito tempo.</p>
                <Scale state={A2e} setState={setA2e} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente falo demais.</p>
                <Scale state={A2f} setState={setA2f} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente deixo escapar uma resposta antes que a pergunta tenha sido concluída, termino frases dos outros ou não consigo aguardar minha vez de falar.</p>
                <Scale state={A2g} setState={setA2g} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente tenho dificuldade para esperar a minha vez, como aguardar em uma fila.</p>
                <Scale state={A2h} setState={setA2h} />
            </div>

            <div className="flex flex-col items-center gap-4 p-8 border-b-2 text-center">
                <p className="text-xl">Frequentemente interrompo ou me intrometo, me metendo nas conversas ou no que outros estão fazendo ou usando as coisas de outras pessoas sem permissão.</p>
                <Scale state={A2i} setState={setA2i} />
            </div>

            <div className="flex justify-between pb-5 px-8">
                <button className="btn secondary-btn flex gap-2 items-center" onClick={ () => setPage(1) }>
                    <FaAngleLeft />
                    <span>Voltar</span>
                </button>
                <button className="btn primary-btn flex gap-2 items-center" onClick={ handleSubmit }>
                    <span>Próximo</span>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    )
}