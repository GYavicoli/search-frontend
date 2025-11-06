import React, { useState } from 'react';
import { Box, IconButton, Grid, Typography } from '@mui/material';
import { CalculatorStyle } from '../sections/section-styles';

interface CalculatorProps {}

export const Calculator = ({ }: CalculatorProps): React.ReactElement => {
    const [display, setDisplay] = useState('');
    const [result, setResult] = useState('');

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        'C', '0', '=', '+'
    ];

    const onButtonClick = (value: string) => {
        if (value === '=') {
            try { 
                setResult(eval(display).toString());
            } catch (error) {
                setResult('Error');
            }
            setDisplay('');
        } else if (value === 'C') {
            setDisplay('');
            setResult('');
        } else {
            setDisplay((prevDisplay) => prevDisplay + value);
        }
    }

    const getButtonColor = (value: string) => {
        if (!isNaN(parseFloat(String(value))) && isFinite(Number(value))) {
            return 'grey';
        }

        return value === 'C' ? 'orange' : '#1775D2';
    }

    return (
        <Box sx={ CalculatorStyle }>
            <Box
                sx={{
                    backgroundColor: 'grey',
                    borderRadius: '16px',
                    fontSize: '1.2rem',
                    p: 2, mb: 2,
                    minHeight: '25px'
                }}
            >
                <Typography>{display}</Typography>
                <Typography>{result}</Typography>
            </Box>

            <Grid container spacing={1}>
                {buttons.map((button) => (
                    <Grid 
                        size={3}
                        key={`calculator-button-${button}`}
                    >
                        <IconButton
                            onClick={() => onButtonClick(button)}
                            sx={{
                                backgroundColor: getButtonColor(button),
                                borderRadius: '50%',
                                width: '56px', height: '56px',
                                p: 0, fontSize: '1.2rem',
                                '&:hover': {
                                    backgroundColor: '#ffffff30'
                                }
                            }}
                        >
                            {button}
                        </IconButton>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}