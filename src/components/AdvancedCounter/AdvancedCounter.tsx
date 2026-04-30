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
        console.log('Your count has changed to:', count, "started to save");

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
}