import { styled } from "@mui/material/styles";
import dayjs from "dayjs";

type ArticlePublishedAtDateProps = {
  convertDate: string | number | Date;
};

const CustomArticlePublishedAtDateProps = styled("time")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "grey" : "#A1A1AA",
  fontSize: "13px",
  textAlign: "left",
//   paddingBottom: 40,
}));

export default function ConvertArticlePublishedAtDate({
  convertDate,
}: ArticlePublishedAtDateProps) {
  const publishedAt = dayjs(convertDate).format("YYYY/MM/DD");

  return (
    <CustomArticlePublishedAtDateProps dateTime={convertDate.toString()}>
      {publishedAt}
    </CustomArticlePublishedAtDateProps>
  );
}
