import { useDispatch, useSelector } from "react-redux";
import { handleAdd, handleCheck, handleDelete } from "../../actions/todolist";
import { MdDelete } from "react-icons/md";

export const ToDoList = () => {

    const items = useSelector((state: any) => state.items);
    const dispatch = useDispatch();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const content = e.target.content.value;
        if (content !== "") {
            dispatch(handleAdd(content));
        }
        e.target.content.value = '';
    }

    const handleCheckItem = (e: any) => {
        dispatch(handleCheck(e));
    }

    const handleDeleteItem = (e: any) => {
        dispatch(handleDelete(e));
    }

    return (
        <>
            <div className="bg-gradient-to-r from-[#110d5b] via-[#57066e] via-[#1a0979] to-[#5d1193] min-h-screen pt-[100px]">
                <div className="w-[500px]  mx-auto bg-white px-[20px] py-[25px] rounded-[8px]">
                    <div className="text-blue-950 font-[700] text-[24px] title relative">
                        To-Do List
                    </div>
                    <form
                        className="mt-[15px] bg-[#e8e8e8] rounded-[40px] flex overflow-hidden "
                        onSubmit={handleSubmit}
                    >
                        <input
                            name="content"
                            placeholder="Add your task"
                            className="flex-1 outline-none px-[20px]"
                        />
                        <button className="bg-amber-600 rounded-[40px] py-[15px] px-[40px] text-white font-[600] cursor-pointer">Add</button>
                    </form>
                    {
                        items &&
                        <ul className="relative mt-[15px] flex flex-col gap-[15px]">
                            {
                                items.map((item: any, index: any) =>
                                    <li className="flex justify-between items-center relative" key={index}>
                                        <div 
                                            className={`list-item cursor-pointer ${item.checked ? "checked" : ""}`}
                                            onClick={() => handleCheckItem(index)}
                                        >
                                            <div className="ml-[40px] text-[18px] cursor-default">
                                                {item.content} 
                                            </div>
                                        </div>
                                        <MdDelete 
                                            className="text-[22px] cursor-pointer text-red-700 mr-[20px]"
                                            onClick={() => handleDeleteItem(index)}
                                        />
                                    </li>
                                )
                            }
                        </ul>
                    }
                </div>
            </div>
        </>
    );
}