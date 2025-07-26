export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  coverImage: string;
  rating: number;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'The Whispers of the Ancient Forest',
    author: 'Elara Vance',
    genre: 'Fantasy',
    description: 'A young sorceress discovers a hidden power within an enchanted forest, a power that could either save her kingdom or plunge it into eternal darkness. She must learn to control it before an ancient evil awakens.',
    coverImage: 'https://placehold.co/300x450.png',
    rating: 4.5,
  },
  {
    id: '2',
    title: 'Project Chimera',
    author: 'Jaxson Reed',
    genre: 'Sci-Fi',
    description: 'In a dystopian future, a rogue scientist creates a bio-engineered soldier, Project Chimera. But when the soldier develops a conscience, it escapes the lab, hunted by the very corporation that created it.',
    coverImage: 'https://placehold.co/300x450.png',
    rating: 4.2,
  },
  {
    id: '3',
    title: 'The Last Juror',
    author: 'Corbin Hayes',
    genre: 'Mystery',
    description: 'A small town is rocked by a controversial trial. Years later, the jurors from the trial start dying one by one. A young journalist must uncover the truth before she becomes the next victim.',
    coverImage: 'https://placehold.co/300x450.png',
    rating: 4.8,
  },
  {
    id: '4',
    title: 'Echoes of a Forgotten Love',
    author: 'Amelia Rose',
    genre: 'Romance',
    description: 'A historian discovers a series of love letters from the 19th century. As she delves into the past, she finds uncanny parallels to her own life, forcing her to confront her own fears about love and loss.',
    coverImage: 'https://placehold.co/300x450.png',
    rating: 4.6,
  },
    {
    id: '5',
    title: 'Shadows over Crestwood',
    author: 'Helena Blackwood',
    genre: 'Horror',
    description: 'A family moves into a colonial mansion in Crestwood, only to find that the house is haunted by a malevolent spirit. As the paranormal activity escalates, they must fight for their lives and their sanity.',
    coverImage: 'https://placehold.co/300x450.png',
    rating: 4.3,
  },
  {
    id: '6',
    title: 'The Gilded Cage',
    author: 'Isabella Dubois',
    genre: 'Historical Fiction',
    description: 'Set in the roaring twenties, a young woman from a wealthy family feels trapped by societal expectations. She risks everything to pursue her dream of becoming a jazz singer in a world that wants to keep her in a gilded cage.',
    coverImage: 'https://placehold.co/300x450.png',
    rating: 4.7,
  },
  {
    id: '7',
    title: 'Beyond the Azure Sky',
    author: 'Kaelen Stratos',
    genre: 'Adventure',
    description: 'An intrepid explorer and her crew embark on a perilous journey in an airship to discover a legendary floating city. They face sky pirates, treacherous storms, and mythical beasts in their quest for the unknown.',
    coverImage: 'https://placehold.co/300x450.png',
    rating: 4.4,
  },
    {
    id: '8',
    title: 'The Art of Deception',
    author: 'Silas Croft',
    genre: 'Thriller',
    description: 'An art forger is forced by a dangerous crime syndicate to create a perfect replica of a priceless masterpiece. He must outwit both the criminals and the authorities to save himself and the woman he loves.',
    coverImage: 'https://placehold.co/300x450.png',
    rating: 4.9,
  },
];
