import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Box, Stack, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import avatarIcon from "./images/Seyfullah.png"; 
import AvatarBackground from "./images/tech.png";
import'./index.css';

// Styled Avatar avec MUI v5
const StyledAvatar = styled(Avatar)({
    width: "224px",
    height: "289px",
    borderRadius: "8px",
    objectFit: "cover",
});

const AvatarCustom = ({ children, ...props }) => {
    return (
        <div 
          className="container-fluid "
          style={{
            backgroundImage: `url(${AvatarBackground})`,
            backgroundSize: 'cover',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
         
         
          }}
        >
            <Stack flexDirection="column"  className='mx-2'>
                <Box sx={{ borderRadius: 3, padding: 1, margin: 1 ,  }}> 
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        variant="dot"
                        sx={{ border: "0px solid white", width: "fit-content" }}
                    >
                        <StyledAvatar alt="Remy Sharp" src={avatarIcon} id="avatar" />
                    </Badge>
                </Box>
            </Stack>
        </div>
    );
}

AvatarCustom.propTypes = {
    children: PropTypes.node,
};

export default AvatarCustom;
