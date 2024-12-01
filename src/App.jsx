// import { useState } from 'react'


// function App() {
//   const [count,setCount]= useState(0)
//   function Increase()
//   {
//     setCount(count+1);
//   }
//   function Decrease()
//   {
//     setCount(count-1);
//   }
//   function IncreaseBy5()
//   {
//     setCount(count+5)
//   }
//   function DecreaseBy5()
//   {
//     setCount(count-5)
//   }
//   function IncreaseBy10()
//   {
//     setCount(count+10)
//   }
//   function DecreaseBy10()
//   {
//     setCount(count-10)
//   }
//   function ResetValue()
//   {
//     setCount(0);
//   }

//   return (
//     <div className='flex justify-center items-center min-h-screen min-w-screen bg-slate-800'>
//       <div className='bg-slate-700 p-8 rounded-md shadow-md text-white'>
//         <h1 className='text-2xl flex justify-center'>Counter Machine</h1>
//         <h1 className='text-xl flex justify-center mt-5 mb-8'>Value {count}</h1>
//         <div className='flex justify-evenly items-center gap-4 mb-5'>
          
//           <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300 ease-in-out'
//           onClick={Increase}>Increase</button>
//           <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300 ease-in-out'
//           onClick={Decrease}>Decrease</button>
//           <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300 ease-in-out'
//           onClick={IncreaseBy5}>Increase By 5</button>
//           <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300 ease-in-out'
//           onClick={DecreaseBy5}>Decrease By 5</button>
//           <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300 ease-in-out'
//           onClick={IncreaseBy10}>Increase By 10</button>
//           <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300 ease-in-out'
//           onClick={DecreaseBy10}>Decrease By 10</button>
//         </div>
//         <button className='bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-105 transition duration-300 ease-in-out'
//           onClick={ResetValue}>Reset Value</button>
//       </div>
//     </div>
//   )
// }

// export default App




import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Generic handler function
  const handleUpdate = (value) => {
    setCount((prevCount) => prevCount + value);
  };

  // Button configurations
  const buttons = [
    { label: 'Increase', value: 1 },
    { label: 'Decrease', value: -1 },
    { label: 'Increase By 5', value: 5 },
    { label: 'Decrease By 5', value: -5 },
    { label: 'Increase By 10', value: 10 },
    { label: 'Decrease By 10', value: -10 },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-slate-800">
      <div className="bg-slate-700 p-8 rounded-md shadow-md text-white">
        <h1 className="text-2xl flex justify-center">Counter Machine</h1>
        <h1 className="text-xl flex justify-center mt-5 mb-8">Value: {count}</h1>
        <div className="flex flex-wrap justify-evenly items-center gap-4 mb-5">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 hover:scale-105 transition duration-300 ease-in-out"
              onClick={() => handleUpdate(button.value)}
            >
              {button.label}
            </button>
          ))}
        </div>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-105 transition duration-300 ease-in-out"
          onClick={() => setCount(0)}
        >
          Reset Value
        </button>
      </div>
    </div>
  );
}

export default App;
