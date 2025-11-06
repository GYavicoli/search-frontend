import React, { useState } from 'react';
import { useListener } from 'react-bus';
import { Map } from '../maps/Map';
import { MenuEvent } from '../menu/menu-events';

export interface SectionContainerProps {};

export const SectionContainer = ({}: SectionContainerProps): React.ReactElement => {
    const [section, setSection] = useState<string>();
    
    const handleMenuEvent = React.useCallback(function (value: any) {
        setSection(value);
    }, []);

    useListener(MenuEvent, handleMenuEvent);

    // ToDo - for now we only have one section so always return map, 
    // when we have more sections use an if/else or switch/case on the section state.
    return <Map />
}