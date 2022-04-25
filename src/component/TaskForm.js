import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addData, updateItem } from "../redux/reducer/taskReducer";
import { TaskHeader } from "./TaskHeader";

export function TaskForm(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.taskReducer);

    const inputName = useRef(null);
    const inputImage = useRef(null);
    const inputPrice = useRef(null);
    const inputType = useRef(null);

    const [image, setImage] = useState();

    function handlePreviewImage(e) {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImage(file);
    }

    useEffect(() => {
        if (state.term === 'EDIT') {
            inputName.current.value = state.itemView.name
            // image.preview = state.itemView.image
            inputPrice.current.value = state.itemView.price
            inputType.current.value = state.itemView.type
        }
    }, [props])

    function handleSubmit() {
        if (state.term === 'ADD') {
            const dataForm = {
                id: (Math.random() * 1000000000).toFixed(0),
                name: inputName.current.value,
                image: image.preview,
                price: inputPrice.current.value,
                type: inputType.current.value,
            };
            dispatch(addData(dataForm));
        } else {
            const objUpdate = {
                id: state.itemView.id,
                name: inputName.current.value,
                image: image.preview,
                price: inputPrice.current.value,
                type: inputType.current.value,
            }
            dispatch(updateItem(objUpdate))
        }
    }

    function handleCancel() {
        if (state.term === 'ADD') {
            inputName.current.value = '';
            inputImage.current.value = '';
            inputPrice.current.value = '';
        } else {

        }
    }
    return (
        <div>
            <TaskHeader />
            <div className="flex mb-4 justify-center mt-5">
                <div className="panel panel-warning w-[600px]">
                    <div className="panel-heading">
                        <h3 className="panel-title mb-3 text-center text-3xl font-mono uppercase">
                            {state.term === 'ADD' ? 'Add product' : 'Update product'}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form >
                            <div className="form-group">
                                <label className="mb-1 text-gray-600">Name</label>
                                <input ref={inputName} type="text" required className="form-control mb-2" />
                                <label className="inline-block mb-2 text-gray-600">File Upload</label>
                                <div className="flex items-center justify-start mb-2">
                                    <input ref={inputImage} type="file" className="mb-1" onChange={handlePreviewImage} />
                                    {image && (
                                        <img
                                            src={image.preview}
                                            alt=""
                                            width="110px"
                                            height="110px"
                                        />
                                    )}
                                </div>
                                <label className="mb-1 text-gray-600">Price</label>
                                <input ref={inputPrice} type="text" className="form-control mb-2" required />
                                <label className="mb-1 text-gray-600">Type</label>
                                <select
                                    ref={inputType}
                                    className="form-select mb-2"
                                    aria-label="Default select example"
                                >
                                    <option value="true">Type 1</option>
                                    <option value="false">Type 2</option>
                                </select>

                                <br />
                                <div className="text-center">
                                    <Link to="/">
                                        <button onClick={handleSubmit} className="bg-yellow-400 text-gray-700 font-semibold rounded px-3 inline-flex items-center mr-2 h-9">
                                            <span className="pr-1" >Save</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </Link>

                                    <button onClick={handleCancel} className="bg-red-400 text-gray-700 font-semibold px-3 rounded inline-flex items-center h-9">
                                        <span className="pr-1">Cancel</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}