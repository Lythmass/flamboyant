import {
  FacebookSvg,
  GithubSvg,
  InstagramSvg,
  LinkedinSvg,
  TwitterSvg,
} from 'components';
import { SocialsData } from 'data';

export const Socials = () => {
  const displaySocials = SocialsData.map((social) => {
    let svg;
    const props = { width: 40, height: 40, color: 'var(--light)' };
    switch (social.name) {
      case 'Facebook':
        svg = <FacebookSvg {...props} />;
        break;
      case 'Instagram':
        svg = <InstagramSvg {...props} />;
        break;
      case 'Twitter':
        svg = <TwitterSvg {...props} />;
        break;
      case 'Linkedin':
        svg = <LinkedinSvg {...props} />;
        break;
      case 'Github':
        svg = <GithubSvg {...props} />;
        break;
    }
    return (
      <a
        className='hover:scale-110 transition-all active:scale-90'
        key={social.id}
        target='_blank'
        href={social.link}
      >
        {svg}
      </a>
    );
  });
  return (
    <div className='mt-auto w-full gap-3 flex justify-between'>
      <h1 className='text-3xl w-full font-bold text-light'>My Socials:</h1>
      <div className='w-full flex gap-7 justify-start items-center'>
        {displaySocials}
      </div>
    </div>
  );
};

export default Socials;
