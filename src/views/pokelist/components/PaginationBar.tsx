import Button from "@/components/button/Button";
import { PaginationBarContainer } from "./PaginationBar.styles";

interface PaginationBarProps {
  nextPage?: number;
  fetchNewPageData: (arg: number) => void;
}

const PaginationBar = ({ fetchNewPageData, nextPage }: PaginationBarProps) => {
  const calculateCurrentPage = (nextPageNum: number | undefined) => {
    if (!nextPageNum) {
      return 0;
    }
    return nextPageNum / 20;
  };

  return (
    <PaginationBarContainer>
      {nextPage && (
        <Button
          buttonText="Prev Page"
          onClick={() => fetchNewPageData(nextPage - 40)}
          disabled={calculateCurrentPage(nextPage) <= 1}
        />
      )}
      {nextPage && <>Current Page : {calculateCurrentPage(nextPage)}</>}
      {nextPage && (
        <Button
          buttonText="Next Page"
          onClick={() => fetchNewPageData(nextPage)}
        />
      )}
    </PaginationBarContainer>
  );
};

export default PaginationBar;