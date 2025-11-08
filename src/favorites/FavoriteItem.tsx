import React from 'react';
import { Location } from 'maps/map-location';
import { Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useBus } from 'react-bus';
import { RemoveFavEvent, ViewFavEvent } from './favorite-events';

export const FavoriteItem = (location: Location): React.ReactElement => {
    const bus = useBus();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 2 }}>
            <FavoriteIcon />

            <Typography>{location.name}</Typography>
            
            <IconButton aria-label='view' onClick={() => bus.emit(ViewFavEvent, location.id)}>
                <VisibilityIcon/>
            </IconButton>
            
            <IconButton aria-label='delete' onClick={() => bus.emit(RemoveFavEvent, location.id)}>
                <DeleteIcon/>
            </IconButton>
        </Box>
    );
}