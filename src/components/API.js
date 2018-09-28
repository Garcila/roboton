const API_URL = 'http://somethingsomething';

export async function getRobots() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function getRobot(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

//until back end is running
export const DATA = [
  {
    id: 1,
    name: 'one',
    description: 'one description',
    img: 'https://i.imgur.com/eTGfZd1.png',
    imageCaption: 'to be determined'
  },
  {
    id: 2,
    name: 'two',
    description: 'two description',
    img: 'https://i.imgur.com/gjQ1E5U.jpg',
    imageCaption: 'to be determined'
  },
  {
    id: 3,
    name: 'three',
    description: 'three description',
    img: 'https://i.imgur.com/ZWKYvRB.jpg',
    imageCaption: 'to be determined'
  },
  {
    id: 4,
    name: 'four',
    description: 'four description',
    img: 'https://i.imgur.com/06ZGP1J.jpg',
    imageCaption: 'to be determined'
  },
  {
    id: 5,
    name: 'five',
    description: 'five description',
    img: 'https://i.imgur.com/4Vm5HXf.png',
    imageCaption: 'to be determined'
  }
];
