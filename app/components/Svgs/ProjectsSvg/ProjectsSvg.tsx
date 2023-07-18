import { SvgType } from 'types';

export const ProjectsSvg: React.FC<SvgType> = (props) => (
  <svg
    fill={props.color}
    width={props.width}
    height={props.height}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
  >
    <g fill='none' fillRule='evenodd'>
      <path d='M0 0h32v32H0z' />
      <path
        fill={props.color}
        fillRule='nonzero'
        d='M30 0v32H2V0zm-2 22H4v8h24zm-9 3v2h-6v-2zm9-13H4v8h24zm-9 3v2h-6v-2zm9-13H4v8h24zm-9 3v2h-6V5z'
      />
    </g>
  </svg>
);
export default ProjectsSvg;
