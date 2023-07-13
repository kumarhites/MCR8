import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useData } from "../../contexts/DataContext";

const Home = () => {
  const { meetupData, filteredData, setFilteredData } = useData();

  const [selectedValue, setSelectedValue] = useState("both");

  const options = [
    { value: "both", label: "Both" },
    { value: "online", label: "Online" },
    { value: "offline", label: "Offline" },
  ];

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    setSelectedValue(selectedValue);
    handleFilter();
  };

  const handleFilter = (selectedValue) => {
    if (selectedValue === "both") {
      setFilteredData(meetupData);
    } else {
      const filteredData = meetupData?.filter(
        (meetup) => meetup?.eventType.toLowerCase() === selectedValue
      );
      setFilteredData(filteredData);
    }
  };

  useEffect(() => {
    handleFilter(selectedValue);
  }, [selectedValue]);

  return (
    <>
      <div className="flex items-center justify-between px-5">
        <h1 className="text-4xl font-semibold text-slate-800 mt-5 mb-7">
          Meetup Events
        </h1>
        <select
          value={selectedValue}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-md p-2.5"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 px-5">
        {filteredData?.map((meetup) => (
          <Card meetup={meetup} key={meetup?.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
