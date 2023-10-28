// we tell NextJS that this is a client component and that it has itneractivity
// whenever we use states or eventListeners, the component is a client component
"use client";

import { ChangeEvent, FC, FormEvent, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchBar: FC = () => {
  // useState hooks for the search query and isFocused
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // handleChange function, proptype: event: ChangeEvent<HTMLInputElement>
  // eventListener for inputChange
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // handleSubmit function, proptype: event: FormEvent<HTMLFormElement>
  // eventListener for formSubmit
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search Query: ", query);
  };

  // handleFocus function
  // focus eventListener of input
  // => setIsFocused to true
  const handleFocus = () => {
    setIsFocused(true);
  };

  // handleBlur function
  // blur eventListener of input
  // => setIsFocused to false
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex justify-between items-center h-full w-full md:w-44 lg:w-full md:border-2 border-mono-black py-1 px-4 md:rounded-full focus-within:border-mono-blue'
    >
      <input
        type='text'
        value={query}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder='Search'
        className='w-full bg-mono-white outline-0 placeholder-mono-black'
      />
      <RiSearchLine
        size={22}
        className={isFocused ? "text-mono-blue" : "text-mono-black"}
      />
    </form>
  );
};

export default SearchBar;
