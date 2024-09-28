import React, { useState } from "react";
import { Select } from "antd";
import { DebounceInput } from "react-debounce-input";

const { Option } = Select;

interface SearchBarProps {
  onQueryChange: (query: string, keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onQueryChange }) => {
  const [selectedQuery, setSelectedQuery] = useState("popular");
  const [keyword, setKeyword] = useState("");

  const handleSelectChange = (value: string) => {
    setSelectedQuery(value);
    onQueryChange(value, keyword);
  };

  const handleKeywordChange = (value: string) => {
    setKeyword(value);
    onQueryChange(selectedQuery, value);
  };

  return (
    <div className="p-3 flex flex-col md:flex-row md:justify-between md:py-5 items-center bg-gradient-to-r from-red-600 via-red-700 to-red-800 w-full">
      <div className="flex justify-center items-center space-x-4">
        <div className="text-white text-lg">GO AHEAD AND FIND THE MOVIE</div>
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          value={keyword}
          onChange={(e) => handleKeywordChange(e.target.value)}
          placeholder="Search by keyword..."
          className="ant-input w-[100px]"
        />
        <Select
          defaultValue="popular"
          style={{ width: 120 }}
          onChange={handleSelectChange}
        >
          <Option value="popular">Popular</Option>
          <Option value="top_rated">Top Rated</Option>
          <Option value="now_playing">Now Playing</Option>
          <Option value="upcoming">Upcoming</Option>
        </Select>
      </div>
    </div>
  );
};

export default SearchBar;
