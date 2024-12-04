import React, { useState } from "react";

export default function ExpiredFoodList() {
  const [expiredFoodList, setExpiredFoodList] = useState([]);
  return (
    <div>
      <div>소비기한이 지난 상품</div>
      <Link to="/expiredfoodlist">더보기</Link>
    </div>
  );
}
