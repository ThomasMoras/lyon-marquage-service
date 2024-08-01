import React from "react";
// rfce
function CustomRow({
  title,
  desc,
  imgs,
}: {
  title: string;
  desc: string;
  imgs: string[];
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default CustomRow;
