import { useDispatch, useSelector } from "react-redux";
import { sortAZ, sortDecrease, sortIncrease, sortZA } from "../redux/reducer/taskReducer";

export function TaskSort() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.taskReducer);
    const [...dataSort] = state.currentData;

    function handleSortAZ(event) {
        event.preventDefault();
        dispatch(sortAZ(dataSort))
    }

    function handleSortZA(event) {
        event.preventDefault();
        dispatch(sortZA(dataSort))
    }

    function handleSortIncrease(event) {
        event.preventDefault();
        dispatch(sortIncrease(dataSort))
    }

    function handleSortDecrease(event) {
        event.preventDefault();
        dispatch(sortDecrease(dataSort))
    }
    return (
        // sort data
        <div className="w-[50px] ml-[200px]">
            <div className="dropdown inline-block relative">
                <button className="bg-orange-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Sort</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li><a className="rounded-t hover:bg-gray-100 py-1 px-4 block whitespace-no-wrap cursor-pointer" onClick={handleSortAZ}>Sort A-Z</a></li>
                    <li><a className="rounded-t hover:bg-gray-100 py-1 px-4 block whitespace-no-wrap cursor-pointer" onClick={handleSortZA}>Sort Z-A</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="rounded-b hover:bg-gray-100 py-1 px-4 block whitespace-no-wrap cursor-pointer" onClick={handleSortIncrease}>Price Increase</a></li>
                    <li><a className="rounded-b hover:bg-gray-100 py-1 px-4 block whitespace-no-wrap cursor-pointer" onClick={handleSortDecrease}>Price Decrease</a></li>

                </ul>
            </div>
        </div>
    )
}