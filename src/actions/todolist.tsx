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