import { useDispatch, useSelector } from "react-redux";
import { handleAdd, handleCheck, handleDelete, handleEdit, toggleEditModal } from "../../actions/todolist";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TbXboxX } from "react-icons/tb";

export const ToDoList = () => {

    const dispatch = useDispatch();
    const items = useSelector((state: any) => state.items);
    const state = useSelector((state: any) => state);
    console.log(state);
    const isEditModalOpen = useSelector((state: any) => state.isEditModalOpen);
    const currentEditIndex = useSelector((state: any) => state.currentEditIndex);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const content = e.target.content.value;
        if (content !== "") {
            dispatch(handleAdd(content));
        }
        e.target.content.value = '';
    }

    const handleCheckItem = (i: any) => {
        dispatch(handleCheck(i));
    }

    const handleDeleteItem = (i: any) => {
        dispatch(handleDelete(i));
    }

    const handleEditItem = (i: any) => {
        dispatch(toggleEditModal(i));
    }

    const handleEditItemSubmit = (e: any) => {
        e.preventDefault();
        const newContent = e.target.newContent.value;
        if (newContent) {
            dispatch(handleEdit(newContent, currentEditIndex));
            dispatch(toggleEditModal(currentEditIndex));
        }
    }

    return (
        <>
            <div className="bg-gradient-to-r from-[#110d5b] via-[#57066e] via-[#1a0979] to-[#5d1193] min-h-screen pt-[100px]">
                <div className="w-[500px] mx-auto bg-white px-[20px] py-[25px] rounded-[8px]">
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
                                        <div className="text-[22px] mr-[20px] flex gap-[10px]">
                                            <FaEdit
                                                className="text-blue-400 cursor-pointer"
                                                onClick={() => handleEditItem(index)}
                                            />
                                            <MdDelete
                                                className=" cursor-pointer text-red-700"
                                                onClick={() => handleDeleteItem(index)}
                                            />
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    }
                </div>
                {
                    isEditModalOpen &&
                    <div className=" fixed bg-white w-[500px] z-999 left-[603px] rounded-[8px] overflow-hidden edit-modal">
                        <div className="text-[20px] flex justify-between items-center px-[15px] pt-[15px]">
                            <div className="font-[600] ">
                                Edit task

                            </div>
                            <TbXboxX className="cursor-pointer" onClick={() => dispatch(toggleEditModal(null))}/>
                        </div>

                        <form
                            action=""
                            className="p-[15px] rounded-[8px]"
                            onSubmit={handleEditItemSubmit}
                        >
                            <input
                                placeholder="Edit your task"
                                name="newContent"
                                className="w-full outline-none bg-[#e8e8e8] p-[10px] rounded-[8px]"
                            />
                            <button className="w-full cursor-pointer mt-[20px] bg-amber-600 text-white rounded-[8px] py-[10px]">Done</button>
                        </form>
                    </div>
                }
            </div>
            {
                isEditModalOpen &&
                <div className="modal fixed inset-0 bg-gray-500/75 transition-opacity "></div>
            }
        </>
    );
}