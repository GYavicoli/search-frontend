import { blue, blueGrey, grey } from "@mui/material/colors";

export const MainColor = blue[900];
export const SecondaryColor = blueGrey[300];
export const PanelColor = blueGrey[800];
export const TextColor = blueGrey[50];
export const BkgColor = grey[900];

// Application style
export const AppStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    gap: 0, m: 0, p: 0
};

// Menu styles
export const MenuStyle = {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'flex-start'
};
export const MenuStyleRight = {
    ...MenuStyle,
    gap: 2,
    justifyContent: 'flex-end'
};
export const MenuWrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    pr: 6, pl: 6, pt: 8, pb: 10,
    backgroundColor: BkgColor
};

// Login styles
export const LoginActionWrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    mt: 1
};
export const LoginActionLeftStyle = {
    ...MenuStyle,
    gap: 1
};
export const LoginActionRightStyle = {
    ...MenuStyleRight,
    gap: 1
};
export const LoginMenuStyle = {
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'flex-end'
};

// Main navigation station
export const NavigtionStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
};

// Section styles
export const SectionStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexGrow: 1,
    p: '10px'
};

// Map styles
export const MapWrapperStyle = { 
    ...SectionStyle,
    backgroundColor: 'black',
    p: '0px'
};

// Calculator styles
export const CalculatorStyle = {
    m: 2,
    width: '250px'
};

// Favorite styles
export const FavoriteStyle = {

}