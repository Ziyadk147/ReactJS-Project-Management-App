export default function Home() {
    return (
        <header className="pb-4 w-2/3 h-fit mb-4 border-b-2 border-stone-300">
            <div className="mt-24  flex flex-row justify-between gap-4">
                <h2 className="text-5xl font-bold text-stone-700 mb-4">Learning React</h2>
                <button className={"text-stone-700 hover:text-stone-950"} >Delete</button>
            </div>
            <div className=" flex flex-row justify-between gap-4">
                <p className="text-stone-400 font-bold pl-1 mb-4">20th Dec,2024</p>
            </div>
            <div className=" flex flex-row justify-between gap-4">
                <p className="text-stone-800 my-4">Learn React from the group up

                Start with the basics, finish with advanced knowledge
                </p>
            </div>

        </header>

    )
}
