import { useAppSelector } from "../hooks/storeHooks";
import { useGetAllCharactersQuery } from "../redux/api/charactersApi";
import ButtonList from "./ButtonList";
import CharacterItem from "./CharacterItem";
import Loading from "./Loading";

function CharactersList() {
  const page = useAppSelector((store) => store.pagesButtonSlice.page);
  const { isLoading, isFetching, isError, error, data } =
    useGetAllCharactersQuery(page);

  if (isLoading || isFetching) return <Loading />;

  if (isError) console.log(error);

  return (
    <div className="pb-10">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">
        Rick and Morty
      </h1>
      <ButtonList />
      <div className="container mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {data?.results.map((character) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default CharactersList;
