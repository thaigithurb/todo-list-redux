const initState = {
    items: [] as any[],
};

export const todoListReducer = (state = initState, action: any) => {
    switch (action.type) {
        case "TO_DO_ADD": {
            return {
                items: [...state.items, { content: action.content, checked: false }],
            };
        }
        case "TO_DO_CHECK": {
            return {
                items: state.items.map((item: any, index: any) =>
                    index === action.index ? { ...item, checked: !item.checked } : item
                )
            };
        }
        case "TO_DO_DELETE": {
            return {
                items: state.items.filter((_, index) => 
                    index !== action.index,
                )
            };
        }
    }
    return state;
}