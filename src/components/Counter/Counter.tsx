import { useDispatch, useSelector } from "react-redux";
import { counterDown, counterReset, counterUp } from "../../actions/counter";

export const Counter = () => {

    const count = useSelector((state : any) => state.count);
    const dispatch = useDispatch();

    const handleUp = () => {
        dispatch(counterUp());
    }

    const handleDown = () => {
        dispatch(counterDown());
    }

    const handleReset = () => {
        dispatch(counterReset());
    }

    return (
        <>
            <div className='p-[10px]'>
                <h1 className='text-3xl mb-[20px]'>Count: {count}</h1>
                <div className='flex gap-[10px]'>
                    <button 
                        className='border p-[6px]'
                        onClick={handleUp}
                    >   
                        Up
                    </button>
                    <button 
                        className='border p-[6px]'
                        onClick={handleDown}
                    >
                        Down
                    </button>
                    <button 
                        className='border p-[6px]'
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
}