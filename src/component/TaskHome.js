import { useSelector } from "react-redux";
import { TaskAdd } from "./TaskAdd";
import { TaskHeader } from "./TaskHeader";
import { TaskPagination } from "./TaskPagination";
import { TaskProduct } from "./TaskProduct";
import { TaskSearch } from "./TaskSearch";
import { TaskSort } from "./TaskSort";

export function TaskHome() {
    const state = useSelector((state) => state.taskReducer);

    return (
        <div className="home">
            {/* header */}
            <TaskHeader />

            {/* buttons */}
            <div className="flex mb-4 justify-center mt-5">
                {/* search */}
                <TaskSearch />
                {/* sort */}
                <TaskSort />
                {/* add btn */}
                <TaskAdd />
            </div>

            {/* list data */}
            < section className="ml-10 mr-10" >
                <div className=" px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {state.currentData &&
                            state.currentData.map((item, index) => {
                                return <TaskProduct item={item} key={index} index={index} />;
                            })
                        }
                    </div>
                </div>
            </section >

            {/* Pagination */}
            <TaskPagination />

            {/* footer */}
            <footer className="py-5 bg-dark mt-3 bottom-0 w-100 h-7">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p>
                </div>
            </footer>
        </div>
    )
}