// შექმენი კომპონენტი, რომელიც გამოაჩენს
// წიგნის სურათს, წიგნის სათაურს, მოკლე
// აღწერას, პერსონაჟების სახელებს
// (შეიძლება იყოს ბევრი)
// ● ინფორმაცია უნდა გადაეწოდოს გარედან
// პარამეტრების სახით, სურათის
// შემთხვევაში - ლინკი. ვიზუალი, როგორიც
// გსურს
// ამავე კომპონენტში გამოაჩინე ღილაკი.
// ღილაკზე დაჭერით უნდა გამოიძახებოდეს
// ფუნქცია, რომელიც გადაეწოდება
// კომპონენტს პარამეტრად
// ● ფუნქცია უნდა ბეჭდავდეს შესაფერისი
// წიგნის სათაურს და პერსონაჟებს,
// ბეჭდვისთვის გამოიყენე console.log()

const Card = ({ id, title, description, image, characters, action }) => {
  return (
    <div className="card" id={id}>
      <h1 className="card-title"> {title} </h1>
      <p className="card-desc"> {description} </p>
      <ul>
        {characters.map((character, index) => (
          <li key={index}> {character}</li>
        ))}
      </ul>
      <div className="img-box">
        <img src={image} alt={title} width={"300px"} />
      </div>
      <button onClick={() => action(title, characters)} className="btn">
        button
      </button>
    </div>
  );
};

export default Card;
