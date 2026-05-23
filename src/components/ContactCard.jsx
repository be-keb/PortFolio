import { useRef, useState } from "react";

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
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactLinks = [
    {
      label: "Email",
      value: "q7feng@gmail.com",
      href: "mailto:q7feng@gmail.com",
      icon: <EmailIcon />,
    },
  ];

  function handleSubmit() {
    setStatus("Sending...");
    setIsSubmitting(true);
  }

  function handleIframeLoad() {
    if (!isSubmitting) return;

    setStatus("Message sent successfully.");
    setIsSubmitting(false);
    formRef.current?.reset();
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        height: { md: "75vh" },
        overflow: "auto",
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
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
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

        <iframe
          name="web3forms-hidden-frame"
          title="web3forms-hidden-frame"
          style={{ display: "none" }}
          onLoad={handleIframeLoad}
        />

        <Box
          component="form"
          ref={formRef}
          action="https://api.web3forms.com/submit"
          method="POST"
          target="web3forms-hidden-frame"
          onSubmit={handleSubmit}
        >
          <Typography variant="h6" fontWeight={800} sx={{ mb: 2 }}>
            Quick Message
          </Typography>

          <input
            type="hidden"
            name="access_key"
            value="b70606c5-556b-4982-be7b-b4b3ad942e1c"
          />

          <input
            type="hidden"
            name="subject"
            value="New message from Qihang Feng Portfolio"
          />

          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          <Stack spacing={2}>
            <TextField
              name="name"
              label="Your name"
              fullWidth
              size="small"
            />

            <TextField
              name="email"
              label="Your email"
              type="email"
              fullWidth
              size="small"
              required
            />

            <TextField
              name="message"
              label="Message"
              fullWidth
              multiline
              minRows={4}
              required
            />

            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: 2,
                  px: 3,
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {status && (
                <Typography
                  variant="body2"
                  sx={{
                    color: status.includes("successfully")
                      ? "success.main"
                      : "text.secondary",
                    fontWeight: 600,
                  }}
                >
                  {status}
                </Typography>
              )}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

export default ContactCard;
