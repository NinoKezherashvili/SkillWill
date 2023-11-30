import { useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    fact: "Gandalf is one of the five Istari, a group of wizards sent to guide and assist the Free Peoples of Middle-earth in their struggle against the dark powers.",
  },
  {
    id: 2,
    fact: "Gandalf is known by different names in Middle-earth. His original name in Valinor is Olórin. He is also called Mithrandir by the Elves, Gandalf by Men, Tharkûn by the Dwarves, and Incánus by the people of Harad.",
  },

  {
    id: 3,
    fact: "Gandalf is initially known as Gandalf the Grey, wearing grey robes and a wide-brimmed hat. Later in The Lord of the Rings, he returns as Gandalf the White after his battle with the Balrog in Moria. His return ",
  },
];

const FactCard = () => {
  const param = useParams();

  const fact = data.find((fact) => Number(fact.id) === Number(param.id));

  if (!fact) {
    return <div>Fact not found</div>;
  }
  return (
    <div>
      <p>{fact.fact}</p>
    </div>
  );
};
export default FactCard;
