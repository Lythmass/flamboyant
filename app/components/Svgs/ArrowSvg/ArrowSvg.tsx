import { SvgType } from 'types';

export const ArrowSvg: React.FC<SvgType> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width}
    height={props.height}
    fill='none'
    viewBox='0 0 24 24'
  >
    <line
      x1='-1000'
      y1='12'
      x2='80%'
      y2='12'
      style={{ stroke: 'var(--dark)', strokeWidth: 2, strokeLinecap: 'round' }}
    />
    <path
      stroke={props.color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m14 6 6 6-6 6'
    />
  </svg>
);
export default ArrowSvg;
