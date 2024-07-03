import React, { useEffect, useRef, useState } from "react";
import getAiText from "../../hooks/getAiText";
import toast from "react-hot-toast";
function AiSearch() {
  const [query, Setquery] = useState({ prompt: "", wordlimit: "" });
  const [hidden, Sethidden] = useState(false);
  const [loading, Setloading] = useState(false);
  const [data, Setdata] = useState([]); //[{ai:"",message:""}]
  const last = useRef();

  useEffect(() => {
    setTimeout(() => {
      last.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, [data]);

  async function HandleSubmit(e) {
    e.preventDefault();
    if (query.prompt.length === 0) {
      toast.error("query is empty");
      Setquery({ prompt: "", wordlimit: "" });
      return;
    }
    if (query.wordlimit <= 0) {
      toast.error("wordsize must be greater than zero");
      Setquery({ prompt: "", wordlimit: "" });
      return;
    }
    Setdata((data) => [...data, { ai: false, message: query.prompt }]);
    Setloading(true);
    try {
      var text = await getAiText(query);
      Setdata((data) => [...data, { ai: true, message: text.text }]); // i learnt it in these project see file for detail
    } catch (err) {
      console.log("err", err.message);
    } finally {
      Setloading(false);
    }
    Setquery({ prompt: "", wordlimit: "" });
  }
  useEffect(() => {
    console.log("response", data);
  }, [data]);

  return (
    <div>
      <button
        className="active:scale-75 text-white fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium  disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        onClick={() => Sethidden(!hidden)}
      >
        <svg
          xmlns=" http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path
            d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
            className="border-gray-200"
          ></path>
        </svg>
      </button>

      <div
        className={`flex flex-col h-[500px] w-[500px]  bg-gray-300 fixed shadow-gray-700 shadow-lg rounded-lg bottom-[calc(4rem+1.5rem)] right-0 mr-4 p-6 gap-3 ${
          hidden ? "hidden" : ""
        }`}
      >
        <div className="overflow-auto max-h-[400px]  gap-2 p-2">
          {data.length === 0 ? (
            <div class="flex gap-3 my-4 text-gray-600 text-sm flex-1">
              <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div class="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    ></path>
                  </svg>
                </div>
              </span>
              <p class="leading-relaxed">
                <span class="block font-bold text-gray-700">AI </span>Hi, how
                can I help you today?
              </p>
            </div>
          ) : (
            data.map((x) => {
              return (
                <>
                  <div className={`chat ${x.ai ? "chat-start" : "chat-end "}`}>
                    <div className="chat-image avatar">
                      {x.ai ? (
                        <div class="rounded-full bg-gray-100 border p-1">
                          <svg
                            stroke="none"
                            fill="black"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                            ></path>
                          </svg>
                        </div>
                      ) : (
                        <div class="rounded-full bg-gray-100 border p-1">
                          <svg
                            stroke="none"
                            fill="black"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                    <div
                      className={`chat-bubble ${
                        !x.ai ? "chat-bubble-primary" : ""
                      }`}
                    >
                      {x.message}
                    </div>

                  </div>
                </>
              );
            })
          )}
                    {loading?<div class="flex gap-3 my-4 text-gray-600 text-sm flex-1"><span
          class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <div class="rounded-full bg-gray-100 border p-1"><svg stroke="none" fill="black" stroke-width="1.5"
              viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z">
              </path>
            </svg></div>
        </span>
        <p class="leading-relaxed"><span class="block font-bold text-gray-700">AI </span><span className="loading loading-dots loading-lg"></span>
        </p>
      </div>:""}
                  <div ref={last}></div>
        </div>

        <div className="absolute  bottom-0 p-2 flex items-center mb-2">
          <form
            onSubmit={(e) => HandleSubmit(e)}
            className="flex items-center justify-center w-full space-x-2"
          >
            <input
              className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
              placeholder="Type your query"
              name="prompt"
              value={query.prompt}
              onChange={(e) => Setquery({ ...query, prompt: e.target.value })}
            />
            <input
              className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
              type="text"
              placeholder="Set wordlimit"
              name="wordlimit"
              value={query.wordlimit}
              onChange={(e) =>
                Setquery({ ...query, wordlimit: e.target.value })
              }
            />
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AiSearch;
