import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { setForm } from "../redux/reducer/taskReducer";

export function TaskAdd() {
    const dispatch = useDispatch();

    return (
        <Link to="/form" >
            <button
                onClick={() =>
                    dispatch(
                        setForm({
                            term: 'ADD',
                        })
                    )
                }
                className="ml-[62px] w-[80px] h-[40px] bg-blue-300 text-gray-800 border border-gray-400 rounded text-center flex p-2" >
                Add

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </button>
        </Link>
    )
}