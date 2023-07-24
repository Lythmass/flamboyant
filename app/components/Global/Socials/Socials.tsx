import {
  FacebookSvg,
  GithubSvg,
  InstagramSvg,
  LinkedinSvg,
  TwitterSvg,
} from 'components';
import { SocialsData } from 'data';

export const Socials: React.FC<{ iconsColor: string }> = (props) => {
  const displaySocials = SocialsData.map((social) => {
    let svg;
    const data = { width: 40, height: 40, color: `var(${props.iconsColor})` };
    switch (social.name) {
      case 'Facebook':
        svg = <FacebookSvg {...data} />;
        break;
      case 'Instagram':
        svg = <InstagramSvg {...data} />;
        break;
      case 'Twitter':
        svg = <TwitterSvg {...data} />;
        break;
      case 'Linkedin':
        svg = <LinkedinSvg {...data} />;
        break;
      case 'Github':
        svg = <GithubSvg {...data} />;
        break;
    }
    return (
      <a
        className='hover:scale-110 transition-all active:scale-90'
        key={social.id}
        target='_blank'
        href={social.link}
        aria-label={social.name}
      >
        {svg}
      </a>
    );
  });
  return (
    <div className='w-full mt-1 sm:mt-0 flex gap-7 flex-wrap sm:flex-nowrap justify-start items-center'>
      {displaySocials}
    </div>
  );
};

export default Socials;
