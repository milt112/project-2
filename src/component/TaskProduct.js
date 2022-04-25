import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData, deleteData } from '../redux/reducer/taskReducer';

export function TaskProduct(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.taskReducer);

    function handleView() {
        dispatch(
            getData(
                props.item
            )
        )
    }

    return (
        // list data
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top w-full h-[250px]" src={props.item.image} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder" >{props.item.name}</h5>
                        {props.item.price}$
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent justify-center flex">

                    {/* add to cart */}
                    <div className="text-center">
                        <button onClick={handleView} className="btn btn-outline-dark mt-auto mr-2" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>
                    </div>

                    {/* view product */}
                    <div className="text-center">
                        <Link to="/view">
                            <button onClick={handleView} className="btn btn-outline-dark mt-auto mr-2" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>
                        </Link>
                    </div>

                    {/* delete */}
                    <div className="text-center">
                        <button onClick={() => dispatch(deleteData(props.item.id))} className="btn btn-outline-dark mt-auto" type="button">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}