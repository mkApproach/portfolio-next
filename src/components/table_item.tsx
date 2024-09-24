interface TableItemProps {
  keyValue: string;
  Value: any;
  paddingBetween: number;
}

function TableItem(props: TableItemProps) {
  return (
    <tr>
      <td
        style={{
          textAlign: "left",
          width: props.paddingBetween,
          height: 40,
          paddingLeft: 20,
        }}
      >
        {props.keyValue}
      </td>
      <td style={{ textAlign: "left", alignContent: "left" }}>{props.Value}</td>
    </tr>
  );
}

export default TableItem;
