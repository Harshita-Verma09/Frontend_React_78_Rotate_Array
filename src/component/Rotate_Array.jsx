import React, { useState } from 'react';

function Rotate() {
    const [inputArr, setInputArr] = useState("1,2,3,4,5");
    const [d, setD] = useState(2);
    const [rotatedArr, setRotatedArr] = useState([]);

    const rotateLeft = (arr, d) => {
        const n = arr.length;
        d = d % n;

        const reverse = (arr, start, end) => {
            while (start < end) {
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--;
            }
        };

        const newArr = [...arr];
        reverse(newArr, 0, d - 1);
        reverse(newArr, d, n - 1);
        reverse(newArr, 0, n - 1);
        

        return newArr;
    };

    const handleRotate = () => {
        const arr = inputArr
            .split(',')
            .map(str => Number(str.trim()))
            .filter(val => !isNaN(val));

        if (arr.length === 0) {
            alert("Please enter a valid array!");
            return;
        }

        const result = rotateLeft(arr, d);
        setRotatedArr(result);
    };

    return (
        <div className=" bg-gray-700 flex flex-col items-center justify-center p-6 rounded-md">
            <div className="bg-slate-800 shadow-md rounded-md p-6 w-full max-w-md ">
                <h2 className="text-2xl font-bold text-center mb-4"> Rotate Array Left</h2>

                <label className="block mb-2 font-medium">Enter Array (comma-separated):</label>
                <input
                    type="text"
                    value={inputArr}
                    onChange={(e) => setInputArr(e.target.value)}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="e.g. 1, 2, 3, 4, 5"
                />

                <label className="block mb-2 font-medium">Rotate by duration :</label>
                <input
                    type="number"
                    value={d}
                    onChange={(e) => setD(Number(e.target.value))}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    min="0"
                />

                <button
                    onClick={handleRotate}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                    Rotate
                </button>

                {rotatedArr.length > 0 && (
                    <div className="mt-6 text-center">
                        <h3 className="text-lg font-semibold mb-2">Rotated Array:</h3>
                        <p className="font-mono text-white">{rotatedArr.join(', ')}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Rotate;
