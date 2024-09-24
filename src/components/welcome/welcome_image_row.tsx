import React from "react";
import { Box, Card, CardMedia } from "@mui/material";

const images = [
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV86od8ERtWwHgGz24NDCkuyx0pSQgE3D2hytZa2626IAZ-7Fl_-8n653NvLTI87UPCisazOBqOcnZ7SLCXVdP9vaLNOe1mzIsxJGvehJHWPZEJkZ31aJ-9TONbkWP274cLJIq2uZCd-tipEqOBeirkBZ=w2168-h1626-s-no-gm?authuser=0",
    title: "First Image",
    rotation: -3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV860bGEKHq9R_yOuWGS7tIFBXOzC0U4wCBVdG9-XmPI6GigqWc8pkil1cN1wq82ZIZ98yUkDx_R9X5weVSiRg-FrOMG6Ih9JsZCDfA9HEj6H7B1z5b_MBAb7OnTqkfHe33-hLrAPbCjX3X4DUzySvCl8=w400-h400-s-no-gm?authuser=0",
    title: "Second Image",
    rotation: 1,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV86mTH7kXqAu-2JD0cgRdVXBDpmM5zooPWienpJM7-lP1P1C_WqlBIdget5DS77way_zaNsEmUq4dBTiNpZXYUyJ9LM8T5Vqz-Zt4P037UJ1SAXHwvji-O8RR7aZmx-1rp232eozHYaP3vDLoOUrlPwP=w500-h500-s-no-gm?authuser=0",
    title: "Third Image",
    rotation: -1,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV86dnc9x9TKp5eeI-rMZYHVYITgZUSDRPsn7VejZw-MSZMW2xAhpeDorAs6UX3MwCmomX4IpZM6Th9s7v3qFTCsU3EtS3rA7mOJYmMl01LKCRI4FPGxxTL_7Gh9GwXQVFI9e-f2-YnZIl4T2ABqiXibP=w1080-h1080-s-no-gm?authuser=0",
    title: "Fourth Image",
    rotation: 2,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV87QQxcXbkOrLrpMfPDNL311hkMBlZwcefuWB9lfcvRDEQog3kntHhpGiLAqbeaKFGUY8PCJV2AE6hmOn53vDdtbI0YpcZ1zua67wOuwBc6jSB21H0D36JVpp8ceQmyOxofvls04DaFL6UuOICP2i2ON=w500-h500-s-no-gm?authuser=0",
    title: "Fifth Image",
    rotation: -3,
  },
];

const WelcomeImageRow = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", overflowX: "hidden", p: 3 }}>
      {images.map((image, index) => (
        <Box key={index} sx={{ mx: 2, flexShrink: 0 }}>
            <CardMedia
              component="img"
              width="250px"
              height="300px"
              image={image.src}
              alt={image.title}
              sx={{
                objectFit: "contain",
                borderRadius: "16px",
                boxShadow: 3,
                width: "auto",
                transform: `rotate(${image.rotation}deg)`,
              }}
            />
        </Box>
      ))}
    </Box>
  );
};

export default WelcomeImageRow;
