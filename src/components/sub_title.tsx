import { styled } from "@mui/material/styles";

interface CustomSubTitleProps {
  text: string;
}

const StyledCustomSubTitle = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
  textAlign: "left",
  fontFamily: "serif",
  fontSize: 15,
  paddingBottom: 40,
}));

function CustomSubTitle(props: CustomSubTitleProps) {
  return <StyledCustomSubTitle>{props.text}</StyledCustomSubTitle>;
}

export default CustomSubTitle;
