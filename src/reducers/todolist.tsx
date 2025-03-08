const initState = {
    items: [] as any[],
    isEditModalOpen: false,
    currentEditIndex: null,
};

export const todoListReducer = (state = initState, action: any) => {
    switch (action.type) {
        case "TO_DO_ADD": {
            return {
                ...state,
                items: [...state.items, { content: action.content, checked: false }],
            };
        }
        case "TO_DO_CHECK": {
            return {
                ...state,
                items: state.items.map((item: any, index: any) =>
                    index === action.index ? { ...item, checked: !item.checked } : item
                ),
            };
        }
        case "TO_DO_DELETE": {
            return {
                ...state,
                items: state.items.filter((_, index) => index !== action.index),
            };
        }
        case "TOGGLE_EDIT_MODAL": {
            return {
                ...state,
                isEditModalOpen: !state.isEditModalOpen,
                currentEditIndex: action.index !== undefined ? action.index : state.currentEditIndex,
            };
        }
        case "TO_DO_EDIT": {
            return {
                ...state,
                items: state.items.map((item: any, index: any) =>
                    index === action.index ? { ...item, content: action.newContent } : item
                ),
            };
        }
        default:
            return state;
    }
};