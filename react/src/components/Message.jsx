import { useStateContext } from "../context/ContextsProvider"

export default function Message() {

    const { message } = useStateContext()

    return (
        <>
            {message.show && (
                <div className="w-[300px] py-2 px-3 text-white rounded bg-emerald-500 fixed right-4 bottom-4 z-50 animate-fade-in-down">
                    {message.text}
                </div>
            )}
        </>
    )
}
