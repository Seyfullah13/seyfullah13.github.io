import React from "react";
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

const AvatarCustom = () => {
  const { t } = useTranslation();

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center flex-column"
      style={{
        backgroundImage: `url(${AvatarBackground})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundPosition: "center",
        padding: "30px 0",  // Réduction du padding pour remonter un peu le titre
      }}
    >
      {/* Texte de présentation remonté au-dessus de l'avatar */}
      <p className="font-weight-bold text-center" style={{ fontSize: "1.75rem", color: "#FFFFFF", marginBottom: "20px", backgroundColor: '#1E3A8A',
            borderRadius: '10px',
            display: 'inline-block',
            padding: '10px 20px'}}>
        {t("titreaccueil")}
      </p>

      <div className="container mt-5">
        <div className="row align-items-center justify-content-center">
          {/* Section Avatar */}
          <div className="col-md-4 d-flex justify-content-center mb-4 mb-md-0">
            <Box sx={{ borderRadius: 3, padding: 1 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
                sx={{ border: "0px solid white", width: "fit-content" }}
              >
                <StyledAvatar 
                  alt="Portrait de Seyfullah Ozdal"  // Amélioration de l'accessibilité
                  src={avatarIcon} 
                  id="avatar" 
                />
              </Badge>
            </Box>
          </div>

          {/* Section Description */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0" id="card">
              <div className="card-body">
                <h5 className="card-title text-white font-weight-bold" style={{ fontSize: "1.75rem" }}>
                  {t("prénom")}
                </h5>
                <h1 className="card-text" style={{ fontSize: "1.1rem", color: "#FFFFFF" }}>
                  {t("présentation")}
                </h1>
                <p className="text-white"> {t("approche")}  </p>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AvatarCustom.propTypes = {};

export default AvatarCustom;
