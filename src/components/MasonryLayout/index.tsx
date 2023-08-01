import React from 'react';

interface Tile {
  number: string;
  details: string;
  height: number;
}

interface MasonryLayoutProps {
  tiles: Tile[];
  layout?: string;
}

const MasonryLayout: React.FC<MasonryLayoutProps> = ({ tiles, layout }) => {
  const itemBackground = layout === '2' ? 'bg-[#04171C]' : 'bg-black';
  const itemText = layout === '2' ? 'text-[#7591BD]' : 'text-yellow-100';
  return (
    <div className="w-max-content overflow-x-hidden">
      <div
        className=" hidden sm:grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      >
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`${itemBackground} p-10  flex flex-col items-center justify-center rounded-md p-4`}
            style={{
              gridRowEnd: `span ${tile.height}`,
              height: `${tile.height * 100}px`,
            }}
          >
            <h3 className={`${itemText} text-7xl font-bold mb-2`}>
              {tile.number}
            </h3>
            <p className={`${itemText} text-center text-base`}>
              {tile.details}
            </p>
          </div>
        ))}
      </div>

      {/* small screen */}

      <div
        className=" sm:hidden w-fit-content overflow-x-scroll gap-1"
        id="#vskills"
      >
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`${itemBackground} flex flex-col items-center justify-center rounded-md p-4 w-[300px] h-[300px]`}
          >
            <h3 className={`${itemText} text-xl font-bold mb-2`}>
              {tile.number}
            </h3>
            <p className={`${itemText} text-[14px]  text-center`}>
              {tile.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryLayout;
