interface Text {
  text: string;
}
export default function Button({ text }: Text) {
  return (
    <>
      <div className="mt-">
        <button
          type="submit"
          className="text-gray-500 border-2 w-full  border-slate-900 hover:border-gray-50 bg-slate-900 hover:bg-main px-8 my-3 py-1 rounded-3xl hover:text-gray-50 duration-500"
        >
          {text}
        </button>
      </div>
    </>
  );
}
