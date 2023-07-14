import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../contexts/DataContext";

const Navbar = () => {
  const {
    meetupData,
    filteredData,
    setFilteredData,
    searchText,
    setSearchText,
  } = useData();

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    if (searchText.length < 3) {
      setFilteredData(meetupData);
    } else {
      handleFilter(searchText);
    }
  };

  const handleFilter = (searchText) => {
    const search = meetupData.filter((meetup) =>
      meetup.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(search);
  };

  return (
    <div className="max-w-[1280px] mx-auto h-20 flex items-center justify-between px-5">
      <NavLink to="/">
        <h2 className="text-3xl font-semibold logo text-rose-600 leading-3">
          meetups
        </h2>
      </NavLink>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search by event title and tags."
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          value={searchText}
          onChange={(e) => handleSearch(e)}
        />
      </div>
    </div>
  );
};

export default Navbar;
