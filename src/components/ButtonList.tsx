import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { setPage } from "../redux/features/pages button/pagesButtonSlice";

function ButtonList() {
  const page = useAppSelector((store) => store.pagesButtonSlice.page);
  const appDispatch = useAppDispatch();

  const handlePrev = () => {
    if (page <= 1) {
      appDispatch(setPage(42));
    } else {
      appDispatch(setPage(page - 1));
    }
  };

  const handleNext = () => {
    if (page >= 42) {
      appDispatch(setPage(1));
    } else {
      appDispatch(setPage(page + 1));
    }
  };

  return (
    <div className="my-10 flex flex-col items-center justify-center gap-5 text-lg sm:flex-row sm:justify-around sm:text-xl">
      <button
        onClick={handlePrev}
        className="rounded bg-red-600 px-2 py-1.5 transition-colors hover:bg-red-500"
      >
        Previous page: {page === 1 ? "42" : page - 1}
      </button>
      <p className="rounded bg-green-600 px-2 py-1.5 transition-colors hover:bg-green-500">
        Current page: {page}
      </p>
      <button
        onClick={handleNext}
        className="rounded bg-blue-600 px-2 py-1.5 transition-colors hover:bg-blue-500"
      >
        Next page: {page + 1}
      </button>
    </div>
  );
}

export default ButtonList;
