import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/react';
import pdfIcon from 'public/pdf.svg';

const PdfButton = ({ content, pdf }) => (
  <Button
    as="a"
    href={pdf}
    variant="outline"
    pos="relative"
    mt="20px"
    target="_blank"
    rel="noopener"
    noreferrer
    id-analytics-group="modal"
    id-analytics-name="View-Details-Button">
    {content}
    <Image src={pdfIcon} pos="absolute" right="23px" top="10px" />
  </Button>
);

export default PdfButton;
