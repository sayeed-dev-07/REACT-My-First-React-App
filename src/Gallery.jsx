function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}
function Profile({Scientist}){
    return (
        <section>
        <h2>{}</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
        </section>
    )
}

const Scientists = {
     person1 : {
        name : 'Maria Skłodowska-Curie',
        profession : 'physicist and chemist',
        awardsCount : 4,
        awards : {
            award1 : 'Nobel Prize in Physics',
            award2 : 'Nobel Prize in Chemistry',
            award3 : 'Davy Medal',
            award4 : 'Matteucci Medal'
        },
        discoverd :'polonium (chemical element)',
        imgID: 'szV5sdG'
     },
     person2 : {
        name : 'Katsuko Saruhashi',
        profession : 'geochemist',
        awardsCount : 2,
        awards : {
            award1 : 'Miyake Prize for geochemistry',
            award2 : 'Tanaka Prize'
        },
        discoverd :'a method for measuring carbon dioxide in seawater',
        imgID: 'YfeOqp2'
     }
}

export default function Gallery() {
  return (
    <div>
      {Scientists.map(Scientist => {
        
      })}
    </div>
  );
}
