import { Feature, Map, View } from "ol";
import { Point } from "ol/geom";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat } from "ol/proj";
import { OSM } from "ol/source";
import VectorSource from "ol/source/Vector";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";
import { useEffect, useRef, useState } from "react";

export default function MapComponent() {
    const mapRef: any = useRef<HTMLDivElement | undefined>(undefined);
    const [latitude, setLatitude] = useState<number>(0)
    const [longitude, setLongitude] = useState<number>(0)

    useEffect(() => {
        const map = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });

        async function fetchCoordinates() {
            const url: string = "https://localizeme.onrender.com/location"

            try {
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`)
                }

                const json = await response.json();

                setLatitude(json[0])
                setLongitude(json[1])
            } catch (error: any) {
                console.log(error.message)
            }
        }
        fetchCoordinates()

        // add icon in the map
        const iconFeature = new Feature({
            geometry: new Point(fromLonLat([longitude, latitude])),
            name: 'Null Island',
            population: 4000,
            rainfall: 500,
        });

        const iconStyle = new Style({
            image: new Icon({
                anchor: [0.5, 46],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                src: 'https://png.pngtree.com/element_our/sm/20180526/sm_5b09436fd0515.jpg',
            }),
        });

        iconFeature.setStyle(iconStyle);

        const vectorSource = new VectorSource({
            features: [iconFeature],
        });

        const vectorLayer = new VectorLayer({
            source: vectorSource,
        });
        map.addLayer(vectorLayer)
    }, [latitude, longitude])

    return (
        <div ref={mapRef} style={{ width: '100%', height: '100vh' }}></div>
    )
}