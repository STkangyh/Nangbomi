export interface Food {
  food_id: number;
  food_name: string;
  food_position: FoodPosition;
  manufactured_date: number;
  expired_date: number;
}

export enum FoodPosition {
  REFRIGERATED = "냉장",
  FROZEN = "냉동",
  ROOM_TEMPERATURE = "실온",
}
