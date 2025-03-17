import React from "react";
import PropTypes from "prop-types";
import { Badge, Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import avatarIcon from "./images/Seyfullah.png";
import AvatarBackground from "./images/tech.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useTranslation } from "react-i18next";

// Styled Avatar avec MUI v5 pour un avatar carré avec bords arrondis
const StyledAvatar = styled(Avatar)({
  width: "224px",
  height: "289px",
  borderRadius: "10px",  // Ajout d'un rayon de bordure pour des coins arrondis
  objectFit: "cover",
  border: "4px solid white",  // Bordure blanche pour un effet élégant
});

const AvatarCustom = ({ children, ...props }) => {
  const { t } = useTranslation();

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${AvatarBackground})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        backgroundPosition: "center",
      }}
    >
      <div className="container mt-5">
        <div className="row align-items-center justify-content-center">
          {/* Colonne de l'avatar */}
          <div className="col-md-4 d-flex justify-content-center mb-4 mb-md-0">
            <Box sx={{ borderRadius: 3, padding: 1 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
                sx={{ border: "0px solid white", width: "fit-content" }}
              >
                <StyledAvatar alt="Avatar" src={avatarIcon} id="avatar" />
              </Badge>
            </Box>
          </div>

          {/* Colonne de l'encadré de présentation */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0">
              <div className="card-body">
                <h5 className="card-title text-primary font-weight-bold" style={{ fontSize: "1.5rem" }}>
                  {t("prénom-métier")}
                </h5>
                <p className="card-text" style={{ fontSize: "1rem", color: "#555" }}>
                  {t("présentation")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AvatarCustom.propTypes = {
  children: PropTypes.node,
};

export default AvatarCustom;
