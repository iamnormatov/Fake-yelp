import React, { useState } from "react";


export default function InputVal() {
  const [value, setValue] = useState("Tim");
  return (
    <>
      <p className="mt-2">Value: {value}</p>
      <input
        type="text"
        className="form-control my-2"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </>
  )
}