// COUNTER HISTORY jon is to displat list of all previous count values

interface CounterHistoryProps {
    //History is an a array of numbers
    history: number[];
};

function CounterHistory({ history }: CounterHistoryProps) {
    return (
        <div style={{ marginTop: '20px' }}>
            <h3>⎗ Previous counts:</h3>
            <p>{history.join(" ")}</p>

        </div>
    )
}
export default CounterHistory;