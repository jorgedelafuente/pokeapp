import Button from "@/components/button/Button";
import {
  PaginationBarContainer,
  CurrentPageContainer,
} from "./PaginationBar.styles";

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
      {nextPage && (
        <CurrentPageContainer>
          <p>Current Page</p>
          <div>{calculateCurrentPage(nextPage)}</div>
        </CurrentPageContainer>
      )}
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
