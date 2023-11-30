import { useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Giga",
    age: "27",
  },
  {
    id: 2,
    name: "Nino",
    age: "25",
  },
  {
    id: 3,
    name: "Salo",
    age: "28",
  },
];
const ParamPage = () => {
  const param = useParams();

  const user = data.find((user) => Number(user.id) === Number(param.id));
  console.log(user);
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h2>Param Route (Dynamic)</h2>
    </div>
  );
};
export default ParamPage;
