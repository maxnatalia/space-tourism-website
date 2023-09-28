import { AnimatePresence } from "framer-motion";
import { HeadingFive } from "../Heading";
import {
  Article,
  Box,
  Content,
  Image,
  ImageBox,
  Navigator,
  Num,
  Section,
  TitleWrapper,
} from "./styled";

const generateVariants = (delay: number, duration: number) => ({
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay, duration },
  },
  hidden: { opacity: 0, scale: 0.1, y: -300 },
});

interface SectionLayoutProps {
  children: React.ReactNode;
  number?: string;
  title?: string;
  src?: string;
  alt?: string;
  smaller?: boolean;
  mobileImageSize?: boolean;
  extraButton?: React.ReactNode;
  mobileReverseCol?: boolean;
  reverseRow?: boolean;
  reverseCol?: boolean;
  reverseNavCol?: boolean;
  reverseMobileNavCol?: boolean;
  reverseNavRow?: boolean;
  end?: boolean;
  navigator?: React.ReactNode;
}

const SectionLayout = ({
  children,
  number,
  title,
  src,
  alt,
  smaller,
  mobileImageSize,
  extraButton,
  mobileReverseCol,
  reverseRow,
  reverseCol,
  reverseNavCol,
  reverseMobileNavCol,
  reverseNavRow,
  end,
  navigator,
}: SectionLayoutProps) => {
  const boxVariants = generateVariants(0.2, 2);
  const contentVariants = generateVariants(0.3, 2);

  return (
    <AnimatePresence>
      <Section layout>
        {number && title && (
          <TitleWrapper>
            <HeadingFive>
              <Num>{number} </Num>
              {title}
            </HeadingFive>
          </TitleWrapper>
        )}

        <Box
          reverseRow={reverseRow}
          reverseCol={reverseCol}
          mobileReverseCol={mobileReverseCol}
        >
          <Content
            variants={contentVariants}
            animate="visible"
            initial="hidden"
            exit="hidden"
            reverseNavCol={reverseNavCol}
            reverseNavRow={reverseNavRow}
            reverseMobileNavCol={reverseMobileNavCol}
          >
            <Article>{children}</Article>
            {navigator && <Navigator>{navigator}</Navigator>}
          </Content>
          <ImageBox
            end={end}
            variants={boxVariants}
            animate="visible"
            initial="hidden"
            exit="hidden"
          >
            {src && alt ? (
              <Image
                src={src}
                alt={alt}
                smaller={smaller}
                mobileImageSize={mobileImageSize}
              />
            ) : (
              <>{extraButton}</>
            )}
          </ImageBox>
        </Box>
      </Section>
    </AnimatePresence>
  );
};

export default SectionLayout;
