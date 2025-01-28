import HomeCard from "../Atoms/HomeCard";

export default function Home() {
  const homeCardGroup = [
    { color: "primary", title: "Arrivals", link:"Arrivals", buttonText: 1, cardText: "this is how many people will be showing up today" },
    { color: "success", title: "In House", link:"In-house", buttonText: 10, cardText: "this is how many people are here now" },
    { color: "danger", title: "Departures", link:"Departures", buttonText: 3, cardText: "this is how many people are leaving today" },
    { color: "dark", title: "Availability", link:"Availability", buttonText: 150, cardText: "this is how many vacant rooms are available" },
  ];

  return (
    <main className="p-0">
      <div className="py-3 container border text-center m-auto mt-3">
        <div className="row gx-3 row-cols-auto">
          {homeCardGroup.map(({ color, title, link, buttonText, cardText }, cardIndex) => (
            <HomeCard key={cardIndex} color={color} title={title} link={link} buttonText={buttonText} cardText={cardText} />
          ))}
        </div>
      </div>
    </main>
  );
}
