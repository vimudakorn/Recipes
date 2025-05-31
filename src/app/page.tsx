import Image from "next/image";
import IngredientsImage from "./components/ingredientsImage";
import BackgroundImage from "./components/BackgroundImage";

export default function Home() {
  return (
    <div className="w-screen">
      <div className="relative flex justify-center h-80">
        <div className="relative w-full h-72">
          <BackgroundImage/>
        </div>
        <div className="absolute bottom-0 border-2 p-2 w-[500px]">
          <div className="bg-red-400 w-full h-full p-6 text-gray-50">
            <h2 className="text-2xl font-bold mb-2 text-center ">
              MANGO STICKY RICE
            </h2>
            <p className="text-center">More infomation about this menu</p>
          </div>
        </div>
      </div>
      <div className="flex mt-8 px-4 gap-3">
        <div className="flex flex-col gap-2 w-[250px]">
          <div className="bg-red-400 text-gray-50">
            <p className="font-semibold p-2 text-xl">Ingredients</p>
          </div>
          <ol>
            <li>1. Ingredient1</li>
            <li>2. Ingredient2</li>
            <li>3. Ingredient3</li>
          </ol>
          <ul className="space-y-3">
            <li>
              <IngredientsImage/>
            </li>
            <li>
            <IngredientsImage/>
            </li>
            <li>
            <IngredientsImage/>
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 items-start gap-3">
          <div className="bg-red-400 text-gray-50 inline-block p-2">
            <p className="font-semibold text-xl m-0">How to cook</p>
          </div>
          <ol className="space-y-4">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
