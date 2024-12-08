import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { Food } from "../../../shared/types/foods";

export default function ExpiredFoodList({
  expiredFoodList = [],
}: {
  expiredFoodList: Food[];
}) {
  let Title = `소비기한이 지난 상품`;
  if (expiredFoodList && expiredFoodList.length > 0) {
    Title += ` 소비기한이 지난 식품 ${expiredFoodList.length}개 존재`;
  }
  return (
    <div className="w-full h-1/3 my-10">
      <div className="flex flex-row justify-between items-center mx-2 mb-6">
        <div>{Title}</div>
        <Button
          variant="outlined"
          href="#expiredfoodlist"
          className="w-1/4 h-1/16 background-white border-black text-xs/[12px] p-2"
        >
          <Link to="/refri-list" className="no-underline text-black">
            모두 보기
          </Link>
        </Button>
      </div>
      {expiredFoodList.length > 0 && (
        <div className="flex flex-row overflow-x-auto gap-3">
          {expiredFoodList.map((food) => (
            <div key={food.food_id} className="flex flex-col gap-1">
              <div className="text-sm">{food.food_position}</div>
              <div className="text-sm overflow-x-auto">{food.food_name}</div>
            </div>
          ))}
        </div>
      )}
      {expiredFoodList.length === 0 && (
        <Card variant="outlined" className="w-full h-1/2 p-4">
          소비기한이 지난 상품이 없습니다.
        </Card>
      )}
    </div>
  );
}
