import React from 'react';
import ImageWithCaption from '../../ImageWithCaption';

interface CustomBoxProps {
  title: string;
  listItems: { contactType: string; link: string }[];
  layout?: string;
}

const ContactInfo: React.FC<CustomBoxProps> = ({
  title,
  listItems,
  layout,
}) => {
  const textColor =
    layout === '2' ? 'text-[#A2E2F1]' : 'text-portfolioPrimaryText';
  return (
    <div className="bg-black  text-white rounded-[20px] w-full h-full p-6">
      <h2 className={`text-2xl mt-5 ${textColor}`}>{title}</h2>
      <ul className="mt-3">
        {listItems.map((item) => (
          <ImageWithCaption
            key={item.contactType}
            // imageSrc={item.src}
            altText={item.link}
            caption={item.contactType}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;
