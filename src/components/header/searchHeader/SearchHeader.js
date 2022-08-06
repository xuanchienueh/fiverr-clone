import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`listjobs/${valueSearch}`);
    setValueSearch("");
  };
  return (
    <form onSubmit={handleSubmit} className="input-group ">
      <input
        type="text"
        className="form-control"
        placeholder="What service are you looking today?"
        aria-describedby="searchHeader"
        onChange={(e) => setValueSearch(e.target.value)}
        value={valueSearch}
      />
      <div className="input-group-append">
        <button type="submit" className="input-group-text" id="searchHeader">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
}
