import React from 'react';
import CalculateIcon from '@mui/icons-material/Calculate';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import StarIcon from '@mui/icons-material/Star';
import { Avatar, Typography } from '@mui/material';
import { Sections } from './menu-model';
import { blue } from '@mui/material/colors';
import { BlurOn, Celebration, Hotel, LocalCafe, LocalDining, Nightlife, SportsGolf } from '@mui/icons-material';

export interface IconProps {
    name: Sections | undefined;
}

export const IconComponent = ({ name }: IconProps): React.ReactElement => {
    if (!name) {
        return <Typography>Error!</Typography>;
    }

    switch(name) {
        case Sections.Home:
            return (
                <Avatar sx={{ bgcolor: blue[900] }}>
                    {/* <ModeOfTravelIcon/> */}
                    <BlurOn/>
                </Avatar>
            );

        case Sections.Favorites:
            return <StarIcon/>;

        case Sections.Calculator:
            return <CalculateIcon/>;

        case Sections.Golf:
            return <SportsGolf color='primary'/>;

        case Sections.Hotels:
            return <Hotel color='primary'/>;

        case Sections.Coffee:
            return <LocalCafe color='primary'/>;

        case Sections.Resturants:
            return <LocalDining color='primary'/>;

        case Sections.Bars:
            return <Nightlife color='primary'/>;

        case Sections.Entertainment:
            return <Celebration color='primary'/>;

        default:
            return <Typography>{name}</Typography>;
    }
}