import { GiBrain } from "react-icons/gi";

export default function Home() {
    return (
        <div className="center" style={{backgroundColor: 'var(--blue)', color: 'var(--sand)'}}>
            <div className="flex gap-2 items-center" >
                <GiBrain size={'20rem'} color="var(--sand)" />
                <div>
                    <h1 className="text-9xl">
                        <span className="monospace">Info</span><span className="cursive">Mind</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}