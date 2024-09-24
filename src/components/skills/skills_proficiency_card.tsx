import SkillsLanguages from "@/pages/skills/languages";
import { Card, CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";

interface SkillsProficiencyCardProps {
  skillName: string;
  skillImagePath: string;
  proficiency: number;
}

const CustomSkillsProficiencyCardImageIconWrapper = styled("div")(
  ({ theme }) => ({
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    backgroundColor: theme.palette.mode === "dark" ? "#252529" : "white",
    border:
      theme.palette.mode === "dark"
        ? "solid grey 0.5px"
        : "solid #DCDCDC 0.5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    position: "relative",
  })
);

const CustomSkillsProficiencyCardImageIcon = styled("img")(() => ({
  margin: "0 auto",
  borderRadius: "50%",
  objectFit: "revert",
  position: "absolute",
  top: "50%",
  marginTop: "-25px",
}));

const CustomSkillsProficiencyCardTitle = styled("p")(() => ({
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

const CustomSkillsProficiencyCardBar = styled("div")(() => ({
  height: "5px",
  borderRadius: "50px",
  background: "linear-gradient(90deg, rgba(44,212,191,1) 0%, rgba(166,166,166,1) 100%)",
}));

function SkillsProficiencyCard(props: SkillsProficiencyCardProps) {
  return (
    <div>
      <Card sx={{ alignContent: "center", borderRadius: "20px" }}>
        <CardActionArea
          onClick={() => {
            console.log(props.skillName);
          }}
        >
          <div style={{ padding: "25px" }}>
            <div style={{ display: "flex", alignContent: "space-between" }}>
              <CustomSkillsProficiencyCardImageIconWrapper>
                <CustomSkillsProficiencyCardImageIcon
                  src={props.skillImagePath}
                  width="50px"
                  height="50px"
                />
              </CustomSkillsProficiencyCardImageIconWrapper>
              <div style={{ width: "75%", paddingLeft: "20px" }}>
                <CustomSkillsProficiencyCardTitle>
                  {props.skillName}
                </CustomSkillsProficiencyCardTitle>
                <CustomSkillsProficiencyCardBar style={{width: `${props.proficiency / 5 * 100}%`}} />
              </div>
            </div>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default SkillsProficiencyCard;
