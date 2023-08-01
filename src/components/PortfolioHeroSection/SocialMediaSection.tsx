import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { socialMediaLogos } from '../../constants/header';

type SocialMedia = {
  platform: string;
  link: string;
  userName?: string;
};

type socialMedia = {
  socialMediaLinks: SocialMedia[];
};

const SocialMediaSection: React.FC<socialMedia> = ({ socialMediaLinks }) => {
  const router = useRouter();

  const getSocialMediaLogo: any = (socialMediaType: string) => {
    for (const key in socialMediaLogos) {
      if (socialMediaLogos[key].title === socialMediaType) {
        const { imageUrl } = socialMediaLogos[key];
        return imageUrl?.src;
      }
    }
    return '';
  };

  useEffect(() => {
    console.log('val', router.query.val); // Alerts 'Someone'
  }, [router.query]);

  if (!socialMediaLinks) {
    return null;
  }

  return (
    <div className="flex flex-row">
      {socialMediaLinks.map((social, index) => {
        return (
          <div key={index} className="perspective">
            <Image
              tabIndex={1}
              key={index}
              src={getSocialMediaLogo(social.platform)}
              alt={social.userName || ''}
              height="40"
              width="40"
              className="hoverSvg mx-2"
            ></Image>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMediaSection;
