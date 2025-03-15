import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Box, Stack, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import avatarIcon from "./images/PhotoSeyf.jpg"; 

// Styled Avatar avec MUI v5
const StyledAvatar = styled(Avatar)({
    width: "224px",
    height: "289px",
    borderRadius: "8px",
    objectFit: "cover",
});

const AvatarCustom = ({ children, ...props }) => {
    return (
        <Stack flexDirection="row" >
            <Box sx={{ background: (theme) => theme.palette.background.default, borderRadius: 3, padding: 2, margin: 2 }}> 
                <Badge
                    overlap="rectangle"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    sx={{ border: "0px solid white", width: "fit-content" }}
                >
                    <StyledAvatar alt="Remy Sharp" src={avatarIcon} id="avatar" />
                </Badge>
            </Box>
        </Stack>
    );
}
AvatarCustom.propTypes = {
    children: PropTypes.node,
};


export default AvatarCustom;
