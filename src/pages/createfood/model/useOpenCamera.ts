import { useNavigate } from "react-router-dom";

export default function useOpenCamera() {
  const navigate = useNavigate();

  const openCamera = () => {
    navigate("/camera");
  };

  return { openCamera };
}
