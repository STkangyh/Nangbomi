import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

export default function Camera() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (err) {
        console.error("카메라 접근이 거부되었습니다:", err);
        setError("카메라 접근이 거부되었습니다.");
      }
    };

    getCameraStream();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  if (error) {
    return (
      <Box className="flex items-center justify-center min-h-screen">
        {error}
      </Box>
    );
  }

  return (
    <Box className="flex items-center justify-center min-h-screen">
      <video ref={videoRef} className="w-full max-w-md" />
    </Box>
  );
}
