import { render, screen } from "@testing-library/react";
import ExpiredFoodList from "./expiredFoodList";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

test("renders title with no expired foods", () => {
  renderWithRouter(<ExpiredFoodList expiredFoodList={[]} />);
  expect(screen.getByText("소비기한이 지난 상품")).toBeInTheDocument();
  expect(
    screen.getByText("소비기한이 지난 상품이 없습니다.")
  ).toBeInTheDocument();
});

test("renders title with expired foods", () => {
  const expiredFoods = [
    { food_id: 1, food_position: "Fridge", food_name: "Milk" },
    { food_id: 2, food_position: "Pantry", food_name: "Bread" },
  ];
  renderWithRouter(<ExpiredFoodList expiredFoodList={expiredFoods} />);
  expect(
    screen.getByText("소비기한이 지난 상품 소비기한이 지난 식품 2개 존재")
  ).toBeInTheDocument();
  expect(screen.getByText("Fridge")).toBeInTheDocument();
  expect(screen.getByText("Milk")).toBeInTheDocument();
  expect(screen.getByText("Pantry")).toBeInTheDocument();
  expect(screen.getByText("Bread")).toBeInTheDocument();
});
