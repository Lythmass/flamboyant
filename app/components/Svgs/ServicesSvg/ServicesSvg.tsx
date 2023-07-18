import { SvgType } from 'types';

export const ServicesSvg: React.FC<SvgType> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 32 32'
    width={props.width}
    height={props.height}
  >
    <g fill='none' stroke={props.color} strokeMiterlimit={10} strokeWidth={2}>
      <circle cx={11.9} cy={20.1} r={5.8} />
      <path d='m3.9 23.4 2.7-1.1M17.2 17.9l2.7-1.1M8.6 12.1l1.1 2.7M14.1 25.4l1.1 2.7M3.9 16.8l2.7 1.1M17.2 22.3l2.7 1.1M15.2 12.1l-1.1 2.7M9.7 25.4l-1.1 2.7' />
      <circle cx={22.5} cy={9.5} r={4.7} />
      <path d='m17.5 14.5 1.7-1.7M25.8 6.2l1.6-1.6M17.5 4.6l1.7 1.6M25.8 12.8l1.6 1.7M15.5 9.5h2.3M27.2 9.5h2.3M22.5 2.5v2.3M22.5 14.2v2.3' />
    </g>
  </svg>
);
export default ServicesSvg;
