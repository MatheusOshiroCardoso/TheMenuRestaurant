import images from './images';

const wines = [
  {
    title: 'AMUSE BOUCHE',
    
    tags: 'cucumber melon, milk snow, charred lace.',
  },
  {
    title: 'THE ISLAND',
    
    tags: 'a scallop and plants from the island placed on rocks from the shore.',
  },
  {
    title: 'BREADLESS BREAD PLATE',
    
    tags: 'no bread, savory accompaniments.',
  },
  {
    title: 'MEMORY',
    
    tags: 'marinated grilled chicken thigh, tortillas, green salsa cubes.',
  },
  {
    title: 'THE MESS',

    tags: 'roasted filet, potato confit, seasonal vegetables, beef jus, bone marrow.',
  },
];

const cocktails = [
  {
    title: 'PALATE CLEANSER',
    
    tags: 'wild bergamot and red clover tea.',
  },
  {
    title: " MAN'S FOLLY",
    
    tags: 'dungeness crab, fermented yogurt whey, dried sea lettuce, umeboshi, kelp.',
  },
  {
    title: "TYLER'S BULLSHIT",
  
    tags: 'undercooked lamb, inedible shallot-leek butter sauce, utter lack of cohesion.',
  },
  
  {
    title: 'A CHEESEBURGER',
  
    tags: 'just a well-made cheeseburger.',
  },
  {
    title: "S'MORE",
  
    tags: 'marshmallow, chocolate, graham cracker, custumers, staff, restaurant.',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Lillian Bloom',
    subtitle: 'very theatrical, but the emulsion was broken.',
  },
  {
    imgUrl: images.award01,
    title: 'Margot',
    subtitle: 'i liked the cheeseburger.',
  },
  {
    imgUrl: images.award05,
    title: 'Tyler',
    subtitle: 'talented, brilliant, incredible, amazing, show stopping, spectacular, never the same, totally unique, completely not ever been done before.',
  },
  {
    imgUrl: images.award03,
    title: "Linda Slowik (Chef's mother)",
    subtitle: '...',
  },
];

export default { wines, cocktails, awards };
