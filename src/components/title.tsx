import { styled } from "@mui/material/styles";

interface CustomTitleProps {
  text: string;
}

const StyledCustomTitle = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
  textAlign: "left",
  fontFamily: "serif",
  fontWeight: "bold",
  fontSize: 30,
  paddingTop: 40,
  paddingBottom: 40,
}));

function CustomTitle(props: CustomTitleProps) {
    return <StyledCustomTitle>{props.text}</StyledCustomTitle>
}

export default CustomTitle;
