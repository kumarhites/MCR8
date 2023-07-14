import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/fakefetch";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [meetupData, setMeetupData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");



  const getData = async () => {
    try {
      const {
        status,
        data: { meetups },
      } = await fakeFetch("https://example.com/api/meetups");
      if (status === 200) {
        setMeetupData(meetups);
        setFilteredData(meetups);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        meetupData,
        filteredData,
        setFilteredData,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
