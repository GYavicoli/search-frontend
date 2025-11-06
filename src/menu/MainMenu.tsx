import React from 'react';
import { useBus } from 'react-bus';
import { Box, Button, MenuItem, Tooltip, Typography } from '@mui/material';
import { IconComponent } from './IconComponent';
import { MenuItems, Sections } from './menu-model';
import { MenuStyle, MenuWrapperStyle, MenuStyleRight } from '../sections/section-styles';
import { Login } from '../login/Login';
import { ToggleFavEvent } from '../favorites/favorite-events';
import { MenuEvent } from './menu-events';
import { MapSearchEvent } from '../maps/map-events';
 
export const MainMenu = (): React.ReactElement => {
    const bus = useBus();

    const getSectionFromString = (str: string): Sections | undefined => {
        return Object.values(Sections).find((val) => val === str);
    }

    return (
        <Box sx={MenuWrapperStyle}>
            <Box sx={MenuStyle}>
                <Tooltip title={Sections.Home}>
                    <Button
                        aria-label={Sections.Home}
                        onClick={() => bus.emit(MenuEvent, getSectionFromString(Sections.Home))}
                    >
                        <IconComponent name={getSectionFromString(Sections.Home)}/>
                    </Button>
                </Tooltip>

                {MenuItems.map((section, index) => (
                    <>
                        <Tooltip title={section} key={`section-${section}`}>
                            <Button
                                aria-label={section}
                                color='secondary'
                                onClick={() => bus.emit(MapSearchEvent, section)}
                            >
                                {section}
                            </Button>
                        </Tooltip>
                        { index < MenuItems.length - 1 ? <Typography color='secondary' sx={{ opacity: 0.25 }}>|</Typography> : null }
                    </>
                ))}
            </Box>

            <Box sx={MenuStyleRight}>
                <Tooltip title={Sections.Favorites}>
                    <Button
                        aria-label={Sections.Favorites}
                        color='secondary'
                        variant='text'
                        onClick={() => bus.emit(ToggleFavEvent)}
                    >
                        {Sections.Favorites}
                    </Button>
                </Tooltip>

                <Tooltip title={Sections.Login}>
                    <Login />
                </Tooltip>
            </Box>
        </Box>
    );
}