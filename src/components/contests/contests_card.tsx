import { CardActionArea, styled } from "@mui/material";
import Card from "@mui/material/Card";
import Link from "next/link";

interface ContestsCardProps {
  id: string;
  title: string;
  detail: string;
  point: string;
  attribute: string;
  image_path: string;
  tech: string;
  source_urls: Array<string>;
  source_image_urls: Array<string>;
}

const CustomContestsCardImageIconWrapper = styled("div")(({ theme }) => ({
  width: "65px",
  height: "65px",
  borderRadius: "50%",
  backgroundColor: theme.palette.mode === "dark" ? "#252529" : "white",
  border:
    theme.palette.mode === "dark" ? "solid grey 0.5px" : "solid #DCDCDC 0.5px",
  display: "flex",
  justifyContent: "center",
  position: "relative",
}));

const CustomContestsCardImageIcon = styled("img")(() => ({
  margin: "0 auto",
  borderRadius: "50%",
  objectFit: "revert",
  position: "absolute",
  top: "50%",
  marginTop: "-25px",
}));

const CustomContestsCardTitle = styled("p")(() => ({
  fontWeight: "bold",
  paddingTop: "15px",
  display: "block",
  textOverflow: "ellipsis",
  padding: "0",
  overflow: "hidden",
  position: "relative",
  whiteSpace: "normal",
  height: "1.8em",
  lineHeight: "1.8em",
  "-webkit-line-clamp": 2,
}));

const CustomContestsCardDetailText = styled("p")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
  display: "block",
  textOverflow: "ellipsis",
  padding: "0",
  overflow: "hidden",
  position: "relative",
  whiteSpace: "normal",
  height: "3.6em",
  lineHeight: "1.8em",
  "-webkit-line-clamp": 2,
}));

const CustomContestsReadMore = styled("a")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529", // 通常状態の色
  textDecoration: "none",
  "&:link": {
    color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
    // 未訪問リンクの色
  },
  "&:visited": {
    color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
    // 訪問済みリンクの色
  },
  "&:hover": {
    color: "#2CD4BF",
  },
  "&:active": {
    color: "#2CD4BF",
  },
}));

const CustomCardLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
}));

function ContestsCard(props: ContestsCardProps) {
  return (
    <Card sx={{ alignContent: "center", borderRadius: "20px" }}>
      <CustomCardLink
        style={{ textDecoration: "none", color: "inherit" }}
        href={{
          pathname: `/contests/${encodeURIComponent(props.id)}`,
          query: {
            id: props.id,
            title: props.title,
            detail: props.detail,
            point: props.point,
            attribute: props.attribute,
            image_path: props.image_path,
            tech: props.tech,
            source_urls: props.source_urls,
            source_image_urls: props.source_image_urls,
          },
        }}
      >
        <CardActionArea
          onClick={() => {
            console.log(props.title);
          }}
        >
          <div style={{ padding: "25px" }}>
            <CustomContestsCardImageIconWrapper>
              <CustomContestsCardImageIcon
                src={props.image_path}
                width="50px"
                height="50px"
              />
            </CustomContestsCardImageIconWrapper>
            <CustomContestsCardTitle>{props.title}</CustomContestsCardTitle>
            <CustomContestsCardDetailText>
              {props.detail}
            </CustomContestsCardDetailText>
            <CustomContestsReadMore
              href={"https://github.com/Koichi5"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>Read More &nbsp; &gt;</div>
            </CustomContestsReadMore>
          </div>
        </CardActionArea>
      </CustomCardLink>
    </Card>
  );
}

export default ContestsCard;
