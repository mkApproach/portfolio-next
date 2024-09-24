import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

const CustomDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "grey" : "#DCDCDC",
  borderLeftWidth: "1px",
  marginRight: "13px",
}));

const CustomAboutHistoryCardDate = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "grey" : "#A1A1AA",
  fontSize: "13px",
}));

const CustomAboutHistoryCardValue = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
  fontSize: "13px",
}));

interface AboutHistoryCardProps {
  date: string;
  value: string;
}

const AboutHistoryCard = (props: AboutHistoryCardProps) => {
  return (
    <div style={{ paddingBottom: "18px" }}>
      <div style={{ display: "flex", paddingBottom: "10px" }}>
        <CustomDivider orientation="vertical" flexItem />
        <CustomAboutHistoryCardDate>{props.date}</CustomAboutHistoryCardDate>
      </div>
      <CustomAboutHistoryCardValue>{props.value}</CustomAboutHistoryCardValue>
    </div>
  );
};

export default AboutHistoryCard;
