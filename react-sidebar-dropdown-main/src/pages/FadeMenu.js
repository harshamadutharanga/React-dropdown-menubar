import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function FadeMenu() {
  const harsha = ()=>{window.location.pathname = '/overview'}
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (


    <div className='home'>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Phones
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={ harsha } >Samsung</MenuItem>
        <MenuItem onClick={handleClose}>Huawei</MenuItem>
        <MenuItem onClick={handleClose}>Apple</MenuItem>
      </Menu>
    </div>
  );
}
