import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";

const Footer = () => {
  const [isMobile] = useMediaQuery("(max-width: 1280px)");
  return (
    <>
      <hr />
      <Container as="footer" role="contentinfo" py={{ base: "2", md: "2" }}>
        <Stack spacing={{ base: isMobile ? "0" : "-10", md: "-10" }}>
          <Stack justify="space-between" direction="column" align="flex-end">
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/dante-lentsoe-2b6566148/"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://github.com/dantelentsoe"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />

              <IconButton
                as="a"
                href="https://www.buymeacoffee.com/dantelentsoe "
                aria-label="BuyMeACoffe"
                icon={<BiDonateHeart fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>

          <Text fontSize="sm" color="subtle" py={{ base: "2", md: "2" }}>
            &copy; {new Date().getFullYear()} Developed by{" "}
            <Link
              href="https://dantelentsoe.com"
              target="_blank"
              color={"teal.500"}>
              Dante Lentsoe
            </Link>
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
