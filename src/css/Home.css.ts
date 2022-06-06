import { style } from '@vanilla-extract/css';

export const homeText = style({
  position: 'fixed',
  zIndex: '1',
  color: 'white',
  marginLeft: '20px',
  fontFamily: 'Hiragino Maru Gothic ProN',
  letterSpacing: '5px',
  opacity: '0.75',
  textShadow: '3px 3px 1px rgb(0 0 0 / 30%)',
});

export const aboutMeLink = style({
  position: 'fixed',
  top: '65vh',
  left: '80px',
  zIndex: '1',
  color: 'white',
  fontSize: '25px',
  fontFamily: 'Hiragino Maru Gothic ProN',
  letterSpacing: '5px',
  opacity: '0.75',
  textShadow: '3px 3px 1px rgb(0 0 0 / 30%)',
  ':hover': {
    color: 'grey',
  }
});