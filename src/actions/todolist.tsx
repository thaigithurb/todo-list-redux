export const handleAdd = (content: any) => {

    return {
        type: "TO_DO_ADD",
        content: content,
    };
}

export const handleCheck = (index: any) => {
    return {
        type: "TO_DO_CHECK",
        index: index,
    };
}

export const handleDelete = (index: any) => {
    return {
        type: "TO_DO_DELETE",
        index: index,
    };
}

export const handleEdit = (newContent: any, index: any) => {
    return {
        type: "TO_DO_EDIT",
        index: index,
        newContent: newContent,
    };
}

export const toggleEditModal = (index: any) => {
    return {
        type: "TOGGLE_EDIT_MODAL",
        index: index,
    }
}