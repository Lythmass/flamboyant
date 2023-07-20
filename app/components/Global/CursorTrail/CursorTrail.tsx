'use client';
import MouseTrail from '@pjsalita/react-mouse-trail';

export const CursorTrail = () => {
  const config = {
    color: '#00000',
    idleAnimation: false,
    inverted: true,
    size: 30,
    trailCount: 30,
  };
  return (
    <>
      <MouseTrail {...config} />
    </>
  );
};

export default CursorTrail;
