function InstagramPost(authorHandle, content, imageUrl, views, likes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageUrl = imageUrl;
    this.views = views;
    this.likes = likes;
  }

const post1 = new InstagramPost("Faith", "Great day at the beach", "https://example.com/beach.jpg", 1000, 50);
const post2 = new InstagramPost("Lola", "Delicious food at the restaurant", "https://example.com/restaurant.jpg", 500, 20);


console.log(post1);
console.log(post2);

//Answer Number 2
//  InstagramPost {
//     authorHandle: 'Faith',
//     content: 'Great day at the beach',
//     imageUrl: 'https://example.com/beach.jpg',
//     views: 1000,
//     likes: 50
//   }
//   InstagramPost {
//     authorHandle: 'Lola',
//     content: 'Delicious food at the restaurant',
//     imageUrl: 'https://example.com/restaurant.jpg',
//     views: 500,
//     likes: 20
//   }

function createJambScores(eng, govt, lit, crk) {
    return {
      ENG: eng,
      GOVT: govt,
      LIT: lit,
      CRK: crk
    };
  }
  
  function createPerson(name, age, location, jambScores) {
    return {
      name: name,
      age: age,
      location: location,
      jamb_scores: jambScores
    };
  }
  

  const musaJambScores = createJambScores(70, 85, 82, 94);

  const musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State", musaJambScores);

  console.log(musa);
//Answer 3(b)
//   {
//     name: 'Musa Dawodu',
//     age: 19,
//     location: 'Lekki, Lagos State',
//     jamb_scores: { ENG: 70, GOVT: 85, LIT: 82, CRK: 94 }
//   }



//ANswer 4
//Using the spread operator
// const originalObject = { a: 1, b: 2 };
// const clonedObject = { ...originalObject };

//Using Object.assign()
// const originalObject = { a: 1, b: 2 };
// const clonedObject = Object.assign({}, originalObject);

//Using JSON.parse() and JSON.stringify()
// const originalObject = { a: 1, b: 2 };
// const clonedObject = JSON.parse(JSON.stringify(originalObject));

 //Using the Object.create() method
// const originalObject = { a: 1, b: 2 };
// const clonedObject = Object.create(originalObject);


//Using a for...in loop
// const originalObject = { a: 1, b: 2 };
// const clonedObject = {};
// for (let key in originalObject) {
//   clonedObject[key] = originalObject[key];
// }



//Answer 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }

for (let party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
  }
  
//   Omoyele Sowore is the presidential candidate of AAC
// Christopher Imumolen is the presidential candidate of ACCORD
// Bola Ahmed Tinubu is the presidential candidate of APC
// Peter Obi is the presidential candidate of LP
// Rabiu Kwankwaso is the presidential candidate of NNPP
// Atiku Abubakar is the presidential candidate of PDP
