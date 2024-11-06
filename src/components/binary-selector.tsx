import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

type Props = {
    state: boolean | undefined;
    setState: (v: boolean) => void;
}

export const BinarySelector: React.FC<Props> = ({ state, setState }) => {
    return (
        <div className="flex binary-selector">
            <button
                className={`yes selectable-btn ${state && 'selected'}`}
                onClick={ () => setState(true) }>Sim</button>
            <button
                className={`no selectable-btn ${state === false && 'selected'}`}
                onClick={ () => setState(false) }>Não</button>
        </div>
    )
}

export default BinarySelector;