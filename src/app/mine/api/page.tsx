'use client'
import { useEffect, useState } from "react";
import { SkillLanguageProficiency } from "@prisma/client";
import SubTitle from "@/components/sub_title";
import TableItem from "@/components/table_item";

const SkillsLanguages = () => {
  const [languages, setLanguages] = useState<SkillLanguageProficiency[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSkillsLanguages = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLanguages(data);
    } catch (error) {
      console.error("Failed to fetch about profiles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkillsLanguages();
  }, []);

  return (
    <div style={{ paddingBottom: 40 }}>
      <SubTitle text={"Languages"} />
      <table
        style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
      >
        {languages.map((language) => (
          <div key={language.id}>
            <TableItem
              keyValue={language.name}
              Value={
                " ★ ".repeat(language.proficiency) +
                " ☆ ".repeat(5 - language.proficiency)
              }
              paddingBetween={230}
            />
          </div>
        ))}
      </table>
    </div>
  );
};

export default SkillsLanguages;