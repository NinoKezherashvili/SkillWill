import photo from "../images/lord-of-the-rings-gandalf-i161602.jpg";

const CharacterCard = () => {
  return (
    <div className="characterContainer">
      <h1>Gandalf</h1>
      <img src={photo} alt="Gandalf" />
    </div>
  );
};

export default CharacterCard;
