import { Character } from "../shared/interfaces";

type Props = { character: Character };

function CharacterItem({ character }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-center text-xl font-semibold sm:text-2xl">
        {character.name}
      </h4>
      <img
        src={character.image}
        alt={character.name}
        className="mx-auto w-9/12 rounded-full object-cover object-center"
      />
      <p className="text-center text-lg sm:text-xl">{character.status}</p>
    </div>
  );
}

export default CharacterItem;
