// This component job is to Display the current count number on screen

interface CounterDisplayProps {
    count: number;
}

function CounterDisplay({ count }: CounterDisplayProps) {
    return (
        <div className="counter-display">
            <h1 className="counter-number">Count: {count}</h1>
        </div>
    );
}

export default CounterDisplay;
