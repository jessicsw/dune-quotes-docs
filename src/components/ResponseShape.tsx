import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeBlock from "./CodeBlock";

const ResponseShape = ({ responseShape }: { responseShape: string }) => {
  const [toggleView, setToggleView] = useState<boolean>(false);

  const handleToggleView = () => {
    setToggleView(!toggleView);
  };

  return (
    <div className="my-3">
      <button onClick={handleToggleView}>
        {toggleView ? <ExpandMoreIcon /> : <ChevronRightIcon />}
      </button>
      <span className="ml-2 pt-10">Response Shape</span>
      {toggleView && <CodeBlock code={responseShape} />}
    </div>
  );
};

export default ResponseShape;
