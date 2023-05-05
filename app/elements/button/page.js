import cssjson from "../../data/Buttons";

export default function Buttons() {
  return (
    <div className="w-full h-screen ">
      <div className="grid items-center h-auto gap-8 ml-24 md:grid-cols-2 xl:grid-cols-3 md:ml-52 ">
        {cssjson.elements.map((element) => (
          <div
            key={element.id}
            className={
              "grid grid-cols-2 h-auto p-5 justify-center  items-center max-w-2xl gap-4  border-2 border-r-teal-500 border-t-fuchsia-500 md:flex-row rounded-2xl border-b-teal-500 border-l-fuchsia-500 hover:border-l-teal-500 hover:border-b-fuchsia-500 hover:border-r-fuchsia-500 hover:border-t-teal-500"
            }
          >
            <div className="flex items-center justify-center w-1/2 p-2">
              <button className={element.css}>Wind Tails</button>
            </div>
            <textarea
              value={element.css}
              className="w-full p-2 text-white bg-gray-900 rounded"
              readOnly
            />
          </div>
        ))}
      </div>
    </div>
  );
}
