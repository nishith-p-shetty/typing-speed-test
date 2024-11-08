'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from "./ui/button"

export const Playground = () => {
    const words = 'Apple Orange Quick Fox Brown Lazy Jumps Over Dog Keyboard Programming Development JavaScript Python Algorithm Function Variable Syntax Compile Execute Interface Abstract Polymorphism Encapsulation Inheritance Database Schema Query Transaction Encryption'.split(' ');
    const [currentWord, setCurrentWord] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [correctWords, setCorrectWords] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(30);
    const [isTestRunning, setIsTestRunning] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isTestRunning) {
            if (timeRemaining > 0) {
                const timer = setTimeout(() => {
                    setTimeRemaining(timeRemaining - 1);
                }, 1000);
                return () => clearTimeout(timer);
            } else {
                setIsTestRunning(false);
            }
        }
    }, [isTestRunning, timeRemaining]);

    useEffect(() => {
        if (isTestRunning) {
            setCurrentWord(words[Math.floor(Math.random() * words.length)]);
            inputRef.current.focus();
        }
    }, [isTestRunning]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        if (e.target.value.trim().toLowerCase() === currentWord.toLowerCase()) {
            setCorrectWords(correctWords + 1);
            setCurrentWord(words[Math.floor(Math.random() * words.length)]);
            setInputValue('');
        }
    }

    const handleTestAgain = () => {
        setCorrectWords(0);
        setTimeRemaining(30);
        setIsTestRunning(true);
        setInputValue('');
        setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    }

    return (
        <section className="p-3 mx-auto my-auto">
            <div className="flex items-center justify-center">
                <h1 className="mx-auto">{timeRemaining}</h1>
                <Button variant="secondary" className="mx-auto" onClick={handleTestAgain}>
                    Test Again
                </Button>
            </div>
            {isTestRunning ? (
                <div>
                    <p className="text-center text-lg">{currentWord}</p>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        className="border p-2 mx-auto block"
                    />
                </div>
            ) : (
                <div>
                    <p className="text-center text-lg">Your score: {correctWords}</p>
                </div>
            )}
        </section>
    )
}
