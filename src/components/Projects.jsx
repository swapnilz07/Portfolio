import React from "react";

function Projects() {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center md:px-[75px] px-[30px] py-20">
      <div className="flex flex-col w-full bg-red-500 h-[650px]">
        {/* First card Section */}
        <div className="h-[325px] bg-purple-500 mx-10 flex">
          <div className="bg-blue-500 w-[425px]">Image Section</div>
          <div className="ml-5 py-5 bg-my-theme w-[600px]">
            <h1 className=" text-2xl underline">
              Finance App - API Based Project
            </h1>
            <ol className="list-disc ml-8 text-lg mt-3">
              <li>
                Develope a functional finance based web application for clients,
                users can find the best finance bank and non-banking finance
                companies for themselves that suits their budget.
              </li>
              <li>
                Webapp that fetch data from the API to show all details about
                Loans.
              </li>
              <li>
                Technology Used : React Js, Node js, Express js, MongoDB,
                Material UI
              </li>
              <li>
                Notable Features : Login Functionality, User uthentication
              </li>
            </ol>
            <div className="ml-5 mt-8">
              <button className="border-2 w-28 p-2 text-center items-center font-semibold rounded-lg text-dark-blue">
                Gthub link
              </button>
              <button className="ml-10 border-2 w-28 p-2 text-center items-center font-semibold rounded-lg text-dark-blue">
                Live Link
              </button>
            </div>
          </div>
        </div>
        {/* second card section */}
        <div className="h-[325px] bg-purple-500 mx-10 flex">
          <div className="bg-blue-500 w-[425px]">Image Section</div>
          <div className="ml-5 py-5 bg-my-theme w-[600px]">
            <h1 className=" text-2xl underline">
              Finance App - API Based Project
            </h1>
            <ol className="list-disc ml-8 text-lg mt-3">
              <li>
                Develope a functional finance based web application for clients,
                users can find the best finance bank and non-banking finance
                companies for themselves that suits their budget.
              </li>
              <li>
                Webapp that fetch data from the API to show all details about
                Loans.
              </li>
              <li>
                Technology Used : React Js, Node js, Express js, MongoDB,
                Material UI
              </li>
              <li>
                Notable Features : Login Functionality, User uthentication
              </li>
            </ol>
            <div className="ml-5 mt-8">
              <button className="border-2 w-28 p-2 text-center items-center font-semibold rounded-lg text-dark-blue">
                Gthub link
              </button>
              <button className="ml-10 border-2 w-28 p-2 text-center items-center font-semibold rounded-lg text-dark-blue">
                Live Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
