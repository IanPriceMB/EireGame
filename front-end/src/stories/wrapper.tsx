import React from 'react';

export type StoryWrapperProps = {
  width?: number | string,
  height?: number | string,
  style?: object
  children: JSX.Element | JSX.Element[]
}

export function StoryWrapper({
  width, height, style, children,
}:StoryWrapperProps):JSX.Element {
  return (
    <div style={{ width, height, ...style }}>
      {children}
    </div>
  );
}

StoryWrapper.defaultProps = {
  width: '400px',
  height: '100vh',
  style: undefined,
};
