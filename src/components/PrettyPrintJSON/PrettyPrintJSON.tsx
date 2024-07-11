import './prettyPrintJSON.css';

interface Props {
  jsonData: { [key: string]: string }[] | { [key: string]: string };
}
const PrettyPrintJSON = ({ jsonData }: Props) => {
  const prettyJSON = JSON.stringify(jsonData, null, 2);

  return (
    <pre>
      <code>{prettyJSON}</code>
    </pre>
  );
};

export default PrettyPrintJSON;
