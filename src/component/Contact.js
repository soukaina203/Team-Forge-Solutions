// Footer.js
import React from 'react';
import './contact.css'; // Import custom CSS if needed
import { Fade } from 'react-reveal';

const Contact = () => {
  return (
    <Fade>
    <div>
      <footer
        class="flex flex-col items-center mt-[4rem]
 text-white text-center text-surface ">
   <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            class="mb-1 text-black fill-current "></path>
        </svg>
        <div className='flex justify-center w-full bg-black'>

        <div class="container px-6 pt-6  ">
        

          <div>
            <form action="">
              <div
                class="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                <div class="md:mb-6 md:ms-auto">
                  <p>
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div class="relative md:mb-6" data-twe-input-wrapper-init>
                  <input
                    type="email"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInputEmail"
                    placeholder="Email address" />
                  <label
                    for="exampleFormControlInputEmail"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                  >Email address
                  </label>
                </div>

                <div class="mb-6 md:me-auto">
                  <button
                    type="submit"
                    class="inline-block rounded px-6 pb-[6px] pt-2 text-xs font-medium
                   uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition
                    duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none 
                    focus:ring-0 active:shadow-1 bg-indigo-500 dark:text-white"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div class="mb-6">
          
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4">
            <div class="mb-6">
              <h5 class="mb-2.5 font-bold uppercase">Company
              </h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!">(+888) 123 456 765</a>
                </li>
                <li>
                  <a href="#!">infoname@mail.com</a>
                </li>
                <li>
                  <a href="#!">Old city Street,USA
                    1212 New york-3500</a>
                </li>

              </ul>
            </div>

            <div class="mb-6">
              <h5 class="mb-2.5 font-bold uppercase">Contact</h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!">(+888) 123 456 765</a>
                </li>
                <li>
                  <a href="#!">infoname@mail.com</a>
                </li>
                <li>
                  <a href="#!">Old city Street,USA
                    1212 New york-3500</a>
                </li>

              </ul>
            </div>

            <div class="mb-6">
              <h5 class="mb-2.5 font-bold uppercase">Services</h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!">Mechanic Masters</a>
                </li>
                <li>
                  <a href="#!">Speedy Auto Repair</a>
                </li>
                <li>
                  <a href="#!">Mobile Car Repair</a>
                </li>
                <li>
                  <a href="#!">Pro Auto Fix</a>
                </li>
              </ul>
            </div>

            <div class="mb-6">
              <h5 class="mb-2.5 font-bold uppercase">Links</h5>

              <ul class="mb-0 list-none">
                <li>
                  <a href="#!">(+888) 123 456 765</a>
                </li>
                <li>
                  <a href="#!">infoname@mail.com</a>
                </li>
                <li>
                  <a href="#!">Old city Street,USA
                    1212 New york-3500</a>
                </li>

              </ul>
            </div>The website for Team Forge Solutions showcases their premier event planning services and defines their brand. It highlights TF-SOL's creativity, excellence, and dedication to crafting unforgettable experiences 
          </div>
        </div>
        </div>

        <div class="w-full  bg-black p-4 text-center font-Yantramanav-Black">
          © 2024 Copyright:
          <a class="font-semibold ml-1" href="https://tw-elements.com/"
          >
            TFS

          </a>

        </div>
      </footer>
    </div>
  </Fade>
  );
};

export default Contact;
