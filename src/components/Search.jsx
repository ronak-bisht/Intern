import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const SearchBar = ({setCurrentPage}) => {
    const [inputText, setInputText] = useState(''); // State to store input text
    const navigate=useNavigate()

    const handleInputChange = (e) => {
        setInputText(e.target.value); // Update state with the input value
    };

    const handleSearch = () => {
        setCurrentPage(1)
       navigate(`?search=${inputText}`) // navigating with query in search
       setInputText("")
    };

    return (
        <div>
            <div className="flex justify-center pt-[2rem]">
                <div className="md:min-w-[400px] max-w-lg bg-[grey] p-[2px] rounded-full">
                    <div className="flex items-center bg-[#303030] rounded-full px-4 py-2">
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search items, phone"
                            className="w-full bg-[#303030] text-white focus:outline-none placeholder-gray-400"
                            value={inputText} // Set input value from state
                            onChange={handleInputChange} // Handle input change
                        />

                        {/* Search Button */}
                        <button
                            onClick={handleSearch} // Handle button click
                            className="ml-2 bg-white text-black rounded-full px-4 py-2"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
