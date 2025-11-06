import React, { useState } from 'react';
import {
    Box,
    Button,
    Popover,
    TextField
} from '@mui/material';
import { blue } from '@mui/material/colors';
import { User } from '../user/user-model';
import { useBus, useListener } from 'react-bus';
import { LoginEvent, SignupEvent } from './login-events';
import {
    LoginActionLeftStyle,
    LoginActionRightStyle,
    LoginActionWrapperStyle,
    MainColor
} from '../sections/section-styles';
import { UserAvatar } from '../user/UserAvatar';
import { UserLogin } from '../user/user-events';

export const Login = (): React.ReactElement => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [user, setUser] = useState<User | undefined>(undefined);

    const bus = useBus();
    const open = Boolean(anchorEl);
    const id = open ? 'login-popover' : undefined;

    const onLogin = () => {
        const username = ''; // emailField
        const password = ''; // passwordField
        bus.emit(LoginEvent, { username, password });
    }

    const onOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    }

    const onClose = () => {
        setAnchorEl(null);
    }

    const onSignup = () => {
        bus.emit(SignupEvent);
    }

    const handleUserLogin = React.useCallback(function (value: any) {
        setUser(value);
    }, []);

    useListener(UserLogin, handleUserLogin);

    if (user) {
        return <UserAvatar user={user}/>;
    }

    return (
        <>
            <Button
                aria-describedby={id}
                sx={{ bgcolor: blue[900] }}
                onClick={onOpen}
                variant="contained"
            >
                Login
            </Button>
            <Popover
                id={id}
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1, m: 2, width: '300px'
                    }}
                >
                    <TextField
                        id='emailField'
                        required={true}
                        type='email'
                        label='Email'
                        variant='outlined'
                        />
                    <TextField
                        id='passwordField'
                        required={true}
                        type='password'
                        label='Password'
                        variant='outlined'
                        />
                    
                    <Box sx={LoginActionWrapperStyle}>
                        <Box sx={LoginActionLeftStyle}>
                            <Button
                                sx={{
                                    bgcolor: MainColor
                                }}
                                variant='contained'
                                onClick={() => onLogin()}
                            >
                                Login
                            </Button>
                        </Box>
                    
                        <Box sx={LoginActionRightStyle}>
                            <Button
                                color='primary'
                                variant='text'
                                onClick={() => onSignup()}
                            >
                                Signup
                            </Button>
                            <Button
                                color='primary'
                                variant='text'
                                onClick={() => onClose()}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Popover>
        </>
    );
}