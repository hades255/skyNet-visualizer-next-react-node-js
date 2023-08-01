import React from 'react';
import ImageWithTitleSubtitle from '../ImageWithTitleSubtitle';
import tick from '../../assets/tick.svg';

type Feature = {
  title: string;
  subtitle: string;
  imageSrc: string;
};

type FeatureListProps = {
  detailFeatures: Feature[];
};

const FeatureList: React.FC<FeatureListProps> = ({ detailFeatures }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
    {detailFeatures.map((feature, index) => (
      <div key={index}>
        <ImageWithTitleSubtitle
          title={feature.title}
          subtitle={feature.subtitle}
          imageSrc={tick}
          imgHeight={24}
          imgWidth={24}
        />
      </div>
    ))}
  </div>
);

export default FeatureList;
