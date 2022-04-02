import React from 'react';

export type TTalkingHeadProps = {
  face: string,
  altFaceText: string,
}

export const TalkingHead = ({ face, altFaceText }: TTalkingHeadProps) => (
  <div 
    className='talking-head'
    data-testid='talking-head'
  >
    <img
      src={face}
      alt={altFaceText}
      className='talking-head__image'
      data-testid='talking-head__image'
    />
  </div>
)