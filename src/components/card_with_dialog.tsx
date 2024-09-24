import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 500,
//     margin: 30,
//   },
//   media: {
//     height: 350,
//   },
//   dialoigMedia: {
//     height: 400,
//     objectFit: "fill",
//   },
//   dialogPaper: {
//     minWidth: 500,
//     maxWidth: 700,
//     borderRadius: "15px",
//     padding: theme.spacing(2),
//   },
//   dialogTitle: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingBottom: 0,
//   },
//   closeButton: {
//     position: "absolute",
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
//   subtitle: {
//     fontFamily: "Chogokuboso-Gothic",
//     fontSize: "0.8rem",
//     borderBottom: "1px solid rgba(32, 36, 53, 0.741)",
//     textDecorationColor: "#FFFFFF",
//     paddingBottom: "0.8rem",
//     letterSpacing: "0.2rem",
//   },
// }));

const CustomDialog = styled(Dialog)(({ theme }) => ({
  minWidth: 500,
  // maxWidth: 700,
  borderRadius: "30px",
  padding: theme.spacing(2),
}));

const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: 0,
}));

const CustomCloseIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.grey[500],
}));

const CustomSubtitle = styled("span")(({ theme }) => ({
  fontFamily: "Chogokuboso-Gothic",
  fontSize: "0.8rem",
  borderBottom: "1px solid rgba(32, 36, 53, 0.741)",
  textDecorationColor: "#FFFFFF",
  paddingBottom: "0.8rem",
  letterSpacing: "0.2rem",
}));

const CustomContentTypography = styled(Typography)(({ theme }) => ({
  paddingTop: 20,
  paddingBottom: 40,
  fontSize: 18,
}));

interface CardProps {
  imageSrc: string;
  title: string;
  attribute: string;
  firstContentTitle: string;
  firstContent: string;
  secondContentTitle: string;
  secondContent: string;
  thirdContentTitle?: string;
  thirdContent?: string;
  fourthContentTitle?: string;
  fourthContent?: any;
  fifthContent?: any;
}

function CardWithDialog({
  imageSrc,
  title,
  attribute,
  firstContentTitle,
  firstContent,
  secondContentTitle,
  secondContent,
  thirdContentTitle,
  thirdContent,
  fourthContentTitle,
  fourthContent,
  fifthContent,
}: CardProps) {
  // const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ alignContent: "center" }}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          sx={{ height: 350 }}
          component="img"
          src={imageSrc}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {attribute}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CustomDialog open={open} onClose={handleClose}>
        <CustomDialogTitle>
          <Typography sx={{ paddingBottom: "15px" }} variant="h5">
            {title}
          </Typography>
          <CustomCloseIconButton onClick={handleClose}>
            <CloseIcon />
          </CustomCloseIconButton>
        </CustomDialogTitle>
        <DialogContent>
          <CardMedia
            sx={{
              height: 400,
              objectFit: "fill",
            }}
            image={imageSrc}
            title={title}
          />
          <Typography color="textPrimary" gutterBottom>
            <CustomSubtitle>{firstContentTitle}</CustomSubtitle>
          </Typography>
          <CustomContentTypography
            variant="body1"
            color="textSecondary"
          >
            {firstContent}
          </CustomContentTypography>
          <Typography color="textPrimary" gutterBottom>
            <CustomSubtitle>{secondContentTitle}</CustomSubtitle>
          </Typography>
          <CustomContentTypography
            variant="body1"
            color="textSecondary"
          >
            {secondContent}
          </CustomContentTypography>
          <Typography color="textPrimary" gutterBottom>
            <CustomSubtitle>{thirdContentTitle}</CustomSubtitle>
          </Typography>
          <CustomContentTypography
            variant="body1"
            color="textSecondary"
          >
            {thirdContent}
          </CustomContentTypography>
          <Typography color="textPrimary" gutterBottom>
            <CustomSubtitle>{fourthContentTitle}</CustomSubtitle>
          </Typography>
          <Typography
            sx={{ paddingTop: 20, paddingBottom: 40, fontSize: 18 }}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {fourthContent}
          </Typography>
          <CustomContentTypography
            variant="body1"
            color="textSecondary"
          >
            {fifthContent}
          </CustomContentTypography>
        </DialogContent>
        <DialogActions>
          <div />
        </DialogActions>
      </CustomDialog>
    </Card>
  );
}

export default CardWithDialog;
