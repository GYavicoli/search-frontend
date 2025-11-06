import React from 'react';
import { Avatar, Box, Button } from '@mui/material';
import { getUserInitials, User } from './user-model';
import { UserLogout } from './user-events';
import { MainColor } from '../sections/section-styles';
import { useBus } from 'react-bus';
import { blue } from '@mui/material/colors';

export interface UserAvatarProps {
    user: User | undefined;
};

export const UserAvatar = ({ user }: UserAvatarProps): React.ReactElement => {
    const bus = useBus();

    if (!user) {
        return <></>;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
            <Avatar sx={{ bgcolor: MainColor }}>{getUserInitials(user)}</Avatar>
            <Button sx={{ bgcolor: blue[900] }} onClick={() => bus.emit(UserLogout)} variant='contained'>Logout</Button>
        </Box>
    );
}