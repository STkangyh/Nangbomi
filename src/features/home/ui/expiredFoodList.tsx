import React, { useState } from 'react';

export default function ExpiredFoodList() {
  const [expiredFoodList, setExpiredFoodList] = useState([]);
  return (
    <div>
      <div>
        <div>소비 기한이 지난 식품</div>
        <Link to="refri-list/:refriId">모두 보기</Link>
      </div>
      <div>
        {expiredFoodList.map((food) => {
          return (
            <div>
              <div>{food.name}</div>
              <div>{food.expiredDate}</div>
            </div>
          );
      </div>
    </div>
  );
}
