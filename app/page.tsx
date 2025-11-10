const alphabet = [
  {
    letter: "A",
    animal: "Alligator",
    line: "A is for Alligator, snapping by the shore."
  },
  {
    letter: "B",
    animal: "Bear",
    line: "B is for Bear, who loves to roar and snore."
  },
  {
    letter: "C",
    animal: "Cat",
    line: "C is for Cat, who purrs in the sun."
  },
  {
    letter: "D",
    animal: "Dolphin",
    line: "D is for Dolphin, who leaps just for fun."
  },
  {
    letter: "E",
    animal: "Elephant",
    line: "E is for Elephant, big and gray."
  },
  {
    letter: "F",
    animal: "Fox",
    line: "F is for Fox, who slips away."
  },
  {
    letter: "G",
    animal: "Giraffe",
    line: "G is for Giraffe, tall and neat."
  },
  {
    letter: "H",
    animal: "Hippo",
    line: "H is for Hippo, with muddy feet."
  },
  {
    letter: "I",
    animal: "Iguana",
    line: "I is for Iguana, basking all day."
  },
  {
    letter: "J",
    animal: "Jaguar",
    line: "J is for Jaguar, sleek and gray."
  },
  {
    letter: "K",
    animal: "Kangaroo",
    line: "K is for Kangaroo, hopping so high."
  },
  {
    letter: "L",
    animal: "Lion",
    line: "L is for Lion, king of the sky."
  },
  {
    letter: "M",
    animal: "Monkey",
    line: "M is for Monkey, swinging with glee."
  },
  {
    letter: "N",
    animal: "Narwhal",
    line: "N is for Narwhal, horn in the sea."
  },
  {
    letter: "O",
    animal: "Owl",
    line: "O is for Owl, who hoots at night."
  },
  {
    letter: "P",
    animal: "Penguin",
    line: "P is for Penguin, dressed in white."
  },
  {
    letter: "Q",
    animal: "Quokka",
    line: "Q is for Quokka, smiling bright."
  },
  {
    letter: "R",
    animal: "Rabbit",
    line: "R is for Rabbit, quick in flight."
  },
  {
    letter: "S",
    animal: "Snake",
    line: "S is for Snake, who slithers low."
  },
  {
    letter: "T",
    animal: "Tiger",
    line: "T is for Tiger, with stripes that glow."
  },
  {
    letter: "U",
    animal: "Unicornfish",
    line: "U is for Unicornfish, shimmering below."
  },
  {
    letter: "V",
    animal: "Vole",
    line: "V is for Vole, peeking just so."
  },
  {
    letter: "W",
    animal: "Whale",
    line: "W is for Whale, singing deep and slow."
  },
  {
    letter: "X",
    animal: "X-ray Tetra",
    line: "X is for X-ray Tetra, glowing with a show."
  },
  {
    letter: "Y",
    animal: "Yak",
    line: "Y is for Yak, with fluffy fur aglow."
  },
  {
    letter: "Z",
    animal: "Zebra",
    line: "Z is for Zebra, with stripes in a row."
  }
];

const palette = [
  "#FF5C8A",
  "#77D970",
  "#68D8D6",
  "#FDB827",
  "#845EC2",
  "#FF9671",
  "#00C9A7"
];

export default function HomePage() {
  return (
    <main className="app-shell" role="main" aria-labelledby="alphabet-title">
      <header className="app-header">
        <h1 id="alphabet-title" className="app-title">
          Animal Alphabet Adventure
        </h1>
        <p className="app-subtitle">
          A playful rhyme from A to Z, where each letter meets a marvelous animal
          friend ready to leap from the page.
        </p>
      </header>

      <section
        className="alphabet-grid"
        aria-label="Alphabet cards from A to Z with animal rhymes"
      >
        {alphabet.map((item, index) => {
          const color = palette[index % palette.length];
          return (
            <article
              key={item.letter}
              className="letter-card"
              style={{ borderColor: `${color}55`, boxShadow: `0 14px 28px ${color}33` }}
              tabIndex={0}
              aria-labelledby={`letter-${item.letter}`}
              aria-describedby={`line-${item.letter}`}
            >
              <span
                className="letter-badge"
                style={{
                  background: `linear-gradient(160deg, ${color}, ${color}cc)`
                }}
              >
                {item.letter}
              </span>
              <h2 id={`letter-${item.letter}`} className="animal-name">
                {item.animal}
              </h2>
              <p id={`line-${item.letter}`} className="animal-line">
                {item.line}
              </p>
            </article>
          );
        })}
      </section>

      <p className="tagline">
        Sing along, clap your hands, and journey through the alphabet with animal
        pals from land, sky, and sea.
      </p>
    </main>
  );
}
