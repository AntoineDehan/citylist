import type { Feature } from "../../lib/api";

import { Card, CardContent } from "@/components/ui/card";

interface CardProps {
  data: Feature;
}

function CardResult({ data }: CardProps) {
  function handleClick() {
    const { street, city, postcode } = data.properties;
    const fullAddress = `${street}, ${postcode} ${city}`;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      fullAddress,
    )}`;
    window.open(googleMapsUrl, "_blank");
  }

  return (
    <Card
      onClick={handleClick}
      className="flex w-[80%] min-w-80 cursor-pointer flex-row items-center justify-center rounded-sm border-2 border-slate-900 bg-slate-700 hover:animate-pulse hover:cursor-pointer hover:border-white hover:bg-slate-600"
    >
      <CardContent className="m-0 p-2.5 text-center text-xl text-neutral-100">
        {data.properties.street && (
          <h3 className="card_street">{data.properties.street}</h3>
        )}
        <h3 className="card_city">{data.properties.city}</h3>
        <h3 className="card_postcode"> {data.properties.postcode}</h3>
      </CardContent>
    </Card>
  );
}

export default CardResult;
