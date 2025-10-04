export function getImageUrl(person) {
  
  if (person.imageId) {
      
      return 'https://i.imgur.com/' + person.imageId + '.jpg';
      //return'https://via.placeholder.com/150';
  }
  return 'https://via.placeholder.com/150';
}