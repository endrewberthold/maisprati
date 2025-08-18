export function getImageUrl(person, size= 's', borderRadius ){
    return (
        'https://i.imgur.com/' +
            person.imageId +
            size +
            '.jpg'
    );
}