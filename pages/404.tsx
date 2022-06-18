import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function NotFound() {
  const route = useRouter();
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you are looking for does not seem to exist
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, orange.400, orange.500, orange.600)"
        color="white"
        onClick={() => {
          route.push("/");
        }}
        variant="solid">
        Go to Home
      </Button>
    </Box>
  );
}
