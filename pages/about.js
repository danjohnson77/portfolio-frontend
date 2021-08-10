import Image from "next/image";
import SpacedText from "../components/SpacedText";

const about = () => {
  return (
    <div className="panel md:w-10/12">
      <div className="flex flex-col md:flex-row h-full justify-between w-10/12">
        <div className="flex justify-center items-center py-10">
          <div className="overflow-hidden rounded-full w-48 h-48"></div>
        </div>
        <div className="flex flex-col md:w-9/12 md:p-10">
          <SpacedText text="ABOUT ME" classes="pb-10" />
          <div className="text-sm leading-7 tracking-widest font-subheading">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              praesentium odit aliquid enim sit. Corporis dolores dicta quod
              aliquid rem facere est nisi, expedita magni in saepe culpa ullam
              sint ex sunt iure numquam voluptates. Optio voluptatum veniam
              maiores dolorem dolor mollitia dicta illo consequuntur placeat
              pariatur vitae, eius voluptatem.
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus nesciunt laudantium aut culpa esse corrupti magnam
              tempore reprehenderit. Optio iure velit voluptates harum quo vel
              rerum fugiat cum temporibus adipisci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
