import { styled } from "@mui/material/styles";

interface AboutSnsLinkProps {
  label: string;
  icon: React.ReactNode;
  target: string;
}

const CustomLink = styled("a")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529", // 通常状態の色
  textDecoration: "none",
  "&:link": {
    color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529", // 未訪問リンクの色
  },
  "&:visited": {
    color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529", // 訪問済みリンクの色
  },
  "&:hover": {
    color: "#2CD4BF",
  },
  "&:active": {
    color: "#2CD4BF",
  },
}));

const AboutSnsLink = (props: AboutSnsLinkProps) => {
  return (
    <CustomLink href={props.target} target="_blank">
      <div style={{padding: "10px"}}>{props.icon}</div>
      <div style={{padding: "10px"}}>{props.label}</div>
    </CustomLink>
  );
};

export default AboutSnsLink;
