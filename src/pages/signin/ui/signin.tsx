import Title from "../../../features/sign/ui/Title";
import { Button, Box } from "@mui/material";

export default function Signin() {
  const buttonStyle = {
    backgroundColor: "#fdfdfd",
    color: "#616161",
    position: "relative",
    padding: "12px 24px",
    fontSize: "14px",
    border: "1px solid #cecece",
    boxShadow: "none",
    "& .MuiButton-startIcon": {
      width: "18px",
      height: "18px",
      position: "absolute",
      left: "16px",
      marginRight: 0,
    },
    "& .MuiButtonBase-root": {
      justifyContent: "center",
    },
    "& .MuiButton-label": {
      width: "100%",
      textAlign: "center",
    },
  };

  return (
    <Box className="p-4">
      <Title />
      <div className="flex flex-col gap-4">
        <Button
          variant="contained"
          disableElevation
          onClick={() => alert("Sign up with Google")}
          startIcon={<img src="/public/logoSVG/btn_google.svg" alt="google" />}
          sx={buttonStyle}
        >
          Sign up with Google
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={() => alert("Sign up with Naver")}
          startIcon={<img src="/public/logoSVG/btn_naver.svg" alt="naver" />}
          sx={buttonStyle}
        >
          Sign up with Naver
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={() => alert("Sign up with Kakao")}
          startIcon={<img src="/public/logoSVG/btn_kakao.svg" alt="kakao" />}
          sx={buttonStyle}
        >
          Sign up with Kakao
        </Button>
      </div>
    </Box>
  );
}
