function Label() {
  return (
    <div className=" bg-gray-300 flex justify-center h-screen  flex-col text-black items-center px-8 box-border w-[50%] max-md:hidden">
      <div className=" w-[100%] justify-start ">
        <p className="text-[26px] font-bold tracking-[0.5px] text-left">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          cum nulla totam animi, et ducimus incidunt, sequi labore ipsa minus
          laudantium veniam."
        </p>
        <h3 className=" mt-4 text-xl font-medium">Name</h3>
        <h3 className=" text-base font-medium text-gray-500">
          CEO | ACEME INC
        </h3>
      </div>
    </div>
  );
}

export default Label;
