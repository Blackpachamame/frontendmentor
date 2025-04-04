import { GeoLocationResponse } from "../types/geoTypes";

interface InfoProps {
  info: GeoLocationResponse | null;
}

export default function Info({ info }: InfoProps) {
  if (!info) return <p>Cargando...</p>;
  const { ip, location, isp } = info;
  const { country, city, timezone } = location;

  return (
    <div className="z-10 absolute transform translate-y-[55%] lg:translate-y-1/2 bottom-0 gap-5 lg:gap-0 p-6 lg:px-5 lg:py-8 lg:divide-x text-center lg:text-start w-[88%] max-w-[327px] lg:w-full xs:max-w-[555px] lg:max-w-[1000px] min-[1112px]:max-w-[1110px] lg:min-h-[160px] grid grid-cols-1 lg:grid-cols-[repeat(4,minmax(237px,1fr))] justify-between items-center lg:items-start bg-white rounded-xl">
      <div className="flex flex-col gap-1 lg:gap-2 px-5 lg:h-24">
        <h2 className="font-bold uppercase text-dark-Gray text-[10px] lg:text-xs tracking-[.2em]">
          IP Address
        </h2>
        <p className="font-medium lg:text-xl min-[1112px]:text-2xl">
          {ip === "" || null ? "N/A" : ip}
        </p>
      </div>

      <div className="flex flex-col gap-1 lg:gap-2 px-5 lg:h-24">
        <h2 className="font-bold uppercase text-dark-Gray text-[10px] lg:text-xs tracking-[.2em]">
          Location
        </h2>
        <p className="font-medium lg:text-xl min-[1112px]:text-2xl line-clamp-1 lg:line-clamp-2">
          {city === "" || null ? "N/A" : city},{" "}
          {country === "" || null ? "N/A" : country}
        </p>
      </div>

      <div className="flex flex-col gap-1 lg:gap-2 px-5 lg:h-24">
        <h2 className="font-bold uppercase text-dark-Gray text-[10px] lg:text-xs tracking-[.2em]">
          Timezone
        </h2>
        <p className="font-medium lg:text-xl min-[1112px]:text-2xl">
          {typeof timezone !== "number"
            ? "N/A"
            : `UTC ${timezone > 0 ? `+${timezone}` : timezone}`}
        </p>
      </div>

      <div className="flex flex-col gap-1 lg:gap-2 px-5 lg:h-24">
        <h2 className="font-bold uppercase text-dark-Gray text-[10px] lg:text-xs tracking-[.2em]">
          ISP
        </h2>
        <p className="font-medium lg:text-xl min-[1112px]:text-2xl line-clamp-1 lg:line-clamp-2">
          {isp === "" || null ? "N/A" : isp}
        </p>
      </div>
    </div>
  );
}
