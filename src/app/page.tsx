"use client";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  incrementAsync,
  decrementAsync,
} from "@/State/Counter/CounterSlice";
import { AppDispatch, RootState } from "@/State/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const Counter = useSelector((state: RootState) => state.Counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Redux Training</div>
      <div>{Counter}</div>
      <div className="p-8 m-8 gap-2 flex">
        <button
          className="bg-green-700 p-8 rounded-md"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-700 p-8 rounded-md"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-yellow-700 p-8 rounded-md"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          +10
        </button>
        <button
          className="bg-purple-700 p-8 rounded-md"
          onClick={() => dispatch(decrementByAmount(10))}
        >
          -10
        </button>
        <button
          className="bg-gray-700 p-8 rounded-md"
          onClick={() => dispatch(incrementAsync(100))}
        >
          +100
        </button>
        <button
          className="bg-cyan-700 p-8 rounded-md"
          onClick={() => dispatch(decrementAsync(100))}
        >
          -100
        </button>
      </div>
    </main>
  );
}
