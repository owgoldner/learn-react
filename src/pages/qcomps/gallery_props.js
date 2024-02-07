const person1 = {
  name: "Maria Skłodowska-Curie",
  imageId: "szV5sdG",
  profession: "physicist and chemist",
  awards: ["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"],
  discovery: "polonium (element)"
}

const person2 = {
  name: "Katsuko Saruhashi",
  imageId: "YfeOqp2",
  profession: "geochemist",
  awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
  discovery: "a method for measuring carbon dioxide in seawater"
}

function Avatar({person, size=100}) {
  return (
    <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Profile({person}) {
  return (
    <section className="profile">
        <h2>{person.name}</h2>
        <Avatar
          person={person}
          size={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awards.length} </b>
            ({person.awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovery}
          </li>
        </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={person1} />
      <Profile
        person={person2} />
    </div>
  );
}

