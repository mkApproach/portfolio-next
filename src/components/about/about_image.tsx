import { CardMedia } from "@mui/material";

const AboutImage = () => {
  return (
    <div style={{ padding: "50px 100px" }}>
      <CardMedia
        component="img"
        width="450px"
        height="450px"
        image="https://lh3.googleusercontent.com/pw/ABLVV860bGEKHq9R_yOuWGS7tIFBXOzC0U4wCBVdG9-XmPI6GigqWc8pkil1cN1wq82ZIZ98yUkDx_R9X5weVSiRg-FrOMG6Ih9JsZCDfA9HEj6H7B1z5b_MBAb7OnTqkfHe33-hLrAPbCjX3X4DUzySvCl8=w400-h400-s-no-gm?authuser=0"
        alt="プロフィール"
        sx={{
          borderRadius: "16px",
          boxShadow: 3,
          width: "auto",
          transform: "rotate(-5deg)",
        }}
      />
      </div>
  );
};

export default AboutImage;