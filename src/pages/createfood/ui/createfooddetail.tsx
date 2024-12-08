import { useFetcher } from "react-router-dom";

import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

export default function CreateFoodDetail() {
  const fetcher = useFetcher();
  const positions = ["냉장실", "냉동실", "실온"];
  return (
    <Box className="flex flex-col min-h-screen p-4 mt-32">
      <fetcher.Form method="post" className="flex flex-col space-y-4">
        <FormControl fullWidth>
          <InputLabel htmlFor="name-input">이름</InputLabel>
          <OutlinedInput id="name-input" placeholder="사과" label="Name" />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="expiredDate-input">소비 기한</InputLabel>
          <OutlinedInput
            id="expiredDate-input"
            placeholder="5일"
            label="Expired Date"
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="position-input">보관 위치</InputLabel>
          <Select id="position-input">
            {positions.map((position) => (
              <MenuItem key={position} value={position}>
                {position}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="name-input">메모</InputLabel>
          <OutlinedInput
            id="name-input"
            placeholder="내일 아침에 먹으려고 산 사과"
            label="Name"
          />
        </FormControl>
        <div className="flex flex-row justify-between gap-4 my-20">
          <Button
            variant="contained"
            sx={{
              flex: 1,
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            등록하기
          </Button>
          <Button
            variant="contained"
            sx={{
              flex: 1,
              backgroundColor: "#ff0000",
              color: "white",
              "&:hover": {
                backgroundColor: "#cc0000",
              },
            }}
          >
            취소하기
          </Button>
        </div>
      </fetcher.Form>
    </Box>
  );
}
