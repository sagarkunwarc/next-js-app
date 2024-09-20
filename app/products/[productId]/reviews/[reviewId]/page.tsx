import React from 'react';


const ReviewId = ({params}: {params:{reviewId: string }}) => {
  return (
    <div>
      <h1>Hello  from  Review Id Page  for {params.reviewId}</h1>
    </div>
  );
};

export default ReviewId;