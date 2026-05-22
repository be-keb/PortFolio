import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";

function ContactCard() {
  const contactLinks = [
    {
      label: "Email",
      value: "q7feng@gmail.com",
      href: "mailto:q7feng@gmail.com",
      icon: <EmailIcon />,
    },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "#fafafa",
        animation: "cardPop 500ms ease forwards",
        "@keyframes cardPop": {
          "0%": {
            opacity: 0,
            transform: "translateX(40px) scale(0.96)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0) scale(1)",
          },
        },
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4" fontWeight={800}>
            Contact
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.7 }}>
            Feel free to reach out for software development, full stack, machine
            learning, or project collaboration opportunities.
          </Typography>
        </Box>

        <Divider />

        <Stack spacing={2}>
          {contactLinks.map((item) => (
            <Button
              key={item.label}
              href={item.href}
              startIcon={item.icon}
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                p: 2,
                borderRadius: 3,
                backgroundColor: "white",
                border: "1px solid",
                borderColor: "divider",
                color: "text.primary",
                transition: "all 250ms ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: 3,
                  backgroundColor: "white",
                },
              }}
            >
              <Box sx={{ textAlign: "left" }}>
                <Typography fontWeight={700}>{item.label}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.value}
                </Typography>
              </Box>
            </Button>
          ))}
        </Stack>

        <Divider />

        <Box>
          <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
            Quick Message
          </Typography>

          <Stack spacing={2}>
            <TextField label="Your name" fullWidth size="small" />
            <TextField label="Your email" fullWidth size="small" />
            <TextField
              label="Message"
              fullWidth
              multiline
              minRows={4}
              placeholder="This form is a placeholder for now."
            />

            <Button
              variant="contained"
              disabled
              sx={{
                alignSelf: "flex-start",
                textTransform: "none",
                fontWeight: 700,
                borderRadius: 2,
                px: 3,
              }}
            >
              Send Message, Coming Soon
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

export default ContactCard;
