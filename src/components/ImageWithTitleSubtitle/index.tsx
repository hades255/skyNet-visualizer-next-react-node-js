import Image from 'next/image';

interface Props {
  imageSrc: string;
  title: string;
  subtitle: string;
  imgHeight?: number;
  imgWidth?: number;
}

const ImageWithTitleSubtitle: React.FC<Props> = ({
  imageSrc,
  title,
  subtitle,
  imgHeight = 10,
  imgWidth = 10,
}) => {
  return (
    <div className="flex m-4">
      <div className="mx-4 mt-2">
        <Image src={imageSrc} width={imgWidth} height={imgHeight} alt="Image" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-xl font-bold mb-4">{title}</h1>
        <h2 className="text-base text-[#938A95]">{subtitle}</h2>
      </div>
    </div>
  );
};

export default ImageWithTitleSubtitle;
