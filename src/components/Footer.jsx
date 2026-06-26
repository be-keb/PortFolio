import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 0, // margin-top
        py: 3, // padding-top, padding-bottom
        borderTop: "1px solid #e5e7eb",
        backgroundColor: "#fafafa",
        justifyContent: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}>
        © {new Date().getFullYear()} Muhammad Yahya. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
