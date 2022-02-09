export interface Props {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

const STATE: Props[] = [
  {
    title: 'hats',
    imageUrl:
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGF0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    id: 1,
    linkUrl: 'shop/hats',
  },
  {
    title: 'jackets',
    imageUrl:
      'https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    id: 2,
    linkUrl: 'shop/jackets',
  },
  {
    title: 'sneakers',
    imageUrl:
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    id: 3,
    linkUrl: 'shop/sneakers',
  },
  {
    title: 'womens',
    imageUrl:
      'https://images.unsplash.com/photo-1553335762-4432a3334a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens',
  },
  {
    title: 'mens',
    imageUrl:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens',
  },
];

export default STATE;
