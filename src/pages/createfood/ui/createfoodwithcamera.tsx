import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useOpenCamera from "../model/useOpenCamera";

export default function CreateFoodWithCamera() {
  const navigate = useNavigate();
  const { openCamera } = useOpenCamera();
  return (
    <Box className="flex flex-col m-2">
      <div className="text-md font-bold mt-10">식품 등록하기</div>
      <div className="flex flex-col gap-10 py-40">
        <Button
          variant="contained"
          fullWidth
          className="py-3"
          sx={{
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
          onClick={openCamera}
        >
          바코드로 입력하기
        </Button>
        <Button
          variant="contained"
          fullWidth
          className="py-3"
          sx={{
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
          onClick={() => navigate("/create-detail")}
        >
          직접 입력하기
        </Button>
      </div>
    </Box>
  );
}
