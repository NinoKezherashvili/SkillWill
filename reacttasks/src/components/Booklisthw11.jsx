import Card from "./Cardhw11";

const data = [
  {
    id: 1,
    title: "Harry Potter",
    image:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/56O6HIUABBP5LOVYPIS2KFMPHY.jpg",
    description: "Fantasy Book",
    characters: ["Harry Potter", "Hermione Granger", "Ronnie Wissley"],
  },
];

const CardList = () => {
  function action(title, description) {
    console.log(`${title} ${description}`);
  }
  return (
    <div className="card-list">
      {data.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
          characters={card.characters}
          action={action}
        />
      ))}
    </div>
  );
};

export default CardList;
