import React from "react";
import { Badge, Box, Avatar, Container, Card, CardContent, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import avatarIcon from "./images/Seyfullah.png";
import AvatarBackground from "./images/tech.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Styled Avatar avec MUI
const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 224,
  height: 289,
  borderRadius: 10,
  objectFit: "cover",
  border: "4px solid white",
}));

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const backgroundStyle = {
  backgroundImage: `url(${AvatarBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  padding: "10px 0",
};

const hoverCardVariants = {
  hover: { scale: 1.02, transition: { duration: 0.3 } },
};

const AvatarCustom = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="d-flex flex-column align-items-center justify-content-center"
      style={backgroundStyle}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: "1.75rem",
          color: "#FFFFFF",
          backgroundColor: "#1E3A8A",
          borderRadius: 1,
          display: "inline-block",
          px: 2,
          py: 1,
          mb: 4,
          textAlign: "center",
        }}
      >
        {t("titreaccueil")}
      </Typography>

      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          {/* Section Avatar */}
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ borderRadius: 3, p: 1, display: "inline-block" }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
                sx={{ border: 0, width: "fit-content" }}
              >
                <StyledAvatar alt="Portrait de Seyfullah Ozdal" src={avatarIcon} id="avatar" />
              </Badge>
            </Box>
          </Box>

          {/* Section Information */}
          <Box sx={{ width: { xs: "100%", md: "60%" } }}>
            <motion.div whileHover="hover" variants={hoverCardVariants}>
              <Card
                sx={{
                  boxShadow: 3,
                  border: 0,
                  backgroundColor: "#1E3A8A", // fond bleu foncé semi-transparent pour le texte
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h5" sx={{ fontSize: "1.75rem", color: "#FFFFFF", mb: 2 }}>
                    {t("prénom")}
                  </Typography>
                  <Typography variant="body1" component="p" sx={{ fontSize: "1.1rem", color: "#FFFFFF", mb: 2 }}>
                    {t("présentation")}
                  </Typography>
                  <Typography variant="body2" component="p" sx={{ color: "#FFFFFF" }}>
                    {t("approche")}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </motion.div>
  );
};

export default AvatarCustom;
