import { useFetcher } from "react-router-dom";
import Title from "../../../features/sign/ui/Title";

import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";

export default function Signup() {
  const fetcher = useFetcher();
  return (
    <Box className="p-4">
      <Title />
      <fetcher.Form method="post" className="flex flex-col space-y-4">
        <FormControl fullWidth>
          <InputLabel htmlFor="name-input">이름</InputLabel>
          <OutlinedInput id="name-input" placeholder="홍길동" label="Name" />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="email-input">이메일</InputLabel>
          <OutlinedInput
            id="email-input"
            placeholder="Your-email@gmail.com"
            label="Email"
          />
        </FormControl>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          시작하기
        </Button>
      </fetcher.Form>
    </Box>
  );
}
