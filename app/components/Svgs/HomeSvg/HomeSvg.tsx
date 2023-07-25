import { SvgType } from 'types';

export const HomeSvg: React.FC<SvgType> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      viewBox='0 0 122.88 112.07'
      width={props.width}
      height={props.height}
      fill={props.color}
    >
      <path
        d='M61.44 0 0 60.18l14.99 7.87L61.04 19.7l46.85 48.36 14.99-7.87L61.44 0zM18.26 69.63 61.5 26.38l43.11 43.25v42.43H73.12V82.09H49.49v29.97H18.26V69.63z'
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
        }}
      />
    </svg>
  );
};

export default HomeSvg;
