import { useState } from "react";

function Gender() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <input
        type="radio"
        value="male"
        // checked={gender === "male"}
        // onChange={(e) => setGender(e.target.value)}
      />
      Male

      <input
        type="radio"
        value="female"
        // checked={gender === "female"}
        // onChange={(e) => setGender(e.target.value)}
      />
      Female

      <p>Selected: {gender}</p>
    </div>
  );
}

export default Gender