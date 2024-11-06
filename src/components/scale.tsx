import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

type Props = {
    state: number | undefined;
    setState: (v: number) => void;
}

export const Scale: React.FC<Props> = ({ state, setState }) => {
    return (
        <div className="flex gap-6">
            <button
                className={`scale-btn selectable-btn ${state === 1 && 'selected'}`}
                onClick={ () => setState(1) }>1</button>
            <button
                className={`scale-btn selectable-btn ${state === 2 && 'selected'}`}
                onClick={ () => setState(2) }>2</button>
            <button
                className={`scale-btn selectable-btn ${state === 3 && 'selected'}`}
                onClick={ () => setState(3) }>3</button>
            <button
                className={`scale-btn selectable-btn ${state === 4 && 'selected'}`}
                onClick={ () => setState(4) }>4</button>
            <button
                className={`scale-btn selectable-btn ${state === 5 && 'selected'}`}
                onClick={ () => setState(5) }>5</button>
            <button
                className={`scale-btn selectable-btn ${state === 6 && 'selected'}`}
                onClick={ () => setState(6) }>6</button>
            <button
                className={`scale-btn selectable-btn ${state === 7 && 'selected'}`}
                onClick={ () => setState(7) }>7</button>
        </div>
    )
}

export default Scale;