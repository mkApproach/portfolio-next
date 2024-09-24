import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import ConvertArticlePublishedAtDate from "./article_published_at_date";
import { Box } from "@mui/material";

interface ArticleItemProps {
  id: number;
  path: string;
  emoji: string;
  title: string;
  published_at: string;
  liked_count: number;
}

const CustomArticleItemCardBox = styled(Box)(({ theme }) => ({
  padding: "25px",
  backgroundColor: theme.palette.mode === "dark" ? "#252529" : "white",
  border:
    theme.palette.mode === "dark" ? "solid grey 0.5px" : "solid #DCDCDC 0.5px",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0px 5px 5px grey[900]"
      : "0px 5px 5px grey[200]",
  borderRadius: "20px",
}));

const CustomArticleItemDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "grey" : "#DCDCDC",
  borderLeftWidth: "1px",
  marginRight: "13px",
}));

const CustomArticleItemTitle = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
  fontSize: "15px",
}));

const CustomArticleItemLikeCount = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
  textAlign: "left",
  fontSize: 15,
  paddingBottom: 40,
}));

const CustomArticleReadMore = styled("a")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  fontSize: 15,
  color: "#2CD4BF", // 通常状態の色
  textDecoration: "none",
  "&:link": {
    color: "#2CD4BF", // 未訪問リンクの色
  },
  "&:visited": {
    color: "#2CD4BF", // 訪問済みリンクの色
  },
  "&:hover": {
    color: "#2CD4BF",
  },
  "&:active": {
    color: "#2CD4BF",
  },
}));

function ArticleItemCard(props: ArticleItemProps) {
  return (
    <CustomArticleItemCardBox>
      <div style={{ display: "flex", paddingBottom: "10px" }}>
        <CustomArticleItemDivider orientation="vertical" flexItem />
        <ConvertArticlePublishedAtDate convertDate={props.published_at} />
      </div>
      <CustomArticleItemTitle>
        {props.emoji} {props.title}
      </CustomArticleItemTitle>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CustomArticleItemLikeCount
          style={{ paddingTop: "10px", paddingBottom: "0px", fontSize: "13px" }}
        >
          <span style={{ fontSize: "15px" }}>{props.liked_count}</span> likes
        </CustomArticleItemLikeCount>
        <CustomArticleReadMore
          href={`https://zenn.dev/${props.path}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ paddingTop: "10px" }}
        >
          <div>Read More &nbsp; &gt;</div>
        </CustomArticleReadMore>
      </div>
    </CustomArticleItemCardBox>
  );
}

export default ArticleItemCard;
