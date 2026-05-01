// COMPONENT JOB IS TO SHOW + and - buttons when clicked 

interface CounterButtonsProps {

    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;


};


function CounterButtons({ onIncrement, onDecrement }: CounterButtonsProps) {
    return (
        <div>
            <button onClick={onIncrement}>
                ➕ Increase
            </button>

            <button
                onClick={onDecrement}
                style={{ marginLeft: '8px' }}
            >
                ➖ Decrease

            </button>

            

            <p style={{ color: 'gray' }}> ⚡️ Tip: ArrowUp and ArrowDown keys can also be used!</p>

        </div>
    );
}
export default CounterButtons;