import type { MetaFunction } from "@remix-run/node";
import MapComponent from "~/openlayers/map/component/MapComponent";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <MapComponent/>
    </div>
  );
}
