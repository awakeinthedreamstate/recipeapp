import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
      />
    </div>
  );
}
