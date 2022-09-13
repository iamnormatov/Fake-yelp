import React, { useState } from "react";

export default function ToggleBtn() {
  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <>
      <button
        className="btn btn-secondary my-2"
        onClick={() => setToggleBtn(!toggleBtn)}
      >
        Toggle
      </button>
      {toggleBtn ? <p className="lead">YouTube content</p> : null}
    </>
  );
}
