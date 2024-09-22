'use client';
import React, { useState } from 'react';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const filterOptions = [
  { value: 'Alphabets', label: 'Alphabets' },
  { value: 'Numbers', label: 'Numbers' },
  { value: 'Highest alphabet', label: 'Highest alphabet' },
];

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const parsedInput = JSON.parse(input);

      if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
        throw new Error('Invalid input format. Expected {"data": [...]}');
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/bfhl`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedInput),
      });

      if (!res.ok) {
        throw new Error('Server responded with an error');
      }

      const data = await res.json();
      setResponse(data);
      toast.success('Data processed successfully!');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderFilteredResponse = () => {
    if (!response) return null;

    return (
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-bold mb-5 text-xl">Filtered Response:</h3>
        {selectedFilters.includes('Alphabets') && (
          <p>Alphabets: {response.alphabets.join(', ')}</p>
        )}
        {selectedFilters.includes('Numbers') && (
          <p>Numbers: {response.numbers.join(', ')}</p>
        )}
        {selectedFilters.includes('Highest alphabet') && (
          <p>Highest Alphabet: {response.highest_alphabet[0]}</p>
        )}
        {selectedFilters.length === 0 && (
          <p className='text-center font-semibold'>No filters selected</p>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="container mx-auto max-w-2xl p-4 mb-[150px]">
        <h1 className="text-3xl font-bold text-center mb-6">Bajaj Finserv Challenge</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            className="w-full p-2 border border-gray-400 rounded mb-4 shadow-sm outline-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Enter JSON input (e.g., { "data": ["A","C","z"] })'
            rows={5}
          />
          <button
            type="submit"
            className={`w-full p-2 rounded transition duration-200 ${loading ? 'bg-gray-400' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Submit'}
          </button>
        </form>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Select filters:</h3>
          <Select
            isMulti
            options={filterOptions}
            onChange={(selected) => setSelectedFilters(selected.map(option => option.value))}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        {renderFilteredResponse()}
        <ToastContainer />
      </div>
      <div className="fixed bottom-4 flex justify-center mx-5 bg-white border border-gray-300 rounded-lg shadow-md p-4">
        <div className="flex items-center space-x-2">
          <svg className="w-10 h- text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v4m0 4h.01M21 12.9a9 9 0 10-18 0A9 9 0 0021 12.9z"></path>
          </svg>
          <p className="text-gray-700 text-sm">
            Please note that the backend has been <b>deployed on Render's free tier.</b> As a result, it may <b>take between 30 to 45 seconds for the backend to respond initially</b>. Thank you for your patience!
            <br />
            For more details
            <a href="https://github.com/RagulSankar04" target="_blank" className="text-blue-500 hover:underline">Bajaj Finserv Repository</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
