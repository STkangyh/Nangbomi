import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EggIcon from "@mui/icons-material/Egg";

export default function NavigationButton() {
  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="contained"
        className="px-8 py-6 border border-solid border-black bg-white text-black flex items-center justify-center"
      >
        <CameraAltIcon className="mr-2" />
        <span className="flex-1 text-center">카메라로 상품 등록하기</span>
      </Button>
      <Button
        variant="contained"
        className="px-8 py-6 border border-solid border-black bg-white text-black flex items-center justify-center"
      >
        <EggIcon className="mr-2" />
        <span className="flex-1 text-center">식품 관리하기</span>
      </Button>
    </div>
  );
}
