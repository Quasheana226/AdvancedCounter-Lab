// Brain of the app it owns all state

import { useState, useEffect } from 'react';

import CounterDisplay from './CounterDisplay.tsx';
import CounterButtons from './CounterButtons.tsx';
import CounterHistory from './CounterHistory.tsx';


function AdvancedCounter() {

    // All State lives here

    // The Current number count
    const [count, setCount] = useState<number>(0);

    //Array of every count value
    const [history, setHistory] = useState<number[]>([0]);

    // Effect Auto save
    // saves count to localStorage with a 500ms delay
    useEffect(() => {
        console.log('Your count has changed to:', count);

        const saveTimer = setTimeout(() => {
            localStorage.setItem('savedcount', JSON.stringify(count));
            console.log('✓ saved:', count);
        }, 500);

        //Cancel the save if count changes before timer
        return () => {
            console.log('🧹 Canceling save');
            clearTimeout(saveTimer);
        };
    }, [count]);


    //KEYBOARD LISTENERS

    useEffect(() => {
        //types the browser keyboard
        const handleKeyDown = (event: KeyboardEvent): void => {
            if (event.key === "ArrowUp") {
                setCount(prev => {
                    const newCount = prev + 1;
                    setHistory(h => [...h, newCount]);
                    return newCount;
                });
            }

            if (event.key === 'ArrowDown') {
                setCount(prev => {
                    const newCount = prev - 1;
                    setHistory(h => [...h, newCount]);
                    return newCount;
                });
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        //remove listener
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

// HANDLER FUNCTIONS
// Children call these functions , but logic live here

const handleIncrement = () => {
    const newCount: number = count + 1;
    setCount(newCount);
    setHistory([...history, newCount]);
};

const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setHistory([...history, newCount]);
};

return (
    <div>

        <CounterDisplay count={count} />
        <CounterButtons
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
        />
        <CounterHistory history={history} />
    </div>
);
}

export default AdvancedCounter;
