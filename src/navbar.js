// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// const Navbar = () => {
//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <Typography variant="h6">Resume Builder</Typography>
//                 <Button color="inherit">Home</Button>
//                 <Button color="inherit">Create Resume</Button>
//                 <Button color="inherit">About</Button>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Navbar;

import React from 'react';
import logo from './img/logo.png';
import './Navbar.css'; // For styling (create this file)



const Navbar = () => {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <a href='#'>Resume Templates</a>
          <a href='#'>My Resumes</a>
          <a href='#'>About Us</a>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  
