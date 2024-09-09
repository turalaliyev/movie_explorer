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
    <div className="mb-4 flex space-x-4">
      {/* Select for query filters */}
      <Select
        defaultValue="popular"
        style={{ width: 200 }}
        onChange={handleSelectChange}
      >
        <Option value="popular">Popular</Option>
        <Option value="top_rated">Top Rated</Option>
        <Option value="now_playing">Now Playing</Option>
        <Option value="upcoming">Upcoming</Option>
      </Select>

      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        value={keyword}
        onChange={(e) => handleKeywordChange(e.target.value)}
        placeholder="Search by keyword..."
        className="ant-input"
        style={{ width: 300 }}
      />
    </div>
  );
};

export default SearchBar;
