import React from "react";
import { Highlight, themes } from "prism-react-renderer";

const CodeBlock = ({
  code,
  padding,
  inline,
  margin,
}: {
  code: string;
  padding?: boolean;
  inline?: boolean;
  margin?: boolean;
}) => {
  return (
    <Highlight code={code} language="tsx" theme={themes.nightOwl}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <div className={`${inline && `inline-flex`}`}>
          <pre
            style={style}
            className={`whitespace-pre-wrap overflow-y-auto ${
              padding && `px-3 py-2`
            } ${margin && `mr-5`}`}
          >
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line })}
                className="overflow-x-auto"
              >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default CodeBlock;
