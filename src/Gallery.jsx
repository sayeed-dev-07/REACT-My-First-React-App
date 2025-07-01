function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}
function Profile({ name, profession, awardsCount, awards, discovered, imgID }) {
  return (
    <section>
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imgID)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awardsCount} </b>
          (
            {
              awards.join(', ')
            }
          )
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}




export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name='Maria Skłodowska-Curie'
        profession='physicist and chemist'
        awardsCount='4'
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
        discovered='polonium (chemical element)'
        imgID='szV5sdG' />
      <Profile name='Katsuko Saruhashi'
        profession='geochemist'
        awardsCount='2'
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
        discovered='a method for measuring carbon dioxide in seawater'
        imgID='YfeOqp2' />
    </div>
  );
}
