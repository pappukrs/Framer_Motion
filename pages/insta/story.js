import React from 'react';
import Stories from 'react-insta-stories';

const Story = () => {
  const stories = [
    {
      url: 'https://img.restaurantguru.com/c7b4-Restaurant-Kailasam-Toddy-Shop-food.jpg',  // Image URL
      header: {
        heading: 'John Doe',
        subheading: 'John’s Story',
        profileImage: 'https://img.restaurantguru.com/c7b4-Restaurant-Kailasam-Toddy-Shop-food.jpg',
      },
    },
    {
      url: 'https://img.restaurantguru.com/c904-Restaurant-Kailasam-Toddy-Shop-facade.jpg',  // Video URL
      type: 'video',  // Type can be 'video' or 'image'
      header: {
        heading: 'Jane Doe',
        subheading: 'Jane’s Story',
        profileImage: 'https://img.restaurantguru.com/c904-Restaurant-Kailasam-Toddy-Shop-facade.jpg',
      },
    },
  ];

  return (
    <div>
      <Stories stories={stories} />
    </div>
  );
};

export default Story;
