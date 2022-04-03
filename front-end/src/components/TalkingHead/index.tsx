import React from 'react';
import './index.scss';

export type TTalkingHeadProps = {
  face: string,
  altFaceText: string,
}

export function TalkingHead({ face, altFaceText }: TTalkingHeadProps) {
  return (
    <div
      className="talking-head"
      data-testid="talking-head"
    >
      <img
        src={face}
        alt={altFaceText}
        className="talking-head__image"
        data-testid="talking-head__image"
      />
    </div>
  );
}
