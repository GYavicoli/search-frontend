import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { Box } from '@mui/material';
import { MapWrapperStyle } from '../sections/section-styles';
import { MapCenter, MapLocation, MapTileAtt, MapTileUrl, MapZoom } from './map-model';
import { useListener } from 'react-bus';
import { MapSearchEvent } from './map-events';
import { searchMapData } from './map-services';
import { IconComponent } from '../menu/IconComponent';
import { renderToString } from 'react-dom/server';
import { divIcon } from 'leaflet';

const ComponentResize = () => {
    const map = useMap();

    setTimeout(() => {
        map.invalidateSize();
    }, 0);

    return null;
};

interface MapData {
    places: Array<any>;
    section: string;
    icon: React.ReactElement;
}

export const Map = (): React.ReactElement => {
    const [data, setData] = useState<MapData>();
    
    const customMarkerIcon = (icon: any) => {
        return divIcon({
            html: icon,
            iconSize: [30, 30]
        });
    };

    const handleMapSearchEvent = React.useCallback(function (value: any) {
        searchMapData(value, MapLocation).then((res) => {
            setData(
                {
                    ...res,
                    section: value,
                    icon: renderToString(<IconComponent name={value} />)
                }
            );
            console.debug(res); // ToDo: remove debug
        });
    }, []);

    useListener(MapSearchEvent, handleMapSearchEvent);

    return (
        <Box sx={MapWrapperStyle}>
            <MapContainer
                style={{
                    height: '100%',
                    width: '100%'
                }}
                center={MapCenter}
                zoom={MapZoom}
                >
                <ComponentResize />
                <TileLayer attribution={MapTileAtt} url={MapTileUrl} />
                {data?.places?.map((place) => (
                    <Marker
                        position={[place.gps_coordinates.latitude, place.gps_coordinates.longitude]}
                        icon={customMarkerIcon(data.icon)}
                        key={place.place_id}
                    >
                        <Popup>
                            {place.title}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Box>
    );
}