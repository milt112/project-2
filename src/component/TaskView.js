import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData, setForm } from "../redux/reducer/taskReducer";
import { TaskHeader } from "./TaskHeader";

export function TaskView() {
    const state = useSelector((state) => state.taskReducer);
    const dispatch = useDispatch();

    function handleUpdate() {
        dispatch(
            setForm({
                term: 'EDIT',
            })
        )
        dispatch(getData(state.itemView))
    }
    return (
        <div className="view">
            <TaskHeader />
            <div className="flex justify-center w-2/3 mt-5 ml-32">
                <img className="w-[500px] h-[350px]" src={state.itemView.image} alt="..." />
                <div className="content ml-10">
                    <div className="p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder text-4xl font-mono" >{state.itemView.name}</h5>
                            <div className="text-2xl mt-5" >{state.itemView.price}$</div>
                            <div className="text-2xl mt-1" >{state.itemView.type === 'true' ? 'Type 1' : 'Type 2'}</div>
                        </div>
                    </div>
                    <div className="p-4 pt-0 border-top-0 bg-transparent flex">
                        <div className="text-center"><a className="btn btn-outline-dark mr-2 mt-[100px]" href="#">Add to cart</a></div>
                        <Link to="/form">
                            <div className="text-center">
                                <a className="btn btn-outline-dark mr-2 mt-[100px]" href="#" onClick={handleUpdate}>Update</a>
                            </div>
                        </Link>
                    </div>
                </div>
                <Link to="/">
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}