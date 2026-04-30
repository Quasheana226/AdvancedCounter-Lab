// This component job is to Display the current count number on screen 


interface CounterDisplayProps = {
    // Count is a number that the parent will pass
    count: Number;

};

function CounterDisplay({ count }: CounterDisplayProps) {
    return (
        <div>
            <h1>Count: {count}</h1>


        </div>
    );
}

export default CounterDisplay;