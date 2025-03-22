import React from "react";
import { Badge, Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import avatarIcon from "./images/Seyfullah.png";
import AvatarBackground from "./images/tech.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useTranslation } from "react-i18next";

// Styled Avatar avec MUI
const StyledAvatar = styled(Avatar)({
  width: "224px",
  height: "289px",
  borderRadius: "10px",
  objectFit: "cover",
  border: "4px solid white",
});

const AvatarCustom = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="container-fluid d-flex align-items-center justify-content-center flex-column"
      style={{
        backgroundImage: `url(${AvatarBackground})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundPosition: "center",
        padding: "30px 0",
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <p
        className="font-weight-bold text-center"
        style={{
          fontSize: "1.75rem",
          color: "#FFFFFF",
          marginBottom: "20px",
          backgroundColor: "#1E3A8A",
          borderRadius: "10px",
          display: "inline-block",
          padding: "10px 20px",
        }}
      >
        {t("titreaccueil")}
      </p>

      <div className="container mt-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 d-flex justify-content-center mb-4 mb-md-0">
            <Box sx={{ borderRadius: 3, padding: 1 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
                sx={{ border: "0px solid white", width: "fit-content" }}
              >
                <StyledAvatar
                  alt="Portrait de Seyfullah Ozdal"
                  src={avatarIcon}
                  id="avatar"
                />
              </Badge>
            </Box>
          </div>

          <div className="col-md-6">
            <div className="card shadow-lg border-0" id="card">
              <div className="card-body">
                <h5
                  className="card-title text-white font-weight-bold"
                  style={{ fontSize: "1.75rem" }}
                >
                  {t("prénom")}
                </h5>
                <h1
                  className="card-text"
                  style={{ fontSize: "1.1rem", color: "#FFFFFF" }}
                >
                  {t("présentation")}
                </h1>
                <p className="text-white">{t("approche")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AvatarCustom;
