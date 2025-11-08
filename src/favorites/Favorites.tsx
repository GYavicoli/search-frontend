import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useBus, useListener } from 'react-bus';
import { Box, Drawer, Typography } from '@mui/material';
import { Sections } from '../menu/menu-model';
import { Location } from 'maps/map-location';
import { RemoveFavEvent, ToggleFavEvent, ViewFavEvent } from './favorite-events';


export const Favorites = (): React.ReactElement => {
    const [open, setOpen] = useState<boolean>(false);
    const [favs, setFavs] = useState<Location[]>([]);

    const bus = useBus();
    
    const onToggleDrawerOpen = React.useCallback(function () {
        setOpen(!open);
    }, []);

    useListener(ToggleFavEvent, onToggleDrawerOpen);

    return (
        <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
            <Typography color='secondary' variant='h6'>{Sections.Favorites.toUpperCase()}</Typography>
            {favs?.map((fav) => (
                <Box key={`favorite-${fav.name}`}>
                    <Typography>{fav.name}</Typography>
                    <IconButton aria-label='view' onClick={() => bus.emit(ViewFavEvent, fav.id)}>
                        <VisibilityIcon/>
                    </IconButton>
                    <IconButton aria-label='delete' onClick={() => bus.emit(RemoveFavEvent, fav.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </Box>
            ))}
        </Drawer>
    );
}