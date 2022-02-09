const STATE: {
  [key: string]: {
    id: number;
    title: string;
    routeName: string;
    items: {
      id: number;
      name: string;
      imageUrl: string;
      price: number;
    }[];
  };
} = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 10,
        name: 'Blue Cap',
        imageUrl:
          'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGF0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 25,
      },
      {
        id: 11,
        name: 'Yellow Cap',
        imageUrl:
          'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        price: 30,
      },
      {
        id: 12,
        name: 'Woman Black Brim',
        imageUrl:
          'https://images.unsplash.com/photo-1583002083815-8c6305bd56a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        price: 105,
      },
      {
        id: 13,
        name: 'Man Black Brim',
        imageUrl:
          'https://images.unsplash.com/photo-1495041845204-feee5b0bda50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGhhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        price: 105,
      },
    ],
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 14,
        name: 'Nike White',
        imageUrl:
          'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        price: 220,
      },
      {
        id: 15,
        name: 'Nike Pink',
        imageUrl:
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        price: 280,
      },
      {
        id: 16,
        name: 'Puma White',
        imageUrl:
          'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price: 110,
      },
      {
        id: 17,
        name: 'Vans Red',
        imageUrl:
          'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price: 160,
      },
    ],
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Brown Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1577660002965-04865592fc60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 120,
      },
      {
        id: 20,
        name: 'Green Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 180,
      },
      {
        id: 21,
        name: 'Fancy Brown Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGphY2tldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        price: 165,
      },
    ],
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 22,
        name: 'Grey Dress',
        imageUrl:
          'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 235,
      },
      {
        id: 23,
        name: 'Yellow Body',
        imageUrl:
          'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 350,
      },
      {
        id: 24,
        name: 'Black Dress',
        imageUrl:
          'https://images.unsplash.com/photo-1599662875272-64de8289f6d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        price: 340,
      },
      {
        id: 25,
        name: 'White T-Shirt',
        imageUrl:
          'https://images.unsplash.com/photo-1590852669429-d1cd8775ea59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        price: 80,
      },
    ],
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 26,
        name: 'Skinny Blue Jeans',
        imageUrl:
          'https://images.unsplash.com/photo-1537261131936-3cdff36a1ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        price: 325,
      },
      {
        id: 27,
        name: 'Pink Sweatshirt',
        imageUrl:
          'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price: 80,
      },
      {
        id: 28,
        name: 'Black Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1516297276-0fe32eb94534?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price: 340,
      },
      {
        id: 29,
        name: 'Brown Pants',
        imageUrl:
          'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price: 103,
      },
    ],
  },
};

export default STATE;
